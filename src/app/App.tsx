import "./styles/index.scss";
import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";


export const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames("app", {}, [theme])}>
			<Suspense fallback="">
				<Navbar />
				<div className={classNames("content-page")}>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
