import { memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import style from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import useTheme from "shared/config/theme/useTheme";
import { Overlay } from "../Overlay/Overlay";

interface DrawerProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo(
    ({ className, children, isOpen, onClose }: DrawerProps) => {
        const portalElement = document.getElementById("app") as HTMLElement;

        const mods: Mods = {
            [style.opened]: isOpen,
        };

        const { theme } = useTheme();

        return (
            <Portal element={portalElement || document.body}>
                <div
                    className={classNames(style.Drawer, mods, [
                        className,
                        theme,
                    ])}
                >
                    <Overlay onClick={onClose} />
                    <div className={style.content}>{children}</div>
                </div>
            </Portal>
        );
    },
);
