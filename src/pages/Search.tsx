
import SearchBox from "../components/SearchBox";
import { Box, Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import GitIconLight from '../components/icon/GitIconLight';
import GitIconDark from '../components/icon/GitIconDark';
import AppBar2 from '../components/AppBar';
import useDarkMode from '../components/UseDarkMode';

export const Search = () => {
  const { darkMode, setDarkMode, currentTheme } = useDarkMode();
  
  return (
    <ThemeProvider theme={currentTheme}>
      <Paper square style={{ height: "100vh", backgroundColor: currentTheme.palette.background.default }}>
        <AppBar2 check={darkMode} change={() => setDarkMode(!darkMode)} />
        <Box
          display="flex"
          justifyContent="center"
          minHeight="20vh"
          style={{ backgroundColor: "inherit", marginTop: "200px" }}
        >
          {/* Used two different icons hard coded the colors here might change later */}
          {darkMode ? <GitIconDark /> : <GitIconLight />}
        </Box>
        <SearchBox currentTheme={currentTheme} />
      </Paper>
    </ThemeProvider>
  );
};

export default Search;
