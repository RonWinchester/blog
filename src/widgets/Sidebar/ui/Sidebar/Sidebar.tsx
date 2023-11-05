import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { Navbar } from "widgets/Navbar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import style from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
	children?: React.ReactNode;
	collapsed?: boolean;
}

export const Sidebar = ({ className, children, collapsed }: SidebarProps) => {
	return (
		<div
			data-testid="sidebar"
			className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [
				className,
			])}
		>
			<Navbar collapsed={collapsed} />
			<div
				className={classNames(style.switchers, {
					[`${style["swicher-collapsed"]}`]: collapsed,
				})}
			>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
			{children}
		</div>
	);
};
