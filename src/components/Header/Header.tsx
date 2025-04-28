import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import './Header.css';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // Определяем пункты меню с использованием i18n
  const navItems = [
    { id: 'about', label: t('header.about') },
    { id: 'skills', label: t('header.skills') },
    { id: 'portfolio', label: t('header.portfolio') },
    { id: 'experience', label: t('header.experience') },
    { id: 'contacts', label: t('header.contacts') },
  ];
  
  // Добавление класса к body при открытии мобильного меню
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    // Очистка при размонтировании компонента
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);
  
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };
  
  // Функция для переключения языка
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLanguage);
  };
  
  return (
    <header className="header">
      <div className="header-container">
        {/* Кнопка мобильного меню с анимацией */}
        <button 
          className={`mobile-menu-toggle burger ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? t('header.closeMenu') : t('header.openMenu')}
        >
          <span className="burger-bar top" />
          <span className="burger-bar middle" />
          <span className="burger-bar bottom" />
        </button>
        
        {/* Навигация в хедере */}
        <nav className="header-nav">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <a 
                  href={`#${item.id}`} 
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Мобильное меню */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <div className="menu-header">
            <span className="menu-title">{t('header.menu')}</span>
          </div>
          
          {/* Навигация в мобильном меню */}
          <div className="mobile-menu-content">
            <ul className="mobile-content-nav">
              {navItems.map(item => (
                <li key={item.id} className="mobile-content-item">
                  <a 
                    href={`#${item.id}`} 
                    className="mobile-content-link" 
                    onClick={handleNavLinkClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              
              {/* Дополнительные элементы в мобильном меню */}
              <li className="mobile-content-item mobile-controls">
                <div className="mobile-buttons">
                  {/* Переключатель языка */}
                  <button 
                    className="mobile-language-toggle" 
                    onClick={toggleLanguage}
                  >
                    {t('header.language')}
                  </button>
                  
                  {/* Переключатель темы */}
                  <button 
                    className="mobile-theme-toggle" 
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? '🌙' : '☀️'}
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="header-controls">
        {/* Переключатель языка */}
        <button 
          className="language-toggle" 
          onClick={toggleLanguage}
          aria-label="Change language"
        >
          {t('header.language')}
        </button>
        
        {/* Переключатель темы */}
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={t('header.switchTheme', { theme: theme === 'light' ? t('header.darkTheme') : t('header.lightTheme') })}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}; 