import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "pages/ErrorPage";
import { Suspense } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="*" element={<ErrorPage />} />
                {Object.values(routeConfig).map(({element, path})=>(
                    <Route key={path} path={path} element={element}/>
                ))}
			</Routes>
		</Suspense>
	);
};
