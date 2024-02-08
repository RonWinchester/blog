import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export enum AppRouters {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile"
}

export const RoutePath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: "/",
	[AppRouters.ABOUT]: "/about",
	[AppRouters.PROFILE]: "/profile",
};

export const routeConfig: Record<AppRouters, RouteProps> = {
	[AppRouters.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRouters.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRouters.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
	}
};
