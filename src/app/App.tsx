import "./styles/index.scss";
import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

export const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Navbar>
				<ThemeSwitcher />
			</Navbar>
			<AppRouter />
		</div>
	);
};
