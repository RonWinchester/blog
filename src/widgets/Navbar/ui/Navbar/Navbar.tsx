import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from "./Navbar.module.scss";
import { configNavbarItems } from "./configs/configNavbarItems";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getUserAuth } from "entities/User";
import { useSelector } from "react-redux";

interface NavbarProps {
	className?: string;
	children?: React.ReactNode;
	collapsed?: boolean;
}

export const Navbar = ({ className, collapsed, children }: NavbarProps) => {
	const { t } = useTranslation();
	const location = useLocation();
	const isAuth = useSelector(getUserAuth);

	const list = useMemo(() => {
		return configNavbarItems.map((item) => {
			if (item.authOnly && !isAuth) {
				return null;
			}
			const activePage = item.path === location.pathname ? style.active : "";
			return (
				<AppLink
					key={item.path}
					theme={AppLinkTheme.SECONDARY}
					to={item.path}
					className={classNames(style.linkWrapper, {}, [activePage])}
				>
					<item.icon className={style.icon} />
					<span className={collapsed ? style.collapsedLink : undefined}>
						{t(item.text)}
					</span>
				</AppLink>
			);
		});
	}, [collapsed, isAuth, location.pathname, t]);

	return (
		<div className={classNames(style.navbar, {}, [className])}>
			{children}
			<nav className={classNames(style.linkContainer)}>{list}</nav>
		</div>
	);
};
