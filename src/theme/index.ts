"use client";
import { createTheme } from "@mui/material/styles";
import { customColors, colors } from "./colors";
import cookie from "js-cookie";

declare module "@mui/material/styles" {
  interface Palette {
    Typography: CustomPaletteColor;
    TypographySecondry: CustomPaletteColor;
    Border: CustomPaletteColor;
    Backgrounds: CustomPaletteColor;
  }
  interface PaletteOptions {
    Typography: CustomPaletteColor;
    TypographySecondry: CustomPaletteColor;
    Border: CustomPaletteColor;
    Backgrounds: CustomPaletteColor;
  }
}

interface CustomPaletteColor {
  main: string;
  dark: string;
  light: string;
}

const { palette } = createTheme();

const createCustomPaletteLight = () => ({
  Typography: palette.augmentColor({ color: customColors.Typography }),
  TypographySecondry: palette.augmentColor({
    color: customColors.TypographySecondry,
  }),
  Border: palette.augmentColor({ color: customColors.Border }),
  Backgrounds: palette.augmentColor({ color: customColors.Backgrounds }),
});

const createCustomTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      ...(mode === "light"
        ? createCustomPaletteLight()
        : createCustomPaletteLight()), //current theme is same for both mode
      ...(mode === "light" ? colors : colors),
      mode: mode,
    },

    typography: {
      fontFamily: "Roboto, sans-serif",
    },
  });

const lightTheme = createCustomTheme("light");
const darkTheme = createCustomTheme("dark");

const toggleTheme = (mode: "light" | "dark") => {
  cookie.set("theme", mode);
  window.location.reload();
};

export { lightTheme, darkTheme, toggleTheme };
