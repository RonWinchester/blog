import { useContext } from "react";
import { LOCAL_THEME_KEY, Theme, ThemeControl } from "./ThemeContext";

interface IUseThemResult {
	toggleTheme: () => void;
	theme: Theme;
}

const useTheme = (): IUseThemResult => {
	const { theme, setTheme } = useContext(ThemeControl);
	const toggleTheme = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_THEME_KEY, newTheme);
	};

	return { theme: theme || Theme.LIGHT, toggleTheme };
};

export default useTheme;
