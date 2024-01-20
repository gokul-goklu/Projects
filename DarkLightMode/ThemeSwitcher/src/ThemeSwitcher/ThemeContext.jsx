import { createContext, useContext, useEffect, useState } from "react";

const themeChecker = createContext();

export const useTheme = () => {
  return useContext(themeChecker);
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };
  const theme = isDark ? "Dark" : "Light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDark, theme]);
  return (
    <themeChecker.Provider value={{ toggleTheme, theme }}>
      {children}
    </themeChecker.Provider>
  );
};
