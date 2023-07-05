import { ThemeOptions } from "@mui/material";

declare module "@mui/material" {
  interface ThemeOptions {
    breakpoints: {
      xs: number,
      sm: number,
      md: number,
      lg: number,
      xl: number
    },
    palette: {
      primary: {
        main: React.CSSProperties['color'],
        light: React.CSSProperties['color'],
        dark: React.CSSProperties['color']
      }
    },
    typography: {
      Nunito: {
        fontFamily: string
      },
      Lato: {
        fontFamily: string
      }
    }
  }
}