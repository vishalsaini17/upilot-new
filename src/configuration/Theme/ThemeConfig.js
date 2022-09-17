import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';
import body_bg from '../../assets/bg-img/body_bg.jpg';
import body_shadow from '../../assets/bg-img/body_shadow.jpg';

const ThemeContext = createContext({ toggleColorMode: () => { }, mode: 'light' | 'dark' });

const ThemeConfig = ({ children }) => {
  const [themeMode, setThemeMode] = useState('dark');

  // start custom theme styling
  const theme = useMemo(() => createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundRepeat: 'repeat-y, repeat',
            backgroundPosition: 'center top',
            backgroundColor: themeMode === 'light' ? '#F1F1F1' : '#2A2A2A',
            backgroundImage: themeMode === 'light' ? 'linear-gradient(to right, #F1F1F1 , #f8f9fa)' : `url(${body_shadow}), url(${body_bg})`
          }
        }
      }
    },
    palette: {
      mode: themeMode,
      primary: {
        light: '#1AC6ED',
        main: '#0071BF',
        dark: '#000950',
        // contrastText: string,
      },
      secondary: {
        light: '#BFBAE2',
        main: '#767299',
        dark: '#000950',
        // contrastText: string,
      },
      typography: {
        fontFamily: ['Roboto', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'].join(','),
      },

    }
  }), [themeMode])
  // end custom theme styling

  const contextFunctions = useMemo(() => ({
    toggleColorMode: () => {
      setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  return (
    <ThemeContext.Provider value={{ ...contextFunctions, themeMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeConfig;

export const useThemeContext = () => useContext(ThemeContext)