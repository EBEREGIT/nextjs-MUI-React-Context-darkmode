"use client";

import { createTheme, useMediaQuery } from "@mui/material";

const { createContext, useState, useEffect } = require("react");

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const prefersMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = useState(prefersMode);

  useEffect(() => {
    setMode(prefersMode);
  }, [prefersMode]);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
