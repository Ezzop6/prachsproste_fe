import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({});

const DefaultTheme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { DefaultTheme };
