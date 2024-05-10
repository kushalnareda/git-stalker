import { Grid, Paper } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ImageAvatars from "../components/Profile";
import RepoList from "../components/RepoList";
import UserInfoCard from "../components/UserInfoCard";

import AppBar2 from "../components/AppBar";
import useDarkMode from "../components/UseDarkMode";

export const User = () => {
  const { darkMode, setDarkMode, currentTheme } = useDarkMode();

  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <Paper square style={{ height: '100vh',width: 'full', backgroundColor: currentTheme.palette.background.default }}>
          <AppBar2 check={darkMode} change={() => setDarkMode(!darkMode)} />
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
