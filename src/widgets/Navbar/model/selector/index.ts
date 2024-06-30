import { createSelector } from "@reduxjs/toolkit";
import { getUserAuth } from "entities/User";
import {
	MainPageIcon,
	AboutPageIcon,
	UserIcon,
	ArticleIcon,
} from "shared/assets/icons";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { ConfigNavbarItems } from "./types/items";

export const getNavbarItems = createSelector(getUserAuth, (userData) => {
	const configNavbarItems: ConfigNavbarItems[] = [
		{
			text: "Главная",
			path: RoutePath.main,
			icon: MainPageIcon,
		},
		{
			text: "О сайте",
			path: RoutePath.about,
			icon: AboutPageIcon,
		},
	];

	if (userData) {
		return configNavbarItems.concat(
			{
				text: "Профиль",
				path: RoutePath.profile + userData?.id,
				icon: UserIcon,
				authOnly: true,
			},
			{
				text: "Статьи",
				path: RoutePath.articles,
				icon: ArticleIcon,
				authOnly: true,
			}
		);
	}

	return configNavbarItems;
});
