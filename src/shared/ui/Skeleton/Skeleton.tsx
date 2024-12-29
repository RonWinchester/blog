import { classNames } from "shared/lib/classNames/classNames";
import style from "./Skeleton.module.scss";
import { useMemo, CSSProperties } from "react";

interface SkeletonProps {
    className?: string;
    children?: React.ReactNode;
    height?: string | number;
    width?: string | number;
    borderRadius?: string | number;
}

export const Skeleton = ({
    className,
    children,
    height,
    width,
    borderRadius,
    ...otherProps
}: SkeletonProps) => {
    const styles = useMemo<CSSProperties>(
        () => ({
            width,
            height,
            borderRadius,
        }),
        [width, height, borderRadius],
    );

    return (
        <div
            className={classNames(style.Skeleton, {}, [className])}
            style={styles}
            {...otherProps}
        >
            {children}
        </div>
    );
};
