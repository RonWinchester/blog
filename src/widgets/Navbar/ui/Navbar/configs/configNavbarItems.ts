import { MainPageIcon, AboutPageIcon, UserIcon } from "shared/assets/icons"; // TODO: найти пак иконок
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export const configNavbarItems = [
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
	{
		text: "Профиль",
		path: RoutePath.profile,
		icon: UserIcon,
		authOnly: true,
	},
	{
		text: "Статьи",
		path: RoutePath.articles,
		icon: MainPageIcon,
		authOnly: true,
	}
];
