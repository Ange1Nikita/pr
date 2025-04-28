import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaBuilding, FaCalendarAlt, FaBriefcase, FaLink, FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { SiReact, SiTypescript, SiRedux, SiJest, SiWebpack, SiTailwindcss, SiGoogleanalytics, SiCss3 } from 'react-icons/si';

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Словарь иконок для технологий
const techIcons: Record<string, React.ReactNode> = {
  'React': <SiReact />,
  'TypeScript': <SiTypescript />,
  'Redux': <SiRedux />,
  'REST API': <FaCode />,
  'Jest': <SiJest />,
  'Webpack': <SiWebpack />,
  'CSS/SCSS': <SiCss3 />,
  'Tailwind CSS': <SiTailwindcss />,
  'Swiper.js': <FaCode />,
  'Google Analytics': <SiGoogleanalytics />
};

interface Link {
  url: string;
  label: string;
}

interface Experience {
  id: number;
  company?: string; // Опционально, т.к. теперь получаем из i18n
  logo?: string;
  technologies: string[];
  links?: Link[];
}

const experiences: Experience[] = [
  {
    id: 1,
    logo: './images/лого пт.png',
    technologies: ['React', 'TypeScript', 'Redux', 'REST API', 'Jest', 'Webpack', 'CSS/SCSS'],
    links: [
      { url: 'https://www.ptsecurity.com', label: '' } // Пустая метка, будет заполнена из i18n
    ]
  },
  {
    id: 2,
    logo: './images/nomad-logo.png',
    technologies: ['React', 'TypeScript', 'REST API', 'Tailwind CSS', 'Swiper.js', 'Google Analytics', 'CSS/SCSS'],
    links: [
      { url: 'https://trucking-desk.com/ru', label: 'Trucking Desk' },
      { url: 'https://san-remo.kz', label: 'San Remo' },
      { url: 'https://hongqi-auto.kz', label: 'Hongqi' }
    ]
  }
];

export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({});
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState<boolean>(false);

  // Обработчик для переключения раскрытия/сворачивания карточки
  const toggleCardExpand = (id: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Начальная анимация появления карточек при монтировании компонента
  useEffect(() => {
    if (isInitialAnimationDone) return;
    
    const cardsTimeline = gsap.timeline({
      onComplete: () => setIsInitialAnimationDone(true)
    });
    
    cardRefs.current.forEach((cardEl, index) => {
      if (!cardEl) return;
      
      const header = cardEl.querySelector('.experience-card-header');
      const body = cardEl.querySelector('.experience-card-body');
      const footer = cardEl.querySelector('.experience-card-footer');
      
      const delay = index * 0.15; // Задержка для последовательной анимации
      
      cardsTimeline.fromTo(cardEl, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', delay },
        index > 0 ? "-=0.4" : 0 // Небольшое перекрытие для плавности
      );
      
      if (header && body && footer) {
        cardsTimeline.fromTo(header, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 
          "-=0.3"
        )
        .fromTo(body, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 
          "-=0.2"
        )
        .fromTo(footer, 
          { opacity: 0, y: 20 }, 
          { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, 
          "-=0.2"
        );
      }
    });
    
    return () => {
      cardsTimeline.kill();
    };
  }, [isInitialAnimationDone]);

  // Анимация изменения размера карточки при раскрытии/сворачивании
  useEffect(() => {
    Object.entries(expandedCards).forEach(([idStr, expanded]) => {
      const id = parseInt(idStr);
      const cardEl = cardRefs.current[id - 1];
      if (!cardEl) return;
      
      const description = cardEl.querySelector('.description');
      const button = cardEl.querySelector('.read-more-btn') as HTMLButtonElement;
      
      if (!description || !button) return;
      
      const tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "power2.inOut"
        }
      });
      
      if (expanded) {
        // Анимация раскрытия
        tl.to(description, {
          height: "auto",
          onStart: () => {
            button.style.pointerEvents = "none"; // Блокируем кнопку во время анимации
          },
          onComplete: () => {
            button.style.pointerEvents = "auto"; // Разблокируем кнопку
          }
        });
        
        // Анимация кнопки
        tl.to(button, {
          color: "var(--accent-hover)",
          scale: 1.05,
          duration: 0.4,
          boxShadow: "0 4px 12px rgba(var(--accent-color-rgb), 0.2)"
        }, "-=0.5");
      } else {
        // Анимация сворачивания
        tl.to(button, {
          color: "var(--accent-color)",
          scale: 1,
          duration: 0.4, 
          boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)"
        });
        
        // Получаем текущую высоту описания для плавного перехода
        const currentHeight = (description as HTMLElement).offsetHeight;
        
        // Устанавливаем точную высоту перед анимацией для плавности
        gsap.set(description, { height: currentHeight });
        
        // Анимируем сворачивание с задержкой
        tl.to(description, {
          height: "80px",
          delay: 0.1,
          onStart: () => {
            button.style.pointerEvents = "none"; // Блокируем кнопку во время анимации
          },
          onComplete: () => {
            button.style.pointerEvents = "auto"; // Разблокируем кнопку
          }
        }, "-=0.2");
      }
    });
  }, [expandedCards]);
  
  // Инициализация состояния развернутости карточек
  useEffect(() => {
    const initialExpandState: {[key: number]: boolean} = {};
    experiences.forEach(exp => {
      initialExpandState[exp.id] = false;
    });
    setExpandedCards(initialExpandState);
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{t('experience.title')}</h2>
        <div className="experience-cards">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-card ${expandedCards[exp.id] ? 'expanded' : ''}`}
              ref={(el) => (cardRefs.current[index] = el)}
              data-id={exp.id}
            >
              <div className="experience-card-header">
                <div className="company-icon">
                  {exp.logo ? (
                    <img 
                      src={exp.logo} 
                      alt={`${t(`experience.experiences.${exp.id}.company`)} logo`} 
                      className={`company-logo ${exp.logo.includes('nomad-logo') ? 'nomad-logo' : ''} ${exp.logo.includes('лого пт') ? 'pt-logo' : ''}`} 
                    />
                  ) : (
                    <FaBuilding />
                  )}
                </div>
                <div className="company-info">
                  <h3 className="company-name">{t(`experience.experiences.${exp.id}.company`)}</h3>
                  <div className="position-info">
                    <FaBriefcase className="info-icon position-icon" />
                    <p className="position">{t(`experience.experiences.${exp.id}.position`)}</p>
                  </div>
                  <div className="period-info">
                    <FaCalendarAlt className="info-icon period-icon" />
                    <time className="period">{t(`experience.experiences.${exp.id}.period`)}</time>
                  </div>
                </div>
              </div>
              
              <div className="experience-card-body">
                <p className={`description ${expandedCards[exp.id] ? 'expanded' : ''}`}>
                  {expandedCards[exp.id] 
                    ? t(`experience.experiences.${exp.id}.description`) 
                    : t(`experience.experiences.${exp.id}.shortDescription`)}
                </p>
                <button 
                  className={`read-more-btn ${expandedCards[exp.id] ? 'expanded' : ''}`}
                  onClick={() => toggleCardExpand(exp.id)}
                >
                  {expandedCards[exp.id] ? (
                    <>{t('experience.showLess')} <FaChevronUp style={{ marginLeft: '5px', fontSize: '0.8em', transition: 'transform 0.3s ease' }} /></>
                  ) : (
                    <>{t('experience.showMore')} <FaChevronDown style={{ marginLeft: '5px', fontSize: '0.8em', transition: 'transform 0.3s ease' }} /></>
                  )}
                </button>
              </div>
              
              <div className="experience-card-footer">
                {exp.links && exp.links.length > 0 && (
                  <div className="project-links">
                    {exp.links.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="project-link"
                      >
                        <FaLink className="link-icon" />
                        {idx === 0 && link.label === '' 
                          ? t('experience.companyWebsite') 
                          : link.label}
                      </a>
                    ))}
                  </div>
                )}
                <div className="technologies">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {techIcons[tech] && <span className="tech-icon">{techIcons[tech]}</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
