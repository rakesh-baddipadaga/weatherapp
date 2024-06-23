import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f3f4f6',
      paper: '#ffffff',
    },
  },
  typography: {
    h2: {
      fontSize: '2rem',
      fontWeight: '600',
      color: '#fff',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: '500',
      color: '#fff',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #74ebd5 30%, #ACB6E5 90%)',
          padding: '20px',
          borderRadius: '15px',
        },
      },
    },
  },
});

export default theme;

