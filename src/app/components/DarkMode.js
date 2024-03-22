"use client";

import { ToggleOff, ToggleOn } from "@mui/icons-material";
import { Button, Paper } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkMode() {
  const { setMode, mode } = useContext(ThemeContext);
  return (
    <Paper elevation={0} square sx={{ height: "100vh" }}>
      DarkMode
      <Button
        onClick={() => {
          if (mode) {
            setMode(false);
          } else {
            setMode(true);
          }
        }}
      >
        {mode ? <ToggleOn /> : <ToggleOff />}
      </Button>
    </Paper>
  );
}
