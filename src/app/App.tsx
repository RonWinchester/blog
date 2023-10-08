import React, { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import useTheme from "shared/config/theme/useTheme";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { ErrorPage } from "pages/ErrorPage";
import { classNames } from "shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme } = useTheme()
	return (
		<div className={classNames('app', {}, [theme])}>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<button onClick={toggleTheme}>Theme</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					<Route path="/" element={<MainPage />} />
					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	);
};
