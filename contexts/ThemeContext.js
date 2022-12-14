import { isEqual } from "lodash";
import { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

export const themes = {
  light: {
    bodyBg: "hsl(0, 0%, 98%)",
    mainBg: "hsl(0, 0%, 100%)",
    secondaryBg: "hsl(0, 5%, 92%)",
    mainClr: "hsl(200, 15%, 8%)",
    shadowClr: "rgba(0, 0, 0, 0.1)",
  },
  dark: {
    bodyBg: "hsl(207, 26%, 17%)",
    mainBg: "hsl(209, 23%, 22%)",
    secondaryBg: "hsl(209, 23%, 31%)",
    mainClr: "hsl(0, 0%, 100%)",
    shadowClr: "rgba(0, 0, 0, 0.1)",
  },
};

export const ThemeContext = createContext({
  themes: themes.light,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const themeKey = "countries-app-theme-cfg";
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localTheme = JSON.parse(localStorage.getItem(themeKey));
      if (localTheme) {
        setTheme(localTheme);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (typeof window !== "undefined") {
      const newTheme = isEqual(theme, themes.dark) ? themes.light : themes.dark;
      setTheme(newTheme);
      localStorage.setItem(themeKey, JSON.stringify(newTheme));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}
