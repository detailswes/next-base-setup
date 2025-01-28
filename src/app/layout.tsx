import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { lightTheme, darkTheme } from "../theme";
import { cookies } from "next/headers";
import ReduxProvider from "@/store/store-provider";
import ToastProvider from "@/components/ToastProvider";
import { RootLayoutType } from "@/types/props";

// Use a font from Google
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Define the layout component
const RootLayout = async ({ children }: RootLayoutType) => {
  // Await the cookies function
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDarkMode = theme ?? false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ReduxProvider>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
              <ToastProvider>{children}</ToastProvider>
            </ThemeProvider>
          </ReduxProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
