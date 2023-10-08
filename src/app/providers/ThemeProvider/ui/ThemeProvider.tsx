import React, { FC, ReactNode, useMemo, useState } from "react";
import { LOCAL_THEME_KEY, Theme, ThemeControl } from "shared/config/theme/ThemeContext";

interface Props {
	children: React.ReactNode;
}

const defaultTheme =
	(localStorage.getItem(LOCAL_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return (
		<ThemeControl.Provider value={defaultProps}>
			{children}
		</ThemeControl.Provider>
	);
};

export default ThemeProvider;
