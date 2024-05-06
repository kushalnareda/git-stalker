
import Typography from '@material-ui/core/Typography';
import { Box, Paper, ThemeProvider } from '@material-ui/core';
import AppBar from '../components/AppBar';
import React, { useState, useEffect } from 'react';
import { createTheme } from '@material-ui/core/styles';


const NotFoundPage = () => {
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
  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <Paper style={{height :'100vl'}} square>
          <AppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="92vh" boxborderradius="10" boxbordercolor="" style={{ backgroundColor: currentTheme.palette.background.default, }}  >
            <div style={{ textAlign: 'center', marginTop: '0px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px'  }}>
            <Typography variant="h3" component="h1">
                404 Not Found
            </Typography>
            <Typography variant="body1">誰かをストーカーしていましたか</Typography>
            </div>
          </Box>
        </Paper>
      </ThemeProvider>
    </div>
    
  );
};

export default NotFoundPage;