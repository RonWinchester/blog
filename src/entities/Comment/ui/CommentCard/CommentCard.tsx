import { classNames } from "shared/lib/classNames/classNames";
import style from "./CommentCard.module.scss";
import { CommentItem } from "entities/Comment";

interface CommentCardProps {
	className?: string;
	children?: React.ReactNode;
    comment: CommentItem;
    isLoading?: boolean;
}

export const CommentCard = ({
	className,
	children,
	...otherProps
}: CommentCardProps) => {
	return (
		<div
			className={classNames(style.CommentCard, {}, [className])}
			{...otherProps}
		>
            comment
			{children}
		</div>
	);
};
