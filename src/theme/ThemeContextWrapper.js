import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        default:
        document.body.classList.remove('dark-content');
        document.body.classList.add('white-content');
        var ele = document.getElementById('welcomeText');
            ele.classList.remove('dark-text-content');
            ele.classList.add('white-text-content');
        
        break;
      case themes.dark:
        document.body.classList.remove('white-content');
        document.body.classList.add('dark-content');
        
        ele = document.getElementById('welcomeText');
        ele.classList.remove('white-text-content');
        ele.classList.add('dark-text-content');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}