import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    paper: {
      backgroundImage: string;
      backgroundSize: string;
      backgroundPosition: string;
      backgroundAttachment: string;
      backdropFilter: string;
    },
    background?: any
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    paper?: {
      backgroundImage?: string;
      backgroundSize?: string;
      backgroundPosition?: string;
      backgroundAttachment?: string;
      backdropFilter?: string;
    },
    background?: any
  }
}

export const lightTheme = createTheme({
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
    }
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  },
  paper: {
    backgroundImage: 'linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backdropFilter: 'none'
  }
});

export const darkTheme = createTheme({
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
    },
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  },
  paper: {
    backgroundImage: 'linear-gradient(#537895 0%, #09203f 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backdropFilter: 'none'
  }
});

export const minecraftTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fafafa'
    },
    background: {
      paper: '#706E71',
      default: '#1D140D'
    }
  },
  typography: {
    fontFamily: 'VT323'
  },
  shape: {
    borderRadius: 0
  },
  paper: {
    backgroundImage: 'brown',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backdropFilter: 'none'
  }
});

export const frostTheme = createTheme({
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
  },
  typography: {
    fontFamily: 'Poppins, \'Lato\', sans-serif'
  },
  paper: {
    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backdropFilter: 'blur(20px)'
  },
  background: {
    width: '300%',
    height: '300%',
    backgroundSize: '100% 100%',
    position: 'absolute',
    animation: 'GradientBackground 5s ease infinite',
    background: 'linear-gradient(0.33turn, #f6a192, #ffd9df, #f6c492, #f6a192)',
    zIndex: -1,
    '@keyframes GradientBackground': {
      '0%': { transform: 'translate(0, -50%);' },
      '50%': { transform: 'translate(-60%, 0);' },
      '100%': { transform: 'translate(0, -50%);' }
    }
  }
});
