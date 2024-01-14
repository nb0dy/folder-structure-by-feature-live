import { createTheme, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#1C212D',
    },
    secondary: {
      main: '#825DFF',
    },
    error: {
      main: '#BC3535',
    },
    success: {
      main: '#23764C',
    },
    warning: {
      main: '#665C40',
    },
    info: {
      main: '#2B5481',
    },
    text: {
      primary: 'rgba(28,33,45,0.87)',
      secondary: 'rgba(28,33,45,0.6)',
      disabled: 'rgba(28,33,45,0.38)',
    },
    divider: 'rgba(28,33,45,0.12)',
  },
};

export const theme = createTheme(themeOptions);
