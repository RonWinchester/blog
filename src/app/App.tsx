import useTheme from "shared/config/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useState } from "react";
import { Header } from "widgets/Header";

export const App = () => {
	const { theme } = useTheme();
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className={classNames("app", {}, [theme])} id="app">
			<Suspense fallback="">
				<Header setCollapsed={setCollapsed} />
				<div className={classNames("content-page")}>
					<Sidebar collapsed={collapsed} />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};
