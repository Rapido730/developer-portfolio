import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";

export type ThemeContextType = {
  Theme: string;
  SetTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  Theme: "light",
  SetTheme: () => null,
});
