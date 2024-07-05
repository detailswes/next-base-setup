"use client";
import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

// Define the Roboto font
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Light theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#FFCF01", //extra green
      light: "#FFF7D0", //lemon green
      dark: "#F1C60F", // dark green
    },
    secondary: {
      main: "#141414", //black
      dark: "#303030", //dark grey
      light: "#71B247", //grey
      contrastText: "#B0B0B0", //light grey

      // extra light and white need to add here
    },

    info: {
      main: "#1D45BA", //blue
      dark: "#062685", //dark blue
      light: "#E7EDFF", //light blue
    },

    success: {
      main: "#E8FFDA", //lemon grreen
      dark: "#71B247", //dark lemon green
      light: "#E8FFDA", //light lemon
    },

    warning: {
      main: "#EC9630", //orange
      dark: "#DE7800", //dark orange
      light: "#FFE9CE", //light orange
    },

    mode: "light",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#FFCF01", //extra green
      light: "#FFF7D0", //lemon green
      dark: "#F1C60F", // dark green
    },
    secondary: {
      main: "#141414", //black
      dark: "#303030", //dark grey
      light: "#71B247", //grey
      contrastText: "#B0B0B0", //light grey

      // extra light and white need to add here
    },

    info: {
      main: "#1D45BA", //blue
      dark: "#062685", //dark blue
      light: "#E7EDFF", //light blue
    },

    success: {
      main: "#E8FFDA", //lemon grreen
      dark: "#71B247", //dark lemon green
      light: "#E8FFDA", //light lemon
    },

    warning: {
      main: "#EC9630", //orange
      dark: "#DE7800", //dark orange
      light: "#FFE9CE", //light orange
    },

    // danger need to add here

    mode: "dark",
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export { lightTheme, darkTheme };
