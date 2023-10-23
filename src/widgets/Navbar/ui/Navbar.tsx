import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import style from "./Navbar.module.scss";

interface NavbarProps {
	className?: string;
	children?: React.ReactNode;
}

export const Navbar = ({ className, children }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={classNames(style.navbar, {}, [className])}>
			{children}
			<div className={classNames(style.linkContainer)}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
					{t("Главная")}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
					{t("О сайте")}
				</AppLink>
			</div>
		</div>
	);
};
