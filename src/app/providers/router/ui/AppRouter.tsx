import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "pages/ErrorPage";
import { Suspense } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui";

export const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route path="*" element={<ErrorPage />} />
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route
						key={path}
						path={path}
						element={<div className="page-wrapper">{element}</div>}
					/>
				))}
			</Routes>
		</Suspense>
	);
};
