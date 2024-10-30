import { getUserAuth, userActions } from "entities/User";
import { LoginModal } from "features/authByUsername";
import { Dispatch, SetStateAction, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SidebarIcon } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, Avatar, Button, Dropdown } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import style from "./Header.module.scss";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface HeaderProps {
	className?: string;
	children?: React.ReactNode;
	setCollapsed?: Dispatch<SetStateAction<boolean>>;
}

export const Header = memo(function Header({
	className,
	children,
	setCollapsed,
}: HeaderProps) {
	const { t } = useTranslation();
	const authData = useSelector(getUserAuth);
	const dispatch = useDispatch();

	const onToggle = () => {
		if (setCollapsed) {
			setCollapsed((prev) => !prev);
		}
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
				{isModalOpen && (
					<LoginModal isOpen={isModalOpen} onClose={onModalClose} />
				)}
				<AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.article_create}>
					{t("Создать статью")}
				</AppLink>
				<Dropdown
					direction="bottom-right"
					trigger={<Avatar size={30} src={authData.avatar || ""} />}
					items={[
						{
							content: t("Профиль"),
							href: RoutePath.profile + authData.id,
						},
						{
							content: t("Выйти"),
							onClick: onLogout,
						}
					]}
				/>
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
});
