import { Dispatch, SetStateAction } from "react";
import { SidebarIcon } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import style from "./Header.module.scss";

interface HeaderProps {
	className?: string;
	children?: React.ReactNode;
	setCollapsed?: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ className, children, setCollapsed }: HeaderProps) => {
	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	return (
		<header className={classNames(style.header, {}, [className])}>
			<Button
				className={classNames(style.button)}
				theme={ButtonTheme.CLEAR}
				data-testid="sidebar-toggle"
				onClick={onToggle}
			>
				<SidebarIcon />
			</Button>
			{children}
		</header>
	);
};
