import React, { Suspense, useContext } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import useTheme from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme } = useTheme()
	return (
		<div className={`app ${theme}`}>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<button onClick={toggleTheme}>Theme</button>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="*" element={<ErrorPage />} />
					<Route path="/" element={<MainPageAsync />} />
					<Route path="/about" element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};
