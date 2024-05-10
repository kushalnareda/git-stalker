
import Typography from '@material-ui/core/Typography';
import { Box, Paper, ThemeProvider } from '@material-ui/core';
import AppBar2 from '../components/AppBar';
import useDarkMode from '../components/UseDarkMode';

const NotFoundPage = () => {
  const { darkMode, setDarkMode, currentTheme } = useDarkMode();

  return (
    <div>
      <ThemeProvider theme={currentTheme}>
        <Paper style={{height :'100vl'}} square>
          <AppBar2 check={darkMode} change={() => setDarkMode(!darkMode)} />
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