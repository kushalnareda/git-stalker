import React, { useState, useEffect } from 'react';
import { createTheme } from '@material-ui/core';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Use local storage to get the theme preference, default to false (light mode)
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Save the current theme preference to local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const lightTheme = createTheme({
    palette: {
      type: 'light',
    },
  });

  const currentTheme = darkMode ? darkTheme : lightTheme;

  return { darkMode, setDarkMode, currentTheme };
};

export default useDarkMode;
