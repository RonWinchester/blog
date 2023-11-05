import { useState } from "react";
import { SidebarIcon } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ButtonTheme, ButtonSize } from "shared/ui/Button/Button";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import style from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
	children?: React.ReactNode;
}

export const Sidebar = ({ className, children }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
				className,
			])}
		>
			<Button className={classNames(style.button)} size={ButtonSize.S} theme={ButtonTheme.BACKGROUND} data-testid="sidebar-toggle" onClick={onToggle}>
				<SidebarIcon />
			</Button>
			<div className={classNames(style.switchers, {[`${style["swicher-collapsed"]}`]: collapsed})}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			{children}
		</div>
	);
};
