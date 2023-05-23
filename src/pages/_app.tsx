import { ThemeContext, ThemeContextType } from "@/context/app_state";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [Theme, SetTheme] = useState<string>("dark");

  return (
    <ThemeContext.Provider value={{ Theme, SetTheme }}>
      <Component {...pageProps} />{" "}
    </ThemeContext.Provider>
  );
}
