import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    lightMode: () => { },
    darkMode: () => { }
});

export const ThemeProvider = themeContext.Provider;

export function useTheme() {
    return useContext(themeContext);
}