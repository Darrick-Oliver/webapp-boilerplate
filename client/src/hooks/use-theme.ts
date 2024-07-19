import { useContext } from "react";

import { ThemeProviderContext } from "@/components/theme-provider";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeProviderContext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, toggleTheme };
};
