import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Skills.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaTools, FaDesktop, FaCogs } from 'react-icons/fa';
import { 
  MdPeople, MdTimer, MdSearch, MdCheck, MdCalendarToday, 
  MdRefresh, MdHandshake, MdChat, MdAssessment, MdHome, MdSchool, MdBook 
} from 'react-icons/md';

// Регистрируем GSAP плагин
gsap.registerPlugin(ScrollTrigger);

// Новая структура для хардскиллов с категориями и уровнями
interface HardSkill {
  name: string;
  level: number; // От 1 до 10
}

// Категории для хард скиллов
interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: HardSkill[];
}

// Новая структура для софт скиллов с иконками и описаниями
interface SoftSkill {
  key: string;
  icon: React.ReactNode;
}

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'hard' | 'soft'>('hard');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const hardSkillsRef = useRef<HTMLDivElement>(null);
  const softSkillsRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Определяем данные хард-скиллов
  const hardSkillsData: SkillCategory[] = [
    {
      name: t('skills.categories.frontend'),
      icon: <FaCode />,
      skills: [
        { name: 'HTML (HTML5), EJS, JSX', level: 9 },
        { name: 'CSS (CSS3), SASS (SCSS), PostCSS', level: 9 },
        { name: 'Bootstrap, Tailwind, Animations', level: 8 },
        { name: 'JavaScript (ES6+, OOP), jQuery', level: 9 },
        { name: 'TypeScript', level: 8 },
        { name: 'React', level: 9 },
      ]
    },
    {
      name: t('skills.categories.libraries'),
      icon: <FaCogs />,
      skills: [
        { name: 'Redux (Redux Toolkit, Redux Persist)', level: 8 },
        { name: 'MobX, Zustand', level: 7 },
        { name: 'Formik, React Hook Form, Yup', level: 8 },
        { name: 'Axios, React Router, React Query', level: 8 },
      ]
    },
    {
      name: t('skills.categories.tools'),
      icon: <FaTools />,
      skills: [
        { name: 'Webpack, Vite, Gulp, Rollup', level: 8 },
        { name: 'Jest, React Testing Library', level: 7 },
        { name: 'Enzyme, Chai, Mocha, Vitest', level: 6 },
        { name: 'Git (GitHub, BitBucket, GitLab)', level: 8 },
        { name: 'Figma, Adobe Photoshop, Avocode', level: 7 },
      ]
    },
    {
      name: t('skills.categories.other'),
      icon: <FaDesktop />,
      skills: [
        { name: 'REST API, WebSockets, Long Polling', level: 8 },
        { name: 'BEM, Feature-Sliced Design', level: 9 },
        { name: 'Accessibility, UX', level: 7 },
        { name: 'CMS 1C-Bitrix, Drupal, OpenCart, MODX', level: 6 },
        { name: 'PHP, Blade, Twig (Basic understanding)', level: 5 },
        { name: 'Agile, Waterfall, SCRUM', level: 7 },
        { name: 'English level - B1', level: 7 },
      ]
    }
  ];

  // Определяем данные софт-скиллов
  const softSkillsData: SoftSkill[] = [
    { key: 'teamwork', icon: <MdPeople /> },
    { key: 'deadlines', icon: <MdTimer /> },
    { key: 'attention', icon: <MdSearch /> },
    { key: 'codeQuality', icon: <MdCheck /> },
    { key: 'timeManagement', icon: <MdCalendarToday /> },
    { key: 'feedback', icon: <MdRefresh /> },
    { key: 'conflictResolution', icon: <MdHandshake /> },
    { key: 'communication', icon: <MdChat /> },
    { key: 'reporting', icon: <MdAssessment /> },
    { key: 'remoteWork', icon: <MdHome /> },
    { key: 'mentoring', icon: <MdSchool /> },
    { key: 'learning', icon: <MdBook /> }
  ];

  // Эффект для анимации появления и прогресс-баров
  useEffect(() => {
    if (!skillsRef.current) return;

    const animateProgressBars = () => {
      const progressBars = Object.values(progressRefs.current).filter(ref => ref);
      
      gsap.fromTo(
        progressBars,
        { width: 0 },
        { 
          width: function(index) {
            // Получаем значение через data-атрибут и преобразуем в число
            const levelAttr = progressBars[index]?.getAttribute('data-level') || '5';
            const level = parseInt(levelAttr, 10);
            return `${level * 10}%`;
          },
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    };

    // Анимация категорий хард скиллов
    if (hardSkillsRef.current && activeTab === 'hard') {
      const categories = hardSkillsRef.current.querySelectorAll('.skill-category');
      
      gsap.fromTo(
        categories,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.2, 
          duration: 0.6,
          ease: 'power1.out',
          onComplete: animateProgressBars
        }
      );
    }

    // Анимация карточек софт скиллов
    if (softSkillsRef.current && activeTab === 'soft') {
      const cards = softSkillsRef.current.querySelectorAll('.soft-skill-card');
      
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          stagger: 0.1, 
          duration: 0.5,
          ease: 'back.out(1.4)'
        }
      );
    }

    // Настраиваем ScrollTrigger для появления элементов при скролле
    ScrollTrigger.create({
      trigger: skillsRef.current,
      start: 'top 70%',
      onEnter: activeTab === 'hard' ? animateProgressBars : undefined
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeTab]);

  // Добавляем эффект 3D наклона карточек
  useEffect(() => {
    const hardSkillCards = document.querySelectorAll('.hard-skill-card');
    
    const handlersMap = new Map<Element, {
      move: EventListener;
      leave: EventListener;
    }>();
    
    hardSkillCards.forEach((card) => {
      if (!card) return;
      
      const handleMouseMove: EventListener = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Правильное направление наклона - к курсору
        const tiltX = (centerY - y) / 15; 
        const tiltY = (x - centerX) / 15;
        
        gsap.to(card, {
          rotationX: tiltX,
          rotationY: tiltY,
          transformPerspective: 1000,
          duration: 0.4,
          ease: 'power2.out',
        });
      };
      
      const handleMouseLeave: EventListener = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      };
      
      // Сохраняем ссылки на функции для корректного удаления слушателей
      handlersMap.set(card, {
        move: handleMouseMove,
        leave: handleMouseLeave
      });
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      hardSkillCards.forEach((card) => {
        const handlers = handlersMap.get(card);
        if (handlers) {
          card.removeEventListener('mousemove', handlers.move);
          card.removeEventListener('mouseleave', handlers.leave);
        }
      });
    };
  }, [activeTab]);

  // Обработчик переключения табов
  const handleTabChange = (tab: 'hard' | 'soft') => {
    setActiveTab(tab);
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">{t('skills.title')}</h2>
        
        {/* Табы для переключения между Hard и Soft skills */}
        <div className="skills-tabs">
          <button 
            className={`tab-button ${activeTab === 'hard' ? 'active' : ''}`}
            onClick={() => handleTabChange('hard')}
          >
            {t('skills.hardSkills')}
          </button>
          <button 
            className={`tab-button ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => handleTabChange('soft')}
          >
            {t('skills.softSkills')}
          </button>
        </div>
        
        {/* Контент Hard Skills */}
        <div 
          className={`skills-content ${activeTab === 'hard' ? 'active' : ''}`}
          ref={hardSkillsRef}
        >
          {hardSkillsData.map((category) => (
            <div key={category.name} className="skill-category">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.name}</h3>
              </div>
              
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div 
                    key={`${category.name}-${index}`}
                    className={`hard-skill-card ${hoveredSkill === `${category.name}-${index}` ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredSkill(`${category.name}-${index}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <h4 className="skill-name">{skill.name}</h4>
                    <div className="skill-level-container">
                      <div 
                        className="skill-level"
                        data-level={skill.level}
                        ref={el => progressRefs.current[`${category.name}-${index}`] = el}
                      ></div>
                      <span className="skill-level-text">{skill.level}/10</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Контент Soft Skills */}
        <div 
          className={`skills-content ${activeTab === 'soft' ? 'active' : ''}`}
          ref={softSkillsRef}
        >
          <div className="soft-skills-grid">
            {softSkillsData.map((skill, index) => (
              <div 
                key={index} 
                className={`soft-skill-card ${hoveredSkill === `soft-${index}` ? 'flipped' : ''}`}
                onMouseEnter={() => setHoveredSkill(`soft-${index}`)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="soft-skill-card-inner">
                  <div className="soft-skill-card-front">
                    <div className="soft-skill-icon">{skill.icon}</div>
                    <h4 className="soft-skill-name">{t(`skills.softSkillsItems.${skill.key}.name`)}</h4>
                  </div>
                  <div className="soft-skill-card-back">
                    <p className="soft-skill-description">{t(`skills.softSkillsItems.${skill.key}.description`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 