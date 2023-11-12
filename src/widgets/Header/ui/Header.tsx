import { Dispatch, SetStateAction, useState } from "react";
import { useTranslation } from "react-i18next";
import { SidebarIcon } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, Modal } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import style from "./Header.module.scss";

interface HeaderProps {
	className?: string;
	children?: React.ReactNode;
	setCollapsed?: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ className, children, setCollapsed }: HeaderProps) => {
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onModalClose = () => {
		setIsModalOpen(false);
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
			<Modal isOpen={isModalOpen} onClose={onModalClose}>
				Some text
			</Modal>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				onClick={() => {
					setIsModalOpen(true);
				}}
			>
				{t("Войти")}
			</Button>
		</header>
	);
};
