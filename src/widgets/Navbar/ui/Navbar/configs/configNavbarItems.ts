import { MainPageIcon, AboutPageIcon, UserIcon } from "shared/assets/icons";
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
	},
];
