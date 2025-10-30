"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import "antd/dist/reset.css";
import { ConfigProvider, theme as antdTheme } from "antd";

type Theme = "light" | "dark";
const ThemeContext = createContext<{ theme: Theme; setTheme: (t: Theme) => void }>({
  theme: "light",
  setTheme: () => {}
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (theme === "dark") root.setAttribute("data-theme", "dark");
      else root.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Antd token: 可以按需扩展
  const antdConfig = {
    algorithm: theme === "dark" ? antdTheme.defaultAlgorithm : antdTheme.defaultAlgorithm, // 保持默认，可按需替换 darkAlgorithm
    token: {
      colorPrimary: "#4f6eff"
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ConfigProvider theme={antdConfig as any}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
}