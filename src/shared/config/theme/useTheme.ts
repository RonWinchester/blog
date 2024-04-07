import { useContext } from "react";
import { LOCAL_THEME_KEY, Theme, ThemeControl } from "./ThemeContext";

interface IUseThemResult {
	toggleTheme: () => void;
	theme: Theme;
}

const useTheme = (): IUseThemResult => {
	const { theme, setTheme } = useContext(ThemeControl);
	const toggleTheme = () => {
		let newTheme: Theme;
		switch (theme) {
			case Theme.DARK:
				newTheme = Theme.LIGHT;
				break;
			case Theme.LIGHT:
				newTheme = Theme.USER;
				break;
			case Theme.USER:
				newTheme = Theme.DARK;
				break;
			default:
				newTheme = Theme.LIGHT;
		}
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_THEME_KEY, newTheme);
	};

	return { theme: theme || Theme.LIGHT, toggleTheme };
};

export default useTheme;
