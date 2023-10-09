import { Link } from "react-router-dom";
import "./styles/index.scss";
import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const {theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Navbar />
			<button onClick={toggleTheme}>Theme</button>
			<AppRouter />
		</div>
	);
};
