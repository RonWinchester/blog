import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Overlay.module.scss";

interface OverlayProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Overlay = memo(
    ({ className, children, onClick, ...otherProps }: OverlayProps) => {
        const onContentClick = (e: React.MouseEvent) => {
            e.stopPropagation();
        };
        return (
            <div
                className={classNames(style.Overlay, {}, [className])}
                onClick={onClick}
                {...otherProps}
            >
                <div onClick={onContentClick}>{children}</div>
            </div>
        );
    },
);
