import { Grid, Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ImageAvatars from "../components/Profile";
import RepoList from "../components/RepoList";
import UserInfoCard from "../components/UserInfoCard";
import AppBar from '../components/AppBar';
import React, { useState, useEffect } from 'react';

export const User = () => {
  //making the dark mode property sticky
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
        <Paper square style={{ height: '100vh',width: 'full', backgroundColor: currentTheme.palette.background.default }}>
          <AppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <ImageAvatars />
              <UserInfoCard />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RepoList />
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </div>
  );
}
