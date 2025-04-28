import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: 'Positive Technologies',
    position: 'Frontend-разработчик',
    period: 'Апрель 2023 — Март 2025',
    description: 'Улучшение формы обратной связи с валидацией в реальном времени. Разработка раздела "Блог" с интеграцией системы комментирования и SEO-оптимизацией. Обновление раздела "Вакансии". Разработка интерфейса внутренней системы мониторинга безопасности с визуализацией и фильтрацией данных.',
    technologies: ['React', 'TypeScript', 'Redux', 'REST API', 'Jest', 'Webpack', 'CSS/SCSS']
  },
  {
    id: 2,
    company: 'Studio Nomad',
    position: 'Frontend-разработчик',
    period: 'Март 2021 — Апрель 2023',
    description: 'Разработка интерфейса платформы для управления логистикой (Trucking Desk) и сайтов компаний (San Remo, Hongqi) с использованием React. Реализация динамической загрузки данных через REST API. Адаптивный дизайн с Tailwind CSS. Интеграция слайдеров с Swiper.js. Разработка библиотеки универсальных компонентов.',
    technologies: ['React', 'TypeScript', 'REST API', 'Tailwind CSS', 'Swiper.js', 'Google Analytics', 'CSS/SCSS']
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <article key={exp.id} className="timeline-item">
              <div className="timeline-content">
                <header className="timeline-header">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="position">{exp.position}</p>
                  <time className="period">{exp.period}</time>
                </header>
                <p className="description">{exp.description}</p>
                <footer className="technologies">
                  {exp.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 