import { ThemeSwitcherIcon } from "shared/assets/icons";
import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ThemeButton } from "shared/ui/Button/Button";
import style from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
	className?: string;
}


export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(style.themeSwitcher, {}, [className, style[theme]])}
			onClick={toggleTheme}
		>
			<ThemeSwitcherIcon />
		</Button>
	);
};
