import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import './BinaryBackground.css';
import './FixedButton.css';

const TYPING_SPEED = 100;
const ERASING_SPEED = 100;
const PAUSE_DURATION = 1000;
// Общая длительность падения шара
const BOUNCE_DURATION = 3300; // 3.3 секунды
// Момент начала морфинга (за 0.2 секунды до конца анимации)
// const MORPH_START_TIME = BOUNCE_DURATION - 200;
// const MORPH_DURATION = 2000; // Длительность анимации морфинга
const INITIAL_DELAY = 500; // Задержка перед началом анимации текста после морфинга

// Супер простой компонент
function BinaryBackground({ onVisibilityChange }: { onVisibilityChange: (isVisible: boolean) => void }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bouncingIndex, setBouncingIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  // Параметры для отталкивания и перемещения с улучшенной плавностью
  const PUSHABLE_BORDER = 5; // Процент от края экрана для перехода
  const TRANSITION_SMOOTHNESS = 0.1; // Уменьшаем для более плавного движения (было 0.2)
  const RETURN_DELAY = 2000; // Задержка в мс перед возвратом цифр
  const RETURN_SPEED = 0.000075; // Экстремально низкая скорость возврата (уменьшаем в 3+ раза)
  const RETURN_FRICTION = 0.9995; // Практически отсутствующее трение для сверхдолгого движения
  const HOME_THRESHOLD = 0.15; // Уменьшаем порог для определения "дома" (было 0.2)
  const HOME_SMOOTHING = 0.02; // Сильно снижаем для максимальной плавности (было 0.05)
  const RETURN_MIN_SPEED = 0.0001; // Минимальная скорость возврата для очень близких объектов
  const ULTRA_SLOW_FACTOR = 0.25; // Дополнительное замедление для сверхмедленного движения
  const FRICTION_FACTOR = 0.99; // Уменьшаем трение для более дальних полетов (было 0.985)
  
  // Сохраняем текущие смещения и импульс всех цифр
  const digitPositions = useRef<{ x: number, y: number }[]>([]);
  const digitMomentum = useRef<{ x: number, y: number }[]>([]);
  const digitTargets = useRef<{ x: number, y: number }[]>([]);
  const digitHomePositions = useRef<{ x: number, y: number }[]>([]);
  const prevMousePos = useRef<{ x: number, y: number } | null>(null);
  const mouseSpeed = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const lastFrameTime = useRef<number>(0);
  const lastInteractionTime = useRef<number>(0);
  const isReturningHome = useRef<boolean>(false);

  const binaryDigits = React.useMemo(() => {
    // Создаем 150 случайных двоичных цифр для фона
    return Array.from({ length: 150 }, () => Math.round(Math.random()));
  }, []);

  // Инициализируем позиции и импульс при первом рендере
  useEffect(() => {
    digitPositions.current = binaryDigits.map(() => ({ x: 0, y: 0 }));
    digitMomentum.current = binaryDigits.map(() => ({ x: 0, y: 0 }));
    digitTargets.current = binaryDigits.map(() => ({ x: 0, y: 0 }));
    digitHomePositions.current = binaryDigits.map(() => ({ x: 0, y: 0 }));
  }, [binaryDigits]);

  // Отслеживаем скролл, чтобы скрывать бинарный фон при прокрутке
  useEffect(() => {
    const handleScroll = () => {
      // Проверяем видимость первого экрана
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Если нижняя граница секции выше верхней границы окна браузера,
        // или верхняя граница секции ниже нижней границы окна - скрываем бинарный фон
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // Если секцию не нашли, используем стандартную логику с процентом прокрутки
        if (window.scrollY > window.innerHeight * 0.8) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Вызываем функцию при первой загрузке
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Прогрессивная анимация - появление цифр постепенно
    binaryDigits.forEach((_, index) => {
      setTimeout(() => {
        if (digitRefs.current[index]) {
          digitRefs.current[index]?.classList.add('visible');
        }
      }, index * 15); // Ускоряем появление цифр
    });
    
    // Проверяем видимость через 2 секунды
    setTimeout(() => {
      binaryDigits.forEach((_, index) => {
        if (digitRefs.current[index] && !digitRefs.current[index]?.classList.contains('visible')) {
          digitRefs.current[index]?.classList.add('visible');
        }
      });
    }, 2000);

    // Запускаем анимацию движения с плавностью и инерцией
    const applyMomentum = (timestamp: number) => {
      if (!isVisible) {
        lastFrameTime.current = timestamp;
        requestAnimationFrame(applyMomentum);
        return;
      }
      
      // Рассчитываем дельту времени для стабильной физики независимо от FPS
      const deltaTime = lastFrameTime.current ? (timestamp - lastFrameTime.current) / 16.67 : 1;
      lastFrameTime.current = timestamp;
      
      // Проверяем, нужно ли возвращать цифры на исходное место
      const timeSinceLastInteraction = timestamp - lastInteractionTime.current;
      if (timeSinceLastInteraction > RETURN_DELAY && !isReturningHome.current) {
        isReturningHome.current = true;
        
        // Плавно устанавливаем целевые позиции на исходные
        digitRefs.current.forEach((digit, index) => {
          if (digit) {
            digitTargets.current[index] = { ...digitHomePositions.current[index] };
          }
        });
      }
      
      // Постепенно снижаем скорость мыши для сглаживания движений
      mouseSpeed.current.x *= 0.95;
      mouseSpeed.current.y *= 0.95;
      
      digitRefs.current.forEach((digit, index) => {
        if (!digit) return;
        
        // Применяем импульс с плавным затуханием
        const hasImpulse = Math.abs(digitMomentum.current[index].x) > 0.05 || 
                           Math.abs(digitMomentum.current[index].y) > 0.05;
        
        // Проверяем разницу между текущей и целевой позицией
        const dx = digitTargets.current[index].x - digitPositions.current[index].x;
        const dy = digitTargets.current[index].y - digitPositions.current[index].y;
        const hasDelta = Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1;
        
        // Если возвращаемся домой, усиливаем дрейф к исходной позиции
        if (isReturningHome.current) {
          // Применяем дополнительную силу возврата к исходной позиции
          const homeX = digitHomePositions.current[index].x - digitPositions.current[index].x;
          const homeY = digitHomePositions.current[index].y - digitPositions.current[index].y;
          
          // Если цифра еще далеко от дома, продолжаем возвращать
          if (Math.abs(homeX) > HOME_THRESHOLD || Math.abs(homeY) > HOME_THRESHOLD) {
            // Используем расстояние для корректировки скорости
            const distanceFromHome = Math.sqrt(homeX * homeX + homeY * homeY);
            
            // Добавляем больше случайности для создания эффекта неравномерности движения
            // Создаем уникальный паттерн для каждой цифры на основе индекса
            const uniqueRandomSeed = Math.sin(index * 10.3) * 0.5 + 0.5; // от 0 до 1
            
            // Определяем направление случайных колебаний для каждой цифры
            // Это создаст эффект, как будто цифры "блуждают", возвращаясь домой
            const wiggleX = Math.sin(performance.now() * 0.0001 + index * 0.7) * 0.1 * uniqueRandomSeed;
            const wiggleY = Math.cos(performance.now() * 0.0001 + index * 0.7) * 0.1 * uniqueRandomSeed;
            
            // Экстремально медленное возвращение
            // Используем кубический корень от расстояния для еще более плавного замедления при приближении
            const returnFactor = Math.max(RETURN_MIN_SPEED, 
              Math.min(0.0005, RETURN_SPEED * Math.pow(distanceFromHome, 1/3) / 25));
            
            // Добавляем небольшую случайность для разнообразия движения (от -50% до +50%)
            const randomVariation = 0.5 + Math.random() * 1.0; 
            
            // Постепенно приближаем к дому с экстремально медленной скоростью
            // Добавляем крошечные колебания для более органичного движения
            digitMomentum.current[index].x += (homeX + wiggleX) * returnFactor * deltaTime * randomVariation * ULTRA_SLOW_FACTOR;
            digitMomentum.current[index].y += (homeY + wiggleY) * returnFactor * deltaTime * randomVariation * ULTRA_SLOW_FACTOR;
            
            // Применяем практически отсутствующее трение для сверхдолгого движения
            digitMomentum.current[index].x *= RETURN_FRICTION;
            digitMomentum.current[index].y *= RETURN_FRICTION;
            
            // Ограничиваем скорость возврата для плавности - ещё ниже чем раньше
            const maxReturnSpeed = 0.08; // Снижаем максимальную скорость (было 0.15)
            digitMomentum.current[index].x = Math.max(Math.min(digitMomentum.current[index].x, maxReturnSpeed), -maxReturnSpeed);
            digitMomentum.current[index].y = Math.max(Math.min(digitMomentum.current[index].y, maxReturnSpeed), -maxReturnSpeed);
            
            // Дополнительно снижаем скорость при приближении к дому
            if (distanceFromHome < 30) { // Увеличиваем зону замедления (было 20)
              // Чем ближе к дому, тем сильнее замедляем - используем экспоненту
              const slowdownFactor = Math.pow(distanceFromHome / 30, 2) * 0.5 + 0.3;
              digitMomentum.current[index].x *= slowdownFactor;
              digitMomentum.current[index].y *= slowdownFactor;
            }
          } else if (Math.abs(digitMomentum.current[index].x) < 0.01 && Math.abs(digitMomentum.current[index].y) < 0.01) {
            // Если мы почти остановились и почти дома, принудительно устанавливаем исходную позицию
            // Используем более низкий порог для еще большей точности фиксации (было 0.02)
            digitPositions.current[index] = { ...digitHomePositions.current[index] };
            digitTargets.current[index] = { ...digitHomePositions.current[index] };
            digitMomentum.current[index] = { x: 0, y: 0 };
            
            // Увеличиваем время перехода для финального размещения
            digit.style.transition = 'transform 4s cubic-bezier(0.05, 0.05, 0.05, 1)';
            digit.style.transform = `translate(${digitPositions.current[index].x}px, ${digitPositions.current[index].y}px)`;
          }
        }
        
        if (hasImpulse || hasDelta) {
          // Если есть импульс, обновляем целевую позицию
          if (hasImpulse) {
            digitTargets.current[index].x += digitMomentum.current[index].x * deltaTime;
            digitTargets.current[index].y += digitMomentum.current[index].y * deltaTime;
            
            // Применяем трение к импульсу
            digitMomentum.current[index].x *= FRICTION_FACTOR;
            digitMomentum.current[index].y *= FRICTION_FACTOR;
          }
          
          // Плавно приближаем текущую позицию к целевой
          const smoothingFactor = isReturningHome.current ? HOME_SMOOTHING : TRANSITION_SMOOTHNESS;
          digitPositions.current[index].x += dx * smoothingFactor * deltaTime;
          digitPositions.current[index].y += dy * smoothingFactor * deltaTime;
          
          // Проверяем, не вышла ли цифра за пределы экрана
          if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerWidth = containerRect.width;
            const containerHeight = containerRect.height;
            
            // Границы с допуском
            const borderWidthPx = containerWidth * PUSHABLE_BORDER / 100;
            const borderHeightPx = containerHeight * PUSHABLE_BORDER / 100;
            
            // Получаем абсолютную позицию цифры
            const digitRect = digit.getBoundingClientRect();
            const digitCenterX = digitRect.left - containerRect.left + digitRect.width / 2;
            const digitCenterY = digitRect.top - containerRect.top + digitRect.height / 2;
            
            const absoluteX = digitCenterX + digitPositions.current[index].x;
            const absoluteY = digitCenterY + digitPositions.current[index].y;
            
            // Разрешаем небольшой выход за пределы экрана
            const minX = -borderWidthPx;
            const maxX = containerWidth + borderWidthPx;
            const minY = -borderHeightPx;
            const maxY = containerHeight + borderHeightPx;
            
            // Если вышла за пределы - плавно переносим на другую сторону
            if (absoluteX < minX) {
              // Перенос слева направо с плавным переходом
              digitTargets.current[index].x += maxX - minX;
              digitPositions.current[index].x += maxX - minX;
            } else if (absoluteX > maxX) {
              // Перенос справа налево с плавным переходом
              digitTargets.current[index].x -= maxX - minX;
              digitPositions.current[index].x -= maxX - minX;
            }
            
            if (absoluteY < minY) {
              // Перенос сверху вниз с плавным переходом
              digitTargets.current[index].y += maxY - minY;
              digitPositions.current[index].y += maxY - minY;
            } else if (absoluteY > maxY) {
              // Перенос снизу вверх с плавным переходом
              digitTargets.current[index].y -= maxY - minY;
              digitPositions.current[index].y -= maxY - minY;
            }
          }
          
          // Применяем плавное перемещение с использованием transform и переменной transition
          if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            // Для более резких движений - без анимации перехода
            digit.style.transition = 'none';
          } else {
            // Для мелких корректировок - плавные переходы
            digit.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.1, 0.25, 1)';
          }
          
          digit.style.transform = `translate(${digitPositions.current[index].x}px, ${digitPositions.current[index].y}px)`;
        }
      });
      
      // Продолжаем анимацию, пока есть движение
      requestAnimationFrame(applyMomentum);
    };
    
    // Запускаем анимацию импульса с поддержкой временной дельты
    requestAnimationFrame(applyMomentum);

    // Очистка анимации при размонтировании
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [binaryDigits, isVisible]);
  
  // Регистрируем глобальное отслеживание движения мыши
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !isVisible) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Рассчитываем скорость движения мыши
      if (prevMousePos.current) {
        const deltaX = x - prevMousePos.current.x;
        const deltaY = y - prevMousePos.current.y;
        
        // Сглаживаем скорость мыши (exponential moving average)
        mouseSpeed.current.x = mouseSpeed.current.x * 0.6 + deltaX * 0.4; // Меньше сглаживания (было 0.7/0.3)
        mouseSpeed.current.y = mouseSpeed.current.y * 0.6 + deltaY * 0.4; // Для более резкого отклика
        
        // Обновляем время последнего взаимодействия
        lastInteractionTime.current = performance.now();
        // Сбрасываем флаг возврата домой
        isReturningHome.current = false;
        
        // Применяем отталкивание к ближайшим цифрам
        const speed = Math.sqrt(mouseSpeed.current.x * mouseSpeed.current.x + mouseSpeed.current.y * mouseSpeed.current.y);
        
        if (speed > 3) { // Снижаем порог скорости для более частого срабатывания
          digitRefs.current.forEach((digit, index) => {
            if (!digit) return;
            
            // Получаем позицию цифры
            const digitRect = digit.getBoundingClientRect();
            const digitX = digitRect.left + digitRect.width / 2;
            const digitY = digitRect.top + digitRect.height / 2;
            
            // Вычисляем расстояние от курсора до цифры
            const distX = digitX - e.clientX;
            const distY = digitY - e.clientY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            
            // Применяем отталкивание к цифрам в радиусе 150px от курсора
            if (distance < 150) {
              // Рассчитываем угол отталкивания
              const angle = Math.atan2(distY, distX);
              
              // Сила отталкивания обратно пропорциональна расстоянию
              const force = Math.min(25, 500 / (distance + 10)) * (speed / 5);
              
              // Рассчитываем вектор отталкивания
              const pushX = Math.cos(angle) * force;
              const pushY = Math.sin(angle) * force;
              
              // Применяем импульс к цифре
              digitMomentum.current[index].x += pushX;
              digitMomentum.current[index].y += pushY;
              
              // Добавляем подсветку для близких цифр
              if (distance < 80) {
                digit.style.color = '#00ff00';
                digit.style.transform = `translate(${digitPositions.current[index].x}px, ${digitPositions.current[index].y}px) scale(1.2)`;
              }
            }
          });
        }
      }
      
      prevMousePos.current = { x, y };
    };
    
    // Добавляем слушатель события на document
    document.addEventListener('mousemove', handleGlobalMouseMove);
    
    // Очистка при размонтировании
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isVisible]);
  
  // Добавляем animateFrame для постоянного обновления позиций цифр
  useEffect(() => {
    if (!isVisible || !containerRef.current) return;
    
    const updateDigitPositions = () => {
      digitRefs.current.forEach((digit, index) => {
        if (!digit) return;
        
        // Применяем текущие смещения
        digit.style.transform = `translate(${digitPositions.current[index].x}px, ${digitPositions.current[index].y}px)`;
      });
      
      animationFrameRef.current = requestAnimationFrame(updateDigitPositions);
    };
    
    animationFrameRef.current = requestAnimationFrame(updateDigitPositions);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible]);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };
  
  const handleClick = (index: number) => {
    setBouncingIndex(index);
    
    setTimeout(() => {
      setBouncingIndex(null);
    }, 1000);
  };
  
  const getStyle = (index: number, position: { left: string, top: string }) => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      left: position.left,
      top: position.top,
      opacity: 0,
      transition: 'opacity 0.5s ease', // Ускоряем анимацию перемещения
    };
    
    // Добавляем базовые стили для активного состояния
    if (activeIndex === index) {
      return { 
        ...baseStyle,
        color: '#00ff00', 
        fontSize: '2.8em',
      };
    }
    
    return baseStyle;
  };

  const positions = React.useMemo(() => {
    // Предрассчитываем позиции цифр так, чтобы они были только в пределах первого экрана
    return binaryDigits.map(() => {
      // Распределяем цифры равномерно по всей ширине и высоте экрана
      // но не слишком близко к краям
      const left = 5 + Math.random() * 90; // % от ширины экрана (5-95%)
      const top = 5 + Math.random() * 90; // % от высоты видимой области (5-95%)
      
      return {
        left: `${left}%`,
        top: `${top}%`,
      };
    });
  }, [binaryDigits]);

  useEffect(() => {
    onVisibilityChange(isVisible);
  }, [isVisible, onVisibilityChange]);

  return (
    <div 
      className={`binary-background ${isVisible ? '' : 'hidden'}`}
      ref={containerRef}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 5,
        pointerEvents: isVisible ? 'auto' : 'none',
        willChange: 'transform, opacity',
        transform: 'translateZ(0)' // Включаем аппаратное ускорение
      }}
    >
      {binaryDigits.map((digit, index) => (
        <div
          key={index}
          className={`binary-digit ${bouncingIndex === index ? 'bouncing' : ''}`}
          ref={el => digitRefs.current[index] = el}
          style={getStyle(index, positions[index])}
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => handleClick(index)}
        >
          {digit}
        </div>
      ))}
    </div>
  );
}

interface AboutProps {
  onAnimationComplete?: () => void;
}

export const About: React.FC<AboutProps> = ({ onAnimationComplete }) => {
  const { t } = useTranslation();
  const [displayText, setDisplayText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const morphBackgroundRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; velocityX: number; velocityY: number }>>([]);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  // Новый стейт для видимости бинарного поля
  const [isBinaryVisible, setIsBinaryVisible] = useState(true);
  // Состояние для проверки ширины экрана
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  // Проверяем ширину экрана при загрузке и при ресайзе
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };
    
    // Проверяем при загрузке
    checkScreenSize();
    
    // Устанавливаем слушатель для ресайза
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const createParticles = (x: number, y: number, buttonRect: DOMRect) => {
    const newParticles: Array<{ id: number; x: number; y: number; size: number; color: string; velocityX: number; velocityY: number }> = [];
    const colors = ['#4CAF50', '#8BC34A', '#CDDC39', '#2196F3', '#00BCD4'];
    
    // Получаем абсолютные координаты клика относительно окна браузера
    const absoluteX = buttonRect.left + x;
    const absoluteY = buttonRect.top + y;
    
    for (let i = 0; i < 20; i++) {
      // Создаем частицы с направлением разлета от точки клика
      const angle = Math.random() * Math.PI * 2; // Случайный угол в радианах
      const speed = Math.random() * 7 + 3; // Случайная скорость
      
      newParticles.push({
        id: Date.now() + i,
        x: absoluteX,
        y: absoluteY,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocityX: Math.cos(angle) * speed,
        velocityY: Math.sin(angle) * speed
      });
    }
    
    setParticles(prev => [...prev, ...newParticles]);
    
    // Анимируем движение частиц
    let frameId: number;
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(p => {
          // Проверяем, является ли частица одной из новых
          if (newParticles.some(np => np.id === p.id)) {
            // Обновляем позицию частицы
            return {
              ...p,
              x: p.x + p.velocityX,
              y: p.y + p.velocityY,
              velocityY: p.velocityY + 0.2, // Добавляем гравитацию
              size: p.size * 0.97 // Постепенно уменьшаем размер
            };
          }
          return p;
        }).filter(p => p.size > 0.5) // Удаляем слишком маленькие частицы
      );
      
      frameId = requestAnimationFrame(animateParticles);
    };
    
    frameId = requestAnimationFrame(animateParticles);
    
    // Останавливаем анимацию через 1 секунду
    setTimeout(() => {
      cancelAnimationFrame(frameId);
      setParticles(prev => prev.filter(p => !newParticles.some(np => np.id === p.id)));
    }, 1000);
  };

  const handleCheckButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    createParticles(x, y, rect);
    // Предотвращаем стандартное поведение и всплытие события
    event.preventDefault();
    event.stopPropagation();
    
    // Добавляем видимый эффект при клике
    const button = event.currentTarget;
    button.style.backgroundColor = "#1e7600";
    button.style.transform = "scale(0.95)";

    // Выводим в консоль для отладки
    console.log(t('debugMessages.buttonClicked'));
    
    // Пробуем найти секцию по ID или классу
    let targetSection = document.getElementById('portfolio');
    if (!targetSection) {
      targetSection = document.querySelector('.portfolio-section');
    }
    
    // Прокручиваем к следующему разделу или просто вниз
    if (targetSection) {
      console.log(t('debugMessages.scrollingToSection'), targetSection);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(t('debugMessages.sectionNotFound'));
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
    
    // Через секунду возвращаем стиль кнопки
    setTimeout(() => {
      button.style.backgroundColor = "";
      button.style.transform = "";
    }, 1000);
  };

  // При монтировании компонента - устанавливаем начальную позицию шара
  useEffect(() => {
    const morphBackground = morphBackgroundRef.current;
    if (!morphBackground) return;

    // Устанавливаем начальную позицию - левый верхний угол
    morphBackground.style.position = 'fixed';
    morphBackground.style.top = '0';
    morphBackground.style.left = '0';
    morphBackground.style.margin = '0';
    morphBackground.style.padding = '0';
  }, []);

  // Запускаем морфинг немного раньше окончания анимации падения
  /*
  useEffect(() => {
    const morphBackground = morphBackgroundRef.current;
    if (!morphBackground) return;

    const startMorphing = () => {
      morphBackground.classList.add('morphing');
      
      // Запускаем анимацию текста после завершения морфинга
      setTimeout(() => {
        setStartTyping(true);
        onAnimationComplete?.();
      }, MORPH_DURATION + INITIAL_DELAY);
    };

    // Запускаем морфинг немного раньше завершения анимации падения
    setTimeout(startMorphing, MORPH_START_TIME);
  }, [onAnimationComplete]);
  */
  
  // Вместо морфинга сразу запускаем анимацию текста
  useEffect(() => {
    setTimeout(() => {
      setStartTyping(true);
      onAnimationComplete?.();
    }, INITIAL_DELAY);
  }, [onAnimationComplete]);

  // Анимация текста
  useEffect(() => {
    if (!startTyping) return;

    let timeoutId: number;
    let phase: 'typing0' | 'typing1' | 'erasing' | 'typing2' = 'typing0';
    let currentIndex = 0;

    const baseText = t('about.baseText');
    const firstPhrase = t('about.firstPhrase');
    const secondPhrase = t('about.secondPhrase');

    const animate = () => {
      if (phase === 'typing0') {
        // Печатаем базовый текст
        if (currentIndex <= baseText.length) {
          setDisplayText(baseText.slice(0, currentIndex));
          currentIndex++;
          timeoutId = window.setTimeout(animate, TYPING_SPEED);
        } else {
          currentIndex = 0;
          phase = 'typing1';
          timeoutId = window.setTimeout(animate, TYPING_SPEED);
        }
      } else if (phase === 'typing1') {
        // Печатаем первую фразу
        if (currentIndex <= firstPhrase.length) {
          setDisplayText(baseText + firstPhrase.slice(0, currentIndex));
          currentIndex++;
          timeoutId = window.setTimeout(animate, TYPING_SPEED);
        } else {
          currentIndex = firstPhrase.length;
          timeoutId = window.setTimeout(() => {
            phase = 'erasing';
            animate();
          }, PAUSE_DURATION);
        }
      } else if (phase === 'erasing') {
        // Стираем фразу
        if (currentIndex > 0) {
          setDisplayText(baseText + firstPhrase.slice(0, currentIndex - 1));
          currentIndex--;
          timeoutId = window.setTimeout(animate, ERASING_SPEED);
        } else {
          phase = 'typing2';
          currentIndex = 0;
          timeoutId = window.setTimeout(animate, PAUSE_DURATION);
        }
      } else if (phase === 'typing2') {
        // Печатаем вторую фразу
        if (currentIndex <= secondPhrase.length) {
          setDisplayText(baseText + secondPhrase.slice(0, currentIndex));
          currentIndex++;
          timeoutId = window.setTimeout(animate, TYPING_SPEED);
        } else {
          // Показываем кнопку только после полного завершения анимации текста
          setTimeout(() => {
            setShowButton(true);
          }, 500); // Небольшая задержка перед показом кнопки
        }
      }
    };

    timeoutId = window.setTimeout(animate, 0);

    return () => window.clearTimeout(timeoutId);
  }, [startTyping, t]);

  const renderTextWithCursor = () => {
    const lines = displayText.split('\n');
    return lines.map((line, lineIndex) => (
      <span key={lineIndex} className="line">
        {line}
        {lineIndex === lines.length - 1 && <span className="cursor" />}
      </span>
    ));
  };

  // Отслеживаем скролл для определения, виден ли первый экран
  useEffect(() => {
    // Функция для точного определения видимости первого экрана
    const handleScroll = () => {
      // Первый экран имеет высоту 100vh
      // Когда мы прокручиваем страницу на эту высоту, бинарное поле должно исчезнуть
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Используем точное условие: если прокрутили хотя бы на 100px вниз от начала страницы
      if (scrollTop > 100) {
        // За пределами первого экрана - скрываем
        setIsBinaryVisible(false);
      } else {
        // На первом экране - показываем
        setIsBinaryVisible(true);
      }
    };
    
    // Добавляем обработчик события скролла с throttling для оптимизации
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Вызываем функцию при первой загрузке
    handleScroll();
    
    return () => {
      // Очищаем обработчик событий
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-container">
      {/* Бинарный фон фиксированный на первом экране */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 5,
          opacity: isBinaryVisible ? 1 : 0,
          visibility: isBinaryVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          pointerEvents: 'none',
          transform: 'translateZ(0)', // Включаем аппаратное ускорение
          willChange: 'opacity, visibility'
        }}
      >
        <BinaryBackground onVisibilityChange={() => {}} />
      </div>
      
      <div className="about-wrapper">
        {/* Видео-фон - показывается только на маленьких экранах (1024px и меньше) */}
        {isSmallScreen && (
          <video
            className="about-bg-video"
            src="/pr/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 2,
              pointerEvents: 'none'
            }}
          />
        )}
        {/* <div className="morph-background" ref={morphBackgroundRef} /> */}
        <div className="content-container">
          <section id="about" className="about">
            <div className="about-content">
              <div className="about-text">
                <div className="typing-text">
                  {renderTextWithCursor()}
                </div>
              </div>
              {/* Кнопка теперь строго под текстом, без позиционирования */}
              <div 
                className="fixed-button-container"
                style={{
                  marginTop: '2rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <button 
                  className={`check-button ${showButton ? 'fade-in' : ''}`}
                  onClick={handleCheckButtonClick}
                  style={{ 
                    cursor: 'pointer',
                    opacity: showButton ? 1 : 0, 
                    visibility: showButton ? 'visible' : 'hidden',
                    pointerEvents: 'auto'
                  }}
                >
                  {t('about.buttonText')}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div className="particle-container" ref={particleContainerRef}>
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              position: 'absolute',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              zIndex: 30000
            }}
          />
        ))}
      </div>
    </div>
  );
}; 