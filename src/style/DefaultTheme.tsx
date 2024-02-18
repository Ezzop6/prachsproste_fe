import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e88e5',
    },
    secondary: {
      main: '#ff3d00',
    },
    warning: {
      main: '#ff3d00',
    },
    info: {
      main: '#90b0ff',
    },
  },
});

const DefaultTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { DefaultTheme };
