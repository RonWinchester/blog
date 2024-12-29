import { createContext } from "react";

export enum Theme {
    LIGHT = "light",
    DARK = "dark",
    USER = "user",
}

export interface IThemeContext {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const ThemeControl = createContext<IThemeContext>({});

export const LOCAL_THEME_KEY = "theme";
