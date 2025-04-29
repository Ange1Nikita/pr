import React, { useState, useRef, useEffect } from 'react';
import * as RAPIER from '@dimforge/rapier2d';
import './BinaryBackground.css';
import { useTheme } from '../../context/ThemeContext';

interface BinaryBackgroundRapierProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

function BinaryBackgroundRapier({ onVisibilityChange }: BinaryBackgroundRapierProps) {
  const { theme } = useTheme(); // Получаем текущую тему
  const [isVisible, setIsVisible] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bouncingIndex, setBouncingIndex] = useState<number | null>(null);
  const [blinkingIndices, setBlinkingIndices] = useState<Set<number>>(new Set());
  
  const containerRef = useRef<HTMLDivElement>(null);
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  
  // Rapier физический мир и объекты
  const worldRef = useRef<RAPIER.World | null>(null);
  const bodiesRef = useRef<RAPIER.RigidBody[]>([]);
  const mouseBodyRef = useRef<RAPIER.RigidBody | null>(null);
  
  // Состояние мыши
  const prevMousePos = useRef<{ x: number, y: number } | null>(null);
  const mouseSpeed = useRef<{ x: number, y: number }>({ x: 0, y: 0 });
  const lastInteractionTime = useRef<number>(0);
  const isReturningHome = useRef<boolean>(false);
  
  // Домашние позиции
  const digitHomePositions = useRef<{ x: number, y: number }[]>([]);
  
  // Мерцание "звезд" - индивидуальные параметры для каждой цифры
  const starBlinkParams = useRef<{ speed: number, offset: number, intensity: number }[]>([]);
  
  // Коэффициенты физики
  const RETURN_DELAY = 2000; // Задержка перед возвратом в мс
  const SCALE_FACTOR = 0.01; // Коэффициент для преобразования пикселей в метры
  const FRICTION_FACTOR = 0.99; // Трение для плавного затухания движения
  const HOME_THRESHOLD = 0.15; // Порог для определения "дома"
  const HOME_SMOOTHING = 0.02; // Плавность возврата
  const PUSHABLE_BORDER = 5; // Процент от края экрана для перехода
  const SPRING_EFFECT = 0.003; // Коэффициент пружинного эффекта
  const ROTATION_DAMPING = 0.97; // Затухание вращения
  const ROTATION_FACTOR = 0.5; // Сила вращения при ударе
  const BLINK_INTERVAL_MIN = 5000; // Минимальное время между миганиями (мс) - увеличено
  const BLINK_INTERVAL_MAX = 15000; // Максимальное время между миганиями (мс) - увеличено
  const BLINK_DURATION = 3000; // Длительность одного мигания (мс) - увеличено
  const MAX_BLINKING_DIGITS = 25; // Увеличиваем количество одновременно мигающих "звезд"
  
  // Создаем двоичные цифры
  const binaryDigits = React.useMemo(() => {
    return Array.from({ length: 150 }, () => Math.round(Math.random()));
  }, []);
  
  // Инициализация позиций элементов
  const positions = React.useMemo(() => {
    // Предрассчитываем позиции цифр равномерно по экрану
    return binaryDigits.map(() => {
      const left = 5 + Math.random() * 90; // % от ширины экрана (5-95%)
      const top = 5 + Math.random() * 90; // % от высоты видимой области (5-95%)
      
      return {
        left: `${left}%`,
        top: `${top}%`,
      };
    });
  }, [binaryDigits]);
  
  // Инициализируем параметры мерцания "звезд"
  useEffect(() => {
    // Задаем уникальные параметры мерцания для каждой цифры
    starBlinkParams.current = binaryDigits.map(() => ({
      // Скорость мерцания - разная для каждой "звезды"
      speed: 0.0001 + Math.random() * 0.0003,
      // Сдвиг фазы - чтобы все "звезды" мерцали не синхронно
      offset: Math.random() * Math.PI * 2,
      // Интенсивность мерцания - некоторые мигают сильнее, некоторые слабее
      intensity: 0.3 + Math.random() * 0.7
    }));
  }, [binaryDigits]);
  
  // Эффект для случайного мигания цифр
  useEffect(() => {
    const blinkTimers: number[] = [];
    
    // Функция для запуска мигания случайной цифры
    const startRandomBlink = () => {
      if (!isVisible) return;
      
      // Если уже достигнуто максимальное количество мигающих цифр, пропускаем
      if (blinkingIndices.size >= MAX_BLINKING_DIGITS) {
        // Запланируем следующую попытку через некоторое время
        const nextTryDelay = Math.random() * 1500 + 500; // Уменьшаем задержку для более частых попыток
        blinkTimers.push(window.setTimeout(startRandomBlink, nextTryDelay));
        return;
      }
      
      // Выбираем случайную цифру, которая еще не мигает
      let randomIndex;
      let attempts = 0;
      
      do {
        randomIndex = Math.floor(Math.random() * binaryDigits.length);
        attempts++;
        // Предотвращаем бесконечный цикл, если все цифры уже мигают
        if (attempts > 20) break;
      } while (blinkingIndices.has(randomIndex));
      
      // Если все попытки неудачны или нашли цифру, которая еще не мигает
      if (attempts <= 20 && !blinkingIndices.has(randomIndex)) {
        // Добавляем индекс в набор мигающих цифр
        setBlinkingIndices(prev => {
          const newSet = new Set(prev);
          newSet.add(randomIndex);
          return newSet;
        });
        
        // Убираем мигание через определенное время
        const blinkTimer = window.setTimeout(() => {
          setBlinkingIndices(prev => {
            const newSet = new Set(prev);
            newSet.delete(randomIndex);
            return newSet;
          });
          
          // Запускаем следующее мигание через случайный интервал
          const nextBlinkDelay = Math.random() * (BLINK_INTERVAL_MAX - BLINK_INTERVAL_MIN) + BLINK_INTERVAL_MIN;
          blinkTimers.push(window.setTimeout(startRandomBlink, nextBlinkDelay));
        }, BLINK_DURATION + Math.random() * 5000); // Добавляем случайность в продолжительность
        
        blinkTimers.push(blinkTimer);
      } else {
        // Если не нашли подходящую цифру, попробуем позже
        const retryDelay = Math.random() * 2000 + 1000;
        blinkTimers.push(window.setTimeout(startRandomBlink, retryDelay));
      }
    };
    
    // Запускаем начальные мигания с разными интервалами
    for (let i = 0; i < 10; i++) { // Увеличиваем количество начальных миганий
      const initialDelay = Math.random() * 3000 + i * 800; 
      blinkTimers.push(window.setTimeout(startRandomBlink, initialDelay));
    }
    
    // Очистка таймеров при размонтировании
    return () => {
      blinkTimers.forEach(timer => window.clearTimeout(timer));
    };
  }, [binaryDigits.length, isVisible, blinkingIndices]);
  
  // Инициализация Rapier
  useEffect(() => {
    // Асинхронная инициализация
    const initRapier = async () => {
      try {
        // Создаем физический мир с нулевой гравитацией
        const gravity = { x: 0, y: 0 };
        const world = new RAPIER.World(gravity);
        worldRef.current = world;
        
        // Инициализируем тела для цифр
        if (containerRef.current) {
          const containerRect = containerRef.current.getBoundingClientRect();
          
          // Создаем тела для каждой цифры
          binaryDigits.forEach((_, index) => {
            // Вычисляем абсолютные позиции из процентных
            const left = parseFloat(positions[index].left) / 100 * containerRect.width;
            const top = parseFloat(positions[index].top) / 100 * containerRect.height;
            
            // Сохраняем домашнюю позицию
            digitHomePositions.current[index] = { x: left, y: top };
            
            // Параметры для создания динамического тела
            const bodyDesc = RAPIER.RigidBodyDesc.dynamic()
              .setTranslation(left * SCALE_FACTOR, top * SCALE_FACTOR)
              .setLinearDamping(0.8) // Затухание линейной скорости
              .setAngularDamping(0.8); // Затухание угловой скорости
            
            // Создаем тело
            const body = world.createRigidBody(bodyDesc);
            
            // Создаем коллайдер (круг)
            const colliderDesc = RAPIER.ColliderDesc.ball(15 * SCALE_FACTOR) // Радиус 15px
              .setDensity(0.5) // Плотность
              .setFriction(0.0) // Нет трения
              .setRestitution(0.7); // Хороший отскок
            
            world.createCollider(colliderDesc, body);
            
            // Сохраняем тело
            bodiesRef.current[index] = body;
          });
          
          // Создаем тело для курсора мыши
          const mouseBodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased();
          mouseBodyRef.current = world.createRigidBody(mouseBodyDesc);
          
          // Создаем коллайдер для мыши (сенсор)
          const mouseColliderDesc = RAPIER.ColliderDesc.ball(50 * SCALE_FACTOR) // Радиус 50px
            .setSensor(true); // Сенсор не создает физическую коллизию, но регистрирует пересечения
          
          world.createCollider(mouseColliderDesc, mouseBodyRef.current);
        }
      } catch (error) {
        console.error("Ошибка инициализации Rapier:", error);
      }
    };
    
    // Запускаем инициализацию
    initRapier();
    
    // Очистка ресурсов при размонтировании
    return () => {
      if (worldRef.current) {
        worldRef.current = null;
      }
      
      bodiesRef.current = [];
      mouseBodyRef.current = null;
    };
  }, [binaryDigits, positions]);
  
  // Функция обновления физики и отрисовки
  useEffect(() => {
    let lastTime = 0;
    const isInitialized = () => !!worldRef.current && bodiesRef.current.length > 0;
    
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
    
    const updatePhysics = (timestamp: number) => {
      // Проверяем, инициализирован ли физический мир
      if (!isInitialized() || !isVisible) {
        animationFrameRef.current = requestAnimationFrame(updatePhysics);
        return;
      }
      
      const world = worldRef.current!;
      
      // Рассчитываем дельту времени
      const deltaTime = lastTime ? (timestamp - lastTime) / 1000 : 0.016;
      lastTime = timestamp;
      
      // Проверяем, нужно ли возвращать цифры на исходное место
      const timeSinceLastInteraction = timestamp - lastInteractionTime.current;
      if (timeSinceLastInteraction > RETURN_DELAY && !isReturningHome.current) {
        isReturningHome.current = true;
      }
      
      // Обрабатываем возврат цифр на исходные позиции
      bodiesRef.current.forEach((body, index) => {
        if (body) {
          const position = body.translation();
          
          // Применяем плавное затухание движения (трение)
          const velocity = body.linvel();
          body.setLinvel({ 
            x: velocity.x * FRICTION_FACTOR, 
            y: velocity.y * FRICTION_FACTOR 
          }, true);
          
          // Затухание вращения
          const angularVel = body.angvel();
          body.setAngvel(angularVel * ROTATION_DAMPING, true);
          
          // Если нужно возвращаться домой или скорость очень мала
          if (isReturningHome.current || 
              (Math.abs(velocity.x) < 0.05 && Math.abs(velocity.y) < 0.05)) {
            
            // Домашняя позиция
            const homePos = digitHomePositions.current[index];
            
            // Вектор к домашней позиции
            const homeX = homePos.x * SCALE_FACTOR - position.x;
            const homeY = homePos.y * SCALE_FACTOR - position.y;
            
            // Расстояние до дома
            const distance = Math.sqrt(homeX * homeX + homeY * homeY);
            
            // Если не совсем дома
            if (distance > HOME_THRESHOLD * SCALE_FACTOR) {
              // Применяем пружинную силу (чем дальше, тем сильнее)
              const springForce = distance * SPRING_EFFECT;
              
              // Нормализуем направление
              const forceX = (homeX / distance) * springForce;
              const forceY = (homeY / distance) * springForce;
              
              // Добавляем случайные колебания для более естественного движения
              const randomFactor = Math.sin(timestamp * 0.001 + index * 0.7) * 0.0003;
              const wobbleX = homeX * randomFactor;
              const wobbleY = homeY * randomFactor;
              
              // Применяем силу с колебаниями
              body.applyImpulse({ 
                x: forceX + wobbleX, 
                y: forceY + wobbleY 
              }, true);

              // Постепенно возвращаем в нормальное положение
              const currentAngle = body.rotation();
              if (Math.abs(currentAngle) > 0.01) {
                // Применяем противоположный момент для выравнивания
                const rotationCorrection = -currentAngle * 0.01;
                body.applyTorqueImpulse(rotationCorrection, true);
              }
            } else if (distance < 0.01 * SCALE_FACTOR && Math.abs(angularVel) < 0.1) {
              // Если очень близко к дому и почти не вращается, фиксируем положение
              body.setTranslation({ 
                x: homePos.x * SCALE_FACTOR, 
                y: homePos.y * SCALE_FACTOR 
              }, true);
              
              // Останавливаем движение
              body.setLinvel({ x: 0, y: 0 }, true);
              
              // Устанавливаем нулевой угол
              body.setRotation(0, true);
              body.setAngvel(0, true);
            }
          }
        }
      });
      
      // Шаг физического мира
      world.step();
      
      // Обновляем позиции HTML-элементов
      digitRefs.current.forEach((digit, index) => {
        if (digit && bodiesRef.current[index]) {
          const position = bodiesRef.current[index].translation();
          const homePos = digitHomePositions.current[index];
          const rotation = bodiesRef.current[index].rotation();
          
          // Рассчитываем смещение от исходной позиции
          const offsetX = (position.x / SCALE_FACTOR) - homePos.x;
          const offsetY = (position.y / SCALE_FACTOR) - homePos.y;
          
          // Применяем смещение и вращение через transform
          digit.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}rad)`;
          
          // Обновляем цвет в зависимости от темы и состояния
          // Это позволяет одновременно реагировать на изменение темы и на активные состояния
          updateDigitColor(digit, index);
        }
      });
      
      // Продолжаем анимацию
      animationFrameRef.current = requestAnimationFrame(updatePhysics);
    };
    
    // Запускаем цикл физики
    animationFrameRef.current = requestAnimationFrame(updatePhysics);
    
    // Очистка
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isVisible, binaryDigits, theme]);
  
  // Обновление цвета цифры в зависимости от темы и состояния
  const updateDigitColor = (digit: HTMLDivElement, index: number) => {
    const isActive = activeIndex === index;
    const isBouncing = bouncingIndex === index;
    const isBlinking = blinkingIndices.has(index);
    
    // Базовый цвет в зависимости от темы
    let color = theme === 'dark' ? '#ffffff' : '#000000';
    let opacity = 1; // Базовая непрозрачность
    let textShadow = theme === 'dark' 
      ? '0 0 3px rgba(255, 255, 255, 0.3)' 
      : '0 0 3px rgba(0, 0, 0, 0.2)';
    
    // Если цифра активна, делаем ее зеленой
    if (isActive || isBouncing) {
      color = '#00ff00';
      textShadow = '0 0 8px rgba(0, 255, 0, 0.7)';
    } 
    // Эффект мерцания "звезд"
    else if (isBlinking || Math.random() < 0.05) { // Увеличена вероятность спонтанного мерцания
      // Получаем индивидуальные параметры мерцания для этой цифры
      const { speed, offset, intensity } = starBlinkParams.current[index] || 
        { speed: 0.0002, offset: 0, intensity: 0.5 };
      
      // Создаем сложную функцию мерцания для имитации реалистичных звезд
      // Комбинируем несколько синусоид разной частоты
      const time = Date.now();
      const mainPulse = Math.sin(time * speed + offset);
      const secondaryPulse = Math.sin(time * speed * 1.3 + offset * 0.7) * 0.3;
      const tertiaryPulse = Math.sin(time * speed * 0.7 + offset * 1.5) * 0.2;
      
      // Комбинированный эффект мерцания
      const combinedPulse = (mainPulse + secondaryPulse + tertiaryPulse) / 1.5;
      // Нормализуем в диапазон от 0 до 1 и применяем интенсивность
      const blinkValue = (combinedPulse * 0.5 + 0.5) * intensity;
      
      if (theme === 'dark') {
        // В темной теме меняем яркость и добавляем свечение
        opacity = 0.4 + blinkValue * 0.6; // От 40% до 100% яркости
        
        // Интенсивность свечения зависит от яркости
        const glowIntensity = Math.min(1, blinkValue * 1.5);
        const glowSize = Math.floor(3 + blinkValue * 12); // Размер свечения от 3px до 15px
        const glowOpacity = 0.2 + blinkValue * 0.6; // Непрозрачность свечения
        
        textShadow = `0 0 ${glowSize}px rgba(255, 255, 255, ${glowOpacity})`;
        
        // Добавляем легкое цветовое смещение для самых ярких "звезд"
        if (blinkValue > 0.85) {
          color = `rgb(255, 255, ${Math.floor(240 + blinkValue * 15)})`; // Слегка голубоватый оттенок
        }
      } else {
        // В светлой теме меняем контрастность
        opacity = 0.5 + blinkValue * 0.5; // От 50% до 100% контрастности
        
        // Меньше заметное свечение для светлой темы
        const glowSize = Math.floor(2 + blinkValue * 8);
        const glowOpacity = 0.1 + blinkValue * 0.3;
        
        textShadow = `0 0 ${glowSize}px rgba(0, 0, 0, ${glowOpacity})`;
      }
    }
    
    // Применяем цвет, прозрачность и эффект свечения
    digit.style.color = color;
    digit.style.opacity = opacity.toString();
    digit.style.textShadow = textShadow;
  };
  
  // Обработчик движения мыши
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isVisible || !worldRef.current || !mouseBodyRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Обновляем время последнего взаимодействия
      lastInteractionTime.current = performance.now();
      isReturningHome.current = false;
      
      // Обновляем позицию тела мыши
      mouseBodyRef.current.setTranslation({ 
        x: x * SCALE_FACTOR, 
        y: y * SCALE_FACTOR 
      }, true);
      
      // Рассчитываем скорость мыши для эффекта отталкивания
      if (prevMousePos.current) {
        const deltaX = x - prevMousePos.current.x;
        const deltaY = y - prevMousePos.current.y;
        
        // Сглаживаем скорость мыши (exponential moving average)
        mouseSpeed.current.x = mouseSpeed.current.x * 0.6 + deltaX * 0.4;
        mouseSpeed.current.y = mouseSpeed.current.y * 0.6 + deltaY * 0.4;
      }
      
      prevMousePos.current = { x, y };
      
      // Рассчитываем общую скорость мыши
      const speed = Math.sqrt(
        mouseSpeed.current.x * mouseSpeed.current.x + 
        mouseSpeed.current.y * mouseSpeed.current.y
      );
      
      // Отталкиваем элементы только если мышь двигается достаточно быстро
      if (speed > 3) {
        bodiesRef.current.forEach((body, index) => {
          if (body && digitRefs.current[index]) {
            // Получаем позицию цифры
            const position = body.translation();
            
            // Вычисляем расстояние от курсора до цифры
            const distX = position.x - x * SCALE_FACTOR;
            const distY = position.y - y * SCALE_FACTOR;
            const distance = Math.sqrt(distX * distX + distY * distY);
            
            // Применяем отталкивание к цифрам в радиусе 150px от курсора
            if (distance < 150 * SCALE_FACTOR) {
              // Рассчитываем угол отталкивания
              const angle = Math.atan2(distY, distX);
              
              // Сила отталкивания обратно пропорциональна расстоянию
              const force = Math.min(25, 500 / (distance / SCALE_FACTOR + 10)) * (speed / 5);
              
              // Рассчитываем вектор отталкивания
              const pushX = Math.cos(angle) * force * SCALE_FACTOR;
              const pushY = Math.sin(angle) * force * SCALE_FACTOR;
              
              // Применяем импульс к цифре
              body.applyImpulse({ x: pushX, y: pushY }, true);
              
              // Добавляем вращательное движение при ударе
              // Вычисляем перпендикулярную силу для создания крутящего момента
              const perpX = -Math.sin(angle) * force * ROTATION_FACTOR * SCALE_FACTOR;
              const perpY = Math.cos(angle) * force * ROTATION_FACTOR * SCALE_FACTOR;
              
              // Случайное направление вращения для естественности
              const rotationDirection = Math.random() > 0.5 ? 1 : -1;
              
              // Применяем крутящий момент
              const torque = (perpX + perpY) * rotationDirection;
              body.applyTorqueImpulse(torque, true);
              
              // Добавляем подсветку для близких цифр без изменения размера
              if (distance < 80 * SCALE_FACTOR) {
                digitRefs.current[index]!.style.color = '#00ff00';
              }
            }
          }
        });
      }
    };
    
    // Добавляем обработчики событий
    window.addEventListener('mousemove', handleGlobalMouseMove);
    
    // Очистка
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isVisible, theme]);
  
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
          onVisibilityChange(false);
        } else {
          setIsVisible(true);
          onVisibilityChange(true);
        }
      } else {
        // Если секцию не нашли, используем стандартную логику с процентом прокрутки
        if (window.scrollY > window.innerHeight * 0.8) {
          setIsVisible(false);
          onVisibilityChange(false);
        } else {
          setIsVisible(true);
          onVisibilityChange(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Вызываем функцию при первой загрузке
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onVisibilityChange]);
  
  // Обработчики событий для цифр
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };
  
  const handleMouseLeave = () => {
    setActiveIndex(null);
  };
  
  const handleClick = (index: number) => {
    setBouncingIndex(index);
    setTimeout(() => setBouncingIndex(null), 1000);
  };
  
  // Стили для цифр - базируемся на предрассчитанных позициях
  const getStyle = (index: number) => {
    // Определяем размер в зависимости от позиции для эффекта глубины
    // Цифры ближе к краям будут меньше, создавая объемный эффект
    const centerX = 50; // Центр по X (%)
    const centerY = 50; // Центр по Y (%)
    const posX = parseFloat(positions[index].left);
    const posY = parseFloat(positions[index].top);
    
    // Расстояние от центра (0-1)
    const distFromCenter = Math.sqrt(
      Math.pow((posX - centerX) / 50, 2) + 
      Math.pow((posY - centerY) / 50, 2)
    );
    
    // Размер зависит от расстояния от центра (больше в центре)
    const sizeVariation = 1 - (distFromCenter * 0.25); // Уменьшил коэффициент для меньшего влияния расстояния
    const baseSize = 18 + Math.random() * 22; // Увеличенный размер: от 18px до 40px
    const fontSize = baseSize * sizeVariation;
    
    // Базовый цвет в зависимости от темы
    const color = theme === 'dark' ? '#ffffff' : '#000000';
    const initialOpacity = 0.4 + Math.random() * 0.6; // Начальная непрозрачность варьируется
    
    return {
      position: 'absolute' as const,
      left: positions[index].left,
      top: positions[index].top,
      fontSize: `${fontSize}px`,
      color: color,
      opacity: initialOpacity,
      transition: 'opacity 4s ease, color 4s ease, text-shadow 4s ease', // Очень плавные переходы
      cursor: 'pointer',
      userSelect: 'none' as const,
      fontFamily: 'monospace',
      fontWeight: Math.random() > 0.6 ? 'bold' : 'normal',
      textShadow: theme === 'dark' ? 
        '0 0 3px rgba(255, 255, 255, 0.3)' : 
        '0 0 3px rgba(0, 0, 0, 0.2)',
      willChange: 'transform, opacity, color, text-shadow', // Оптимизация для GPU
      zIndex: 10,
      mixBlendMode: theme === 'dark' ? 'screen' as const : 'multiply' as const, // Улучшаем смешивание с фоном
    };
  };
  
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
          style={getStyle(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          {digit}
        </div>
      ))}
    </div>
  );
}

export default BinaryBackgroundRapier; 