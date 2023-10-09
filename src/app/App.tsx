import { Link } from "react-router-dom";
import "./styles/index.scss";
import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";

export const App = () => {
    const {theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<button onClick={toggleTheme}>Theme</button>
			<AppRouter />
		</div>
	);
};
