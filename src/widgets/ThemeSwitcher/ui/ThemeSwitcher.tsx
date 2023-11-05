import { ThemeSwitcherIcon } from "shared/assets/icons";
import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import style from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
	className?: string;
}


export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			theme={ButtonTheme.CLEAR}
			className={classNames(style.themeSwitcher, {}, [className, style[theme]])}
			onClick={toggleTheme}
			size={ButtonSize.S}
		>
			<ThemeSwitcherIcon />
		</Button>
	);
};
