import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import './BinaryBackground.css';

// Компонент бинарного фона
const BinaryBackground: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isGathering, setIsGathering] = useState(false);
  const [gatherPoint, setGatherPoint] = useState<{x: number, y: number} | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const digitsRef = useRef<HTMLDivElement[]>([]);
  
  // Создание цифр и инициализация
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const digitElements: HTMLDivElement[] = [];
    
    // Создаем 150 цифр
    for (let i = 0; i < 150; i++) {
      const digit = document.createElement('div');
      digit.className = 'binary-digit';
      digit.textContent = Math.round(Math.random()).toString();
      
      // Распределяем цифры по экрану
      const x = 5 + Math.random() * 90; // 5-95% от ширины
      const y = 5 + Math.random() * 90; // 5-95% от высоты
      
      // Сохраняем оригинальную позицию для возврата
      digit.setAttribute('data-original-x', `${x}%`);
      digit.setAttribute('data-original-y', `${y}%`);
      
      // Устанавливаем начальную позицию
      digit.style.left = `${x}%`;
      digit.style.top = `${y}%`;
      digit.style.opacity = '0';
      digit.style.transform = 'scale(1)';
      
      // Добавляем возможность перетаскивания
      digit.setAttribute('draggable', 'true');
      
      // Сохраняем элемент в массиве
      digitElements.push(digit);
      container.appendChild(digit);
      
      // Анимируем появление с задержкой
      setTimeout(() => {
        digit.style.opacity = '1';
      }, i * 15);
      
      // Добавляем обработчики
      digit.addEventListener('dragstart', (e) => {
        // Сохраняем данные для перетаскивания
        const target = e.target as HTMLDivElement;
        e.dataTransfer?.setData('text/plain', target.textContent || '');
        
        // Стилизуем элемент при перетаскивании
        target.style.color = '#00ff00';
        target.style.opacity = '0.7';
        target.style.transform = 'scale(1.5)';
      });
      
      digit.addEventListener('dragend', (e) => {
        const target = e.target as HTMLDivElement;
        
        // Возвращаем стандартный стиль
        target.style.color = '';
        target.style.opacity = '1';
        target.style.transform = 'scale(1)';
        
        // Можно тут сохранить новую позицию для последующего возврата
        // или оставить её так (что элемент останется там, где его бросили)
      });
      
      // Добавляем обработчик клика для подбрасывания
      digit.addEventListener('click', (e) => {
        const target = e.target as HTMLDivElement;
        
        // Генерируем случайные смещения
        const offsetX = (Math.random() - 0.5) * 300;
        const offsetY = (Math.random() - 0.5) * 300;
        
        // Анимируем бросок
        target.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1), color 0.3s ease';
        target.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.2)`;
        target.style.color = '#00ffff';
        
        // Через некоторое время возвращаем в обычное состояние
        setTimeout(() => {
          target.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.3s ease';
          target.style.transform = 'translate(0, 0) scale(1)';
          target.style.color = '';
        }, 1000);
      });
    }
    
    // Сохраняем ссылки на все цифры
    digitsRef.current = digitElements;
    
    // Добавляем обработчики событий для перетаскивания в контейнере
    container.addEventListener('dragover', (e) => {
      // Предотвращаем стандартное поведение (запрет бросания)
      e.preventDefault();
    });
    
    container.addEventListener('drop', (e) => {
      // Предотвращаем стандартное поведение
      e.preventDefault();
      
      // Здесь можно реализовать дополнительную логику при бросании
      const activeElement = document.querySelector('.binary-digit[draggable=true]:active');
      if (activeElement) {
        const target = activeElement as HTMLDivElement;
        
        // Устанавливаем новую позицию
        target.style.left = `${e.clientX - container.getBoundingClientRect().left}px`;
        target.style.top = `${e.clientY - container.getBoundingClientRect().top}px`;
      }
    });
    
    // Очистка при размонтировании
    return () => {
      digitElements.forEach(digit => {
        digit.remove();
      });
    };
  }, []);
  
  // Эффект волны при движении мыши
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible || isGathering) return;
      
      const mouseX = e.clientX - container.getBoundingClientRect().left;
      const mouseY = e.clientY - container.getBoundingClientRect().top;
      
      // Рассчитываем скорость движения мыши
      const movementX = e.movementX || 0;
      const movementY = e.movementY || 0;
      const speed = Math.sqrt(movementX * movementX + movementY * movementY);
      
      // Применяем эффект волны при любом движении мыши, даже медленном
      // снижаем порог скорости для более частого срабатывания
      if (speed > 1) {
        digitsRef.current.forEach(digit => {
          // Получаем позицию цифры
          const rect = digit.getBoundingClientRect();
          const digitX = rect.left - container.getBoundingClientRect().left + rect.width / 2;
          const digitY = rect.top - container.getBoundingClientRect().top + rect.height / 2;
          
          // Рассчитываем расстояние до курсора
          const dx = digitX - mouseX;
          const dy = digitY - mouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Применяем эффект к большему количеству цифр (увеличиваем радиус)
          if (distance < 250) {
            // Рассчитываем силу отталкивания - делаем отталкивание более заметным
            const force = Math.min(70, 1200 / (distance + 1));
            const angle = Math.atan2(dy, dx);
            
            // Рассчитываем смещение - увеличиваем коэффициент для большего отталкивания
            const pushX = Math.cos(angle) * force * (speed / 5);
            const pushY = Math.sin(angle) * force * (speed / 5);
            
            // Плавно отодвигаем цифру, уменьшаем время перехода для более отзывчивого эффекта
            digit.style.transition = 'transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.97), color 0.2s ease';
            digit.style.transform = `translate(${pushX}px, ${pushY}px)`;
            
            // Подсвечиваем цифры близко к курсору - увеличиваем радиус эффекта
            if (distance < 120) {
              digit.style.color = '#00ff00';
              digit.style.transform = `translate(${pushX}px, ${pushY}px) scale(1.2)`;
              // Добавляем тень для более заметного эффекта
              digit.style.textShadow = '0 0 8px rgba(0, 255, 0, 0.8)';
            }
            
            // Через некоторое время возвращаем в исходное положение
            // Убираем таймаут для более динамичного эффекта, возврат будет при отсутствии движения мыши
            clearTimeout((digit as any)._returnTimeout);
            (digit as any)._returnTimeout = setTimeout(() => {
              digit.style.transition = 'transform 0.5s ease-out, color 0.3s ease';
              digit.style.transform = 'translate(0, 0) scale(1)';
              digit.style.color = '';
              digit.style.textShadow = '';
            }, 300); // Уменьшаем время задержки для более динамичного возврата
          }
        });
      }
    };
    
    // Применяем троттлинг для оптимизации обработчика движения мыши
    let isThrottled = false;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!isThrottled) {
        handleMouseMove(e);
        isThrottled = true;
        // Разрешаем следующее обновление через 10мс для плавности
        setTimeout(() => {
          isThrottled = false;
        }, 10);
      }
    };
    
    container.addEventListener('mousemove', throttledMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', throttledMouseMove);
    };
  }, [isVisible, isGathering]);
  
  // Обработка режима сбора цифр
  useEffect(() => {
    if (!isGathering || !gatherPoint || !containerRef.current) return;
    
    const container = containerRef.current;
    
    digitsRef.current.forEach((digit, index) => {
      // Рассчитываем смещение относительно контейнера
      const gatherX = gatherPoint.x - container.getBoundingClientRect().left;
      const gatherY = gatherPoint.y - container.getBoundingClientRect().top;
      
      // Добавляем небольшую случайность для более органичного эффекта
      const randomOffset = Math.random() * 30;
      const randomAngle = Math.random() * Math.PI * 2;
      const randomX = Math.cos(randomAngle) * randomOffset;
      const randomY = Math.sin(randomAngle) * randomOffset;
      
      // Анимация сбора с небольшой задержкой
      digit.style.transition = `transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.25) ${index * 0.005}s`;
      digit.style.transform = `translate(${gatherX - digit.offsetLeft + randomX}px, ${gatherY - digit.offsetTop + randomY}px)`;
    });
    
    // Возвращаем цифры на место при отключении режима сбора
    return () => {
      digitsRef.current.forEach(digit => {
        digit.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.5s ease';
        digit.style.transform = 'translate(0, 0) scale(1)';
        digit.style.color = '';
      });
    };
  }, [isGathering, gatherPoint]);
  
  // Обработка скролла
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(false);
      } else if (window.scrollY > window.innerHeight * 0.05) {
        const opacity = 1 - (window.scrollY / (window.innerHeight * 0.8));
        if (containerRef.current) {
          containerRef.current.style.opacity = String(Math.max(0, opacity));
        }
        setIsVisible(true);
      } else {
        setIsVisible(true);
        if (containerRef.current) {
          containerRef.current.style.opacity = '1';
        }
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Обработка двойного клика и клавиш
  useEffect(() => {
    const handleDoubleClick = (e: MouseEvent) => {
      if (!isVisible) return;
      
      setIsGathering(true);
      setGatherPoint({ x: e.clientX, y: e.clientY });
      
      // Отключаем режим сбора через 3 секунды
      setTimeout(() => {
        setIsGathering(false);
        setGatherPoint(null);
      }, 3000);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') {
        // Используем центр экрана для сбора
        setIsGathering(true);
        setGatherPoint({ 
          x: window.innerWidth / 2, 
          y: window.innerHeight / 2 
        });
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') {
        setIsGathering(false);
        setGatherPoint(null);
      }
    };
    
    document.addEventListener('dblclick', handleDoubleClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    
    return () => {
      document.removeEventListener('dblclick', handleDoubleClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [isVisible]);
  
  // Не рендерим, если невидимый
  if (!isVisible && containerRef.current?.style.opacity === '0') {
    return null;
  }
  
  return (
    <div className="binary-container">
      <div 
        className={`binary-background ${isVisible ? '' : 'hidden'}`}
        ref={containerRef}
      >
        {/* Цифры добавляются динамически через DOM API */}
      </div>
      <div className="instructions">
        {isGathering ? 
          'Режим сбора активен! Цифры притягиваются к курсору.' : 
          'Двойной клик — собрать цифры, Клавиша "G" — режим притяжения. Перетаскивайте цифры!'}
      </div>
    </div>
  );
};

export default BinaryBackground;
