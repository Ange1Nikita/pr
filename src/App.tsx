import * as React from 'react';
import { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './components/Header';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { Experience } from './components/Experience';
import { Contacts } from './components/Contacts';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';

// Удаляем задержку, чтобы сразу отображать контент
// const INITIAL_ANIMATION_DURATION = 3000; // 3 секунды для начальной анимации

const App: React.FC = () => {
  const { i18n } = useTranslation();
  // Устанавливаем showHeader в true сразу
  const [showHeader, setShowHeader] = useState(true);

  // Удаляем эффект с задержкой, который откладывал показ header
  /*
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true);
    }, INITIAL_ANIMATION_DURATION);

    return () => clearTimeout(timer);
  }, []);
  */

  // Проверяем сохраненный язык и применяем его
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          {showHeader && <Header />}
          <main>
            <About onAnimationComplete={() => {}} />
            <Skills />
            <Portfolio />
            <Experience />
            <Contacts />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App; 