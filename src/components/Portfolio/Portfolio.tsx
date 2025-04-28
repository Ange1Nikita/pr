import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Portfolio.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

interface ProjectCard {
  id: number;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<Set<number>>(new Set());
  
  const projects: ProjectCard[] = [
    {
      id: 1,
      imageUrl: "./images/фото1.png",
      technologies: ["React", "TypeScript", "REST API", "Tailwind CSS", "Google Analytics", "Google Tag Manager"],
      projectUrl: "https://trucking-desk.com/ru"
    },
    {
      id: 2,
      imageUrl: "./images/фото2.png",
      technologies: ["React", "Swiper.js", "HTML", "SCSS"],
      projectUrl: "https://san-remo.kz/"
    },
    {
      id: 3,
      imageUrl: "./images/фото3.png",
      technologies: ["React", "jQuery", "Node.js", "MongoDB"],
      projectUrl: "https://hongqi-auto.kz/"
    },
    {
      id: 4,
      imageUrl: "./images/фото4.png",
      technologies: ["React", "TypeScript", "REST API", "Firebase", "Tailwind", "SEO-оптимизация"],
      projectUrl: "https://habr.com/ru/companies/pt/articles/"
    },
    {
      id: 5,
      imageUrl: "./images/фото5.png",
      technologies: ["React", "Express", "PostgreSQL"],
      projectUrl: "https://www.ptsecurity.com/ru-ru/about/vacancy/"
    }
  ];

  // Настройка Intersection Observer для отслеживания видимости проектов
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-id'));
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => new Set([...prev, id]));
          } else {
            setVisibleProjects((prev) => {
              const updated = new Set([...prev]);
              updated.delete(id);
              return updated;
            });
          }
        });
      },
      { threshold: [0.2, 0.5, 0.8], rootMargin: "0px 0px -10% 0px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Настройка GSAP анимаций
  useEffect(() => {
    if (!sectionRef.current) return;

    // Создаем GSAP анимацию для параллакс-эффекта
    const parallaxElements = document.querySelectorAll('.project-image');
    parallaxElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: -20,
          ease: 'none',
          scrollTrigger: {
            trigger: el.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // 3D-эффект наклона карточек при движении мыши
  useEffect(() => {
    projectRefs.current.forEach((card) => {
      if (!card) return;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Инвертируем направления наклона, чтобы они соответствовали направлению движения мыши
        const tiltX = (centerY - y) / 20; // Меняем направление по оси X
        const tiltY = (x - centerX) / 20; // Меняем направление по оси Y
        
        gsap.to(card, {
          rotationX: tiltX,
          rotationY: tiltY,
          transformPerspective: 1000,
          duration: 0.4,
          ease: 'power2.out',
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.4,
          ease: 'power2.out',
        });
      };
      
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [projectRefs.current.length]);

  // Добавляем эффект появления для каждого проекта при его видимости
  useEffect(() => {
    visibleProjects.forEach((id) => {
      const projectEl = projectRefs.current[id - 1];
      if (projectEl) {
        gsap.fromTo(
          projectEl,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      }
    });
  }, [visibleProjects]);

  return (
    <section ref={sectionRef} className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">{t('portfolio.title')}</h2>
        
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              ref={(el) => (projectRefs.current[index] = el)} 
              className="portfolio-card"
              data-id={project.id}
            >
              <div className="portfolio-image">
                <img 
                  src={project.imageUrl} 
                  alt={t(`portfolio.projects.${project.id}.title`)} 
                />
                <div className="portfolio-overlay">
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portfolio-link"
                  >
                    {t('portfolio.viewProject')}
                  </a>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="portfolio-title">{t(`portfolio.projects.${project.id}.title`)}</h3>
                
                <p className="portfolio-description">
                  {t(`portfolio.projects.${project.id}.description`)}
                </p>
                
                <div className="portfolio-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
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