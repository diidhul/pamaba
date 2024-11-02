// src/App.jsx
import React, { useState, useEffect } from 'react';
import SplashScreen from './components/splashScreen';
// import MainContent from './components/MainContent';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); //fade out habis splashScreen
      // setTimeout(() => setIsLoading(false), 500);
    }, 4500); //tetap di halaman ini 4,5 sec baru masok ke main page

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={fadeOut ? 'animate-fade-out' : ''}>
          <SplashScreen />
        </div>
      ) : (
        <MainContent />
      )}
    </>
  );
};

export default App;
