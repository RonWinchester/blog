import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "../Button/Button";
import { CloseIcon } from "shared/assets/icons";
import style from "./Modal.module.scss";
import React, { useCallback, useEffect } from "react";
import { Portal } from "../Portal/Portal";

interface ModalProps {
	className?: string;
	children?: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal = ({ className, isOpen, onClose, children }: ModalProps) => {
	const mods: Record<string, boolean> = {
		[style.opened]: isOpen,
	};

	const portalElement = document.getElementById("app") as HTMLElement;

	const onKeyDown = useCallback(
		(e: { keyCode: number }) => {
			if (e.keyCode === 27) {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [isOpen, onKeyDown]);

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<Portal element={portalElement || document.body}>
			<div className={classNames(style.modal, mods, [className])}>
				<div
					className={classNames(style.overlay)}
					onClick={() => {
						onClose();
					}}
				>
					<div className={classNames(style.content)} onClick={onContentClick}>
						<Button
							theme={ButtonTheme.CLEAR}
							size={ButtonSize.S}
							className={style.closeButton}
							onClick={() => {
								onClose();
							}}
						>
							<CloseIcon />
						</Button>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};
