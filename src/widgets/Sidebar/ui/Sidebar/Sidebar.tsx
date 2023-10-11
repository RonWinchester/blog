import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSwitcher } from "widgets/LangSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import style from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
	children?: React.ReactNode
}

export const Sidebar = ({ className, children }: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev=>!prev)
    }

	return (
		<div className={classNames(style.sidebar, {[style.collapsed]:collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={classNames(style.switchers)}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
			{children}
		</div>
	);
};
