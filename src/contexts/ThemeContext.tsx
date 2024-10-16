import { Context, createContext, ReactNode, useEffect, useState } from "react";
interface IThemeContextType {
  mode: "light" | "dark";
  changeMode: () => void;
}
export const ThemeContext: Context<IThemeContextType> =
  createContext<IThemeContextType>({
    mode: "light",
    changeMode: () => {},
  });
export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  function changeMode() {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("appTheme", newMode);
    document.documentElement.classList.replace(mode, newMode);
  }
  useEffect(() => {
    if (localStorage.getItem("appTheme")) {
      const newMode: string | null = localStorage.getItem("appTheme");
      if (newMode == null) return;
      if (newMode === "light" || newMode === "dark") {
        document.documentElement.classList.add(newMode);
        setMode(newMode);
      }
      return;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      localStorage.setItem("appTheme", "dark");
    } else {
      localStorage.setItem("appTheme", "light");
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ changeMode, mode }}>
      {children}
    </ThemeContext.Provider>
  );
}
