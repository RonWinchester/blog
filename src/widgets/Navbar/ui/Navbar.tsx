import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
	children?: React.ReactNode
}

export const Navbar = ({ className, children }: NavbarProps) => {
	return (
		<div className={classNames(style.navbar, {}, [className])}>
			{children}
			<div className={classNames(style.linkContainer)}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>Главная</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О сайте</AppLink>
			</div>
		</div>
	);
};
