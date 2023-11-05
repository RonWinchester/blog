import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from "./Navbar.module.scss";
import { MainPageIcon, AboutPageIcon } from "shared/assets/icons";

interface NavbarProps {
	className?: string;
	children?: React.ReactNode;
	collapsed?: boolean;
}

export const Navbar = ({ className, collapsed, children }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(style.navbar, {}, [className])}>
			{children}
			<nav className={classNames(style.linkContainer)}>
				<AppLink
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.main}
					className={classNames(style.linkWrapper)}
				>
					<MainPageIcon className={style.icon} />
					<span className={collapsed && style.collapsedLink}>
						{t("Главная")}
					</span>
				</AppLink>
				<AppLink
					className={classNames(style.linkWrapper)}
					theme={AppLinkTheme.SECONDARY}
					to={RoutePath.about}
				>
					<AboutPageIcon className={style.icon} />
					<span className={collapsed && style.collapsedLink}>
						{t("О сайте")}
					</span>
				</AppLink>
			</nav>
		</div>
	);
};
