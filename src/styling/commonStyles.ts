import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

export const backgroundGradient = (theme: Theme) => ({
  backgroundImage: `linear-gradient(${theme.palette.info.light} 0%, ${theme.palette.info.dark} 100%)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed'
});

export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#09203f',
    },
    secondary: {
      main: '#4fcff0',
    },
    grey: {
      '800': 'rgba(215,218,225,1)',
    },
    info: {
      main: 'rgba(66,179,245,1)',
      light: 'rgba(66,179,245,1)',
      dark: 'rgba(95,44,130,1)',
    }
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  }
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4fcff0',
    },
    secondary: {
      main: '#09203f',
    },
    grey: {
      '800': 'rgb(50, 70, 90)',
    },
    info: {
      main: '#537895',
      light: '#537895',
      dark: '#09203f',
    }
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  }
});
