import { ThemeProvider, createTheme } from "@mui/material";
import Routes from "@routes/index";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const theme = createTheme({
  breakpoints: {
    xs: 0,
    sm: 780,
    md: 1000,
    lg: 1300,
    xl: 1500
  },
  palette: {
    primary: {
      main: '#7C58D3',
      light: '#B6A0E2',
      dark: '#44258d'
    },
    secondary: {
      main: '#FFDA47',
      light: '#ffe580',
      dark: '#e6b700'
    }
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontFamily: 'Nunito',
      fontWeight: 800
    },
    h2: {
      fontFamily: 'Nunito',
      fontWeight: 800
    },
    h3: {
      fontFamily: 'Nunito',
      fontWeight: 800
    },
    h4: {
      fontFamily: 'Nunito',
      fontWeight: 800
    },
    h5: {
      fontFamily: 'Nunito',
      fontWeight: 800
    },
    h6: {
      fontFamily: 'Nunito',
      fontWeight: 800
    },
  }
})
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {Routes}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
