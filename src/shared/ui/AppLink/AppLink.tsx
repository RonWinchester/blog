import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./AppLink.module.scss";
import { memo } from "react";

export enum AppLinkTheme {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
	className?: string;
	children?: React.ReactNode;
    theme?: AppLinkTheme
}

export const AppLink = memo(function AppLink ({ className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps }: AppLinkProps) {
	return (
		<Link className={classNames(style.link, {}, [className, style[theme]])} to={to} {...otherProps}>
			{children}
		</Link>
	);
});
