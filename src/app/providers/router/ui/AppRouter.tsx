import { Routes, Route } from "react-router-dom";
import { Suspense, useCallback } from "react";
import { PageLoader } from "shared/ui";
import { RequireAuth } from "./RequireAuth";
import {
	AppRouteProps,
	routeConfig,
} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};
