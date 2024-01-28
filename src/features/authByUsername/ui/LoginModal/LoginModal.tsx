import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Modal, PageLoader } from "shared/ui";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import style from "./LoginModal.module.scss";

interface LoginModalProps {
	className?: string;
	children?: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({
	className,
	children,
	isOpen,
	onClose,
	...otherProps
}: LoginModalProps) => {
	return (
		<Modal
			className={classNames(style.LoginModal, {}, [className])}
			{...{ isOpen, onClose }}
			{...otherProps}
		>
			<Suspense fallback={<PageLoader />}>
				<LoginFormAsync onSuccess={onClose} />
			</Suspense>
			{children}
		</Modal>
	);
};
