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
  
  // Фиксированные размеры для каждой цифры
  const digitSizes = useRef<number[]>([]);
  
  // Коэффициенты физики
  const RETURN_DELAY = 2000; // Задержка перед возвратом в мс
  const SCALE_FACTOR = 0.01; // Коэффициент для преобразования пикселей в метры
  const FRICTION_FACTOR = 0.99; // Трение для плавного затухания движения
  const HOME_THRESHOLD = 0.15; // Порог для определения "дома"
  const SPRING_EFFECT = 0.003; // Коэффициент пружинного эффекта
  const ROTATION_DAMPING = 0.97; // Затухание вращения
  const ROTATION_FACTOR = 0.5; // Сила вращения при ударе
  
  // Создаем двоичные цифры
  const binaryDigits = React.useMemo(() => {
    return Array.from({ length: 150 }, () => Math.round(Math.random()));
  }, []);
  
  // Инициализация позиций элементов
  const positions = React.useMemo(() => {
    // Предрассчитываем размеры для каждой цифры (один раз)
    digitSizes.current = Array.from({ length: binaryDigits.length }, () => 
      24 + Math.floor(Math.random() * 16)
    );
    
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
    
    // Прогрессивная анимация - появление цифр сразу
    binaryDigits.forEach((_, index) => {
      if (digitRefs.current[index]) {
        // Сразу делаем видимыми без анимации
        digitRefs.current[index]!.style.opacity = '1';
      }
    });
    
    const updatePhysics = (timestamp: number) => {
      // Проверяем, инициализирован ли физический мир
      if (!isInitialized() || !isVisible) {
        animationFrameRef.current = requestAnimationFrame(updatePhysics);
        return;
      }
      
      const world = worldRef.current!;
      
      // Рассчитываем дельту времени
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
          
          // Используем фиксированный размер для каждой цифры из preRef
          const fontSize = digitSizes.current[index];
          
          // ВАЖНО: Устанавливаем стиль напрямую, без анимаций
          digit.style.cssText = `
            position: absolute;
            left: ${positions[index].left};
            top: ${positions[index].top};
            font-size: ${fontSize}px;
            color: ${activeIndex === index ? '#00ff00' : theme === 'dark' ? '#ffffff' : '#000000'};
            opacity: 1;
            transform: translate(${offsetX}px, ${offsetY}px) rotate(${rotation}rad);
            cursor: pointer;
            user-select: none;
            font-family: monospace;
            z-index: 10;
          `;
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
        willChange: 'opacity',
        transform: 'translateZ(0)' // Включаем аппаратное ускорение
      }}
    >
      {binaryDigits.map((digit, index) => (
        <div
          key={index}
          ref={el => digitRefs.current[index] = el}
          style={{
            position: 'absolute',
            left: positions[index].left,
            top: positions[index].top,
            fontSize: `${digitSizes.current[index]}px`, // Используем предопределенный фиксированный размер
            color: theme === 'dark' ? '#ffffff' : '#000000',
            opacity: 1,
            cursor: 'pointer',
            userSelect: 'none',
            fontFamily: 'monospace',
            fontWeight: Math.random() > 0.6 ? 'bold' : 'normal',
            zIndex: 10,
            // ВАЖНО: Никаких transition или animation!
          }}
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