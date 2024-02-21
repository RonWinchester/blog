import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "pages/ErrorPage";
import { Suspense, useMemo } from "react";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui";
import { useSelector } from "react-redux";
import { getUserAuth } from "entities/User";

export const AppRouter = () => {
	const isAuth = useSelector(getUserAuth);

    const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
        if (route.authOnly && !isAuth) {
            return false;
        }

        return true;
    }), [isAuth]);
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				<Route path="*" element={<ErrorPage />} />
				{routes.map(({ element, path }) => (
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
