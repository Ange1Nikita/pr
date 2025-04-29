import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import './BinaryBackground.css';
import './FixedButton.css';
import BinaryBackgroundRapier from './BinaryBackgroundRapier';

const TYPING_SPEED = 100;
const ERASING_SPEED = 100;
const PAUSE_DURATION = 1000;
// Общая длительность падения шара
// const BOUNCE_DURATION = 3300; // 3.3 секунды
// Момент начала морфинга (за 0.2 секунды до конца анимации)
// const MORPH_START_TIME = BOUNCE_DURATION - 200;
// const MORPH_DURATION = 2000; // Длительность анимации морфинга
// const INITIAL_DELAY = 0; // Убираем начальную задержку

// Удаляем неиспользуемый компонент BinaryBackground
// function BinaryBackground({ onVisibilityChange }: { onVisibilityChange: (isVisible: boolean) => void }) {
//   ...
// }

interface AboutProps {
  onAnimationComplete?: () => void;
}

export const About: React.FC<AboutProps> = ({ onAnimationComplete }) => {
  const { t } = useTranslation();
  // Начинаем с пустого текста
  const [displayText, setDisplayText] = useState('');
  const [showButton, setShowButton] = useState(false);
  // Инициализируем startTyping как true, чтобы анимация начиналась сразу
  const [, ] = useState(true);
  // Удаляем неиспользуемые ссылки
  // const morphBackgroundRef = useRef<HTMLDivElement>(null);
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

  // Вместо морфинга сразу запускаем анимацию текста и вызываем onAnimationComplete
  useEffect(() => {
    // Немедленный вызов без задержки
    onAnimationComplete?.();
    // startTyping уже установлен в true, поэтому анимация начнется сразу
  }, [onAnimationComplete]);

  // Анимация текста - запускается немедленно при монтировании компонента
  useEffect(() => {
    // Сразу запускаем анимацию печати без задержки
    let timeoutId: number;
    let phase: 'typing0' | 'typing1' | 'erasing' | 'typing2' = 'typing0';
    let currentIndex = 0;

    const baseText = t('about.baseText');
    const firstPhrase = t('about.firstPhrase');
    const secondPhrase = t('about.secondPhrase');

    const animate = () => {
      if (phase === 'typing0') {
        // Печатаем базовый текст побуквенно
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
          // Показываем кнопку сразу после завершения печати
          setShowButton(true);
        }
      }
    };

    // Запускаем анимацию немедленно без задержки
    animate();

    return () => window.clearTimeout(timeoutId);
  }, [t]); // Убираем startTyping из зависимостей, анимация начинается сразу

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
      {/* Бинарный фон с использованием ТОЛЬКО BinaryBackgroundRapier */}
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
        <BinaryBackgroundRapier onVisibilityChange={setIsBinaryVisible} />
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
        {/* Удаляем неиспользуемый элемент морфинга */}
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