import React, { useState, useEffect } from 'react';
import Logo from "../components/icon/GitIconLight";
import SearchBox from "../components/SearchBox";
import { Box, Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "../components/AppBar";
import GitIconLight from '../components/icon/GitIconLight';
import GitIconDark from '../components/icon/GitIconDark';

export const Search = () => {
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
    <ThemeProvider theme={currentTheme}>
      <Paper square style={{ height: "100vh", backgroundColor: currentTheme.palette.background.default }}>
        <AppBar check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Box
          display="flex"
          justifyContent="center"
          minHeight="20vh"
          style={{ backgroundColor: "inherit", marginTop: "200px" }}
        >
          {darkMode ? <GitIconDark /> : <GitIconLight />}
        </Box>
        <SearchBox currentTheme={currentTheme} />
      </Paper>
    </ThemeProvider>
  );
};

export default Search;
