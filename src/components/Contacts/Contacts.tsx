import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Contacts.css';
import { FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';

export const Contacts: React.FC = () => {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipTimeoutRef = useRef<number | null>(null);
  const email = 'Ange1Nikita@yandex.ru';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email)
      .then(() => {
        // Очищаем предыдущий таймаут, если он есть
        if (tooltipTimeoutRef.current) {
          clearTimeout(tooltipTimeoutRef.current);
        }
        
        // Показываем всплывающую подсказку
        setShowTooltip(true);
        
        // Скрываем через 2 секунды
        tooltipTimeoutRef.current = window.setTimeout(() => {
          setShowTooltip(false);
        }, 2000);
      })
      .catch(err => {
        console.error('Не удалось скопировать почту: ', err);
      });
  };

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="section-title">{t('contacts.title')}</h2>
        <div className="contacts-content">
          <p className="contacts-text">
            {t('contacts.question')}
          </p>
          <p className="contacts-availability">
            {t('contacts.availability')}
          </p>
          <div className="social-links">
            <a href="https://github.com/Ange1Nikita" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub className="social-icon" /> GitHub
            </a>
            <a href="https://t.me/AndRom193" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTelegram className="social-icon" /> Telegram
            </a>
            <button 
              onClick={handleCopyEmail} 
              className="social-link email-button"
            >
              <FaEnvelope className="social-icon" /> Email
              {showTooltip && <span className="tooltip">{t('contacts.emailCopied')}</span>}
            </button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <p className="copyright">{t('contacts.copyright', { year: new Date().getFullYear() })}</p>
        </div>
      </footer>
    </section>
  );
}; 