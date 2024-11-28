import { UserRoles } from "entities/User";
import { AboutPage } from "pages/AboutPage";
import { AdminPanelPage } from "pages/AdminPanelPage";
import { ArticleDetailsPage } from "pages/ArticleDetailsPage";
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ArticlesPage } from "pages/ArticlesPage";
import { ErrorPage } from "pages/ErrorPage";
import { ForbiddenPage } from "pages/ForbiddenPage";
import { MainPage } from "pages/MainPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRoles[];
};

export enum AppRouters {
	MAIN = "main",
	ABOUT = "about",
	PROFILE = "profile",
	ARTICLES = "articles",
	ARTICLES_DETAILS = "articles_details",
	ARTICLE_EDIT = "article_edit",
	ARTICLE_CREATE = "article_create",
	ADMIN_PANEL = "admin_panel",
	FORBIDDEN = "forbidden",
	NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRouters, string> = {
	[AppRouters.MAIN]: "/",
	[AppRouters.ABOUT]: "/about",
	[AppRouters.PROFILE]: "/profile/",
	[AppRouters.ARTICLES]: "/articles",
	[AppRouters.ARTICLES_DETAILS]: "/articles/",
	[AppRouters.ARTICLE_EDIT]: "/articles/:id/edit",
	[AppRouters.ARTICLE_CREATE]: "/articles/new",
	[AppRouters.ADMIN_PANEL]: "/admin",
	[AppRouters.FORBIDDEN]: "/forbidden",
	[AppRouters.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRouters, AppRouteProps> = {
	[AppRouters.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRouters.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRouters.PROFILE]: {
		path: `${RoutePath.profile}:id`,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRouters.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRouters.ARTICLES_DETAILS]: {
		path: `${RoutePath.articles_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	[AppRouters.ARTICLE_EDIT]: {
		path: `${RoutePath.article_edit}`,
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRouters.ARTICLE_CREATE]: {
		path: `${RoutePath.article_create}`,
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRouters.ADMIN_PANEL]: {
		path: RoutePath.admin_panel,
		element: <AdminPanelPage />,
		authOnly: true,
		roles: [UserRoles.ADMIN, UserRoles.MODERATOR],
	},
	[AppRouters.FORBIDDEN]: {
		path: RoutePath.forbidden,
		element: <ForbiddenPage />,
		authOnly: false,
	},
	[AppRouters.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <ErrorPage />,
	},
};
