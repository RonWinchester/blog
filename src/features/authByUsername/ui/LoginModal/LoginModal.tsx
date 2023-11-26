import { classNames } from "shared/lib/classNames/classNames";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";
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
			<LoginForm />
			{children}
		</Modal>
	);
};
