import { classNames } from "shared/lib/classNames/classNames";
import style from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
	className?: string;
	src: string;
	size?: number;
	alt?: string;
}

export const Avatar = ({ className, src, size, alt, ...otherProps }: AvatarProps) => {
	const styles = useMemo<CSSProperties>(
		() => ({
			width: size,
			height: size,
		}),
		[size]
	);

	return (
		<img
			src={src}
			style={styles}
            alt={alt}
			className={classNames(style.avatar, {}, [className])}
			{...otherProps}
		/>
	);
};
