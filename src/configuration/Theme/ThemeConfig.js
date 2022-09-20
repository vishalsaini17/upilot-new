import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { createContext, useContext, useMemo, useState } from 'react';
import body_bg from '../../assets/bg-img/body_bg.jpg';
import body_shadow from '../../assets/bg-img/body_shadow.jpg';
import { paletteColor } from './paletteColor';

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
      },
      MuiButton: {
        styleOverrides: {

        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              textTransform: 'unset',
              fontWeight: 500,
            }
          },
          {
            props: { variant: 'contained', size: 'large' },
            style: {
              fontSize: '15px',
              height: '45px'
            }
          },
          {
            props: { variant: 'contained', size: 'small' },
            style: {
              fontSize: '13px',
              height: '32px',
              padding:"0 15px"
              
            }
          },
          {
            props: { variant: 'contained', color: 'primary' },
            style: {
              backgroundImage: `linear-gradient(to bottom, ${paletteColor.primary.light} 0%, ${paletteColor.primary.main} 100%)`,
              '&:hover': {
                backgroundImage: `linear-gradient(to bottom, ${paletteColor.primary.main} 0%, ${paletteColor.primary.dark} 100%)`,
              }
            }
          },
          
        ],

      }
    },
    palette: {
      mode: themeMode,
      ...paletteColor,
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