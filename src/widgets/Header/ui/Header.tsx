import { getUserAuth, userActions } from "entities/User";
import { LoginModal } from "features/authByUsername";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
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
	const { t } = useTranslation();
	const authData = useSelector(getUserAuth);
	const dispatch = useDispatch();

	const onToggle = () => {
		setCollapsed((prev) => !prev);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const onModalClose = () => {
		setIsModalOpen(false);
	};
	const onLogout = useCallback(() => {
		dispatch(userActions.logout());
	}, [dispatch]);
	if (authData) {
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
				{isModalOpen && <LoginModal isOpen={isModalOpen} onClose={onModalClose} />}
				<Button
					theme={ButtonTheme.CLEAR_INVERTED}
					onClick={() => {
						onLogout();
					}}
				>
					{t("Выйти")}
				</Button>
			</header>
		);
	}
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
			<LoginModal isOpen={isModalOpen} onClose={onModalClose} />
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
