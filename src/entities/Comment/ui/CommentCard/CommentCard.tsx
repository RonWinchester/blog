import { classNames } from "shared/lib/classNames/classNames";
import style from "./CommentCard.module.scss";
import { CommentItem } from "entities/Comment";
import { Avatar, Skeleton, Text } from "shared/ui";
import { TextAlign, TextSize } from "shared/ui/Text/Text";

interface CommentCardProps {
	className?: string;
	children?: React.ReactNode;
	comment?: CommentItem;
	isLoading?: boolean;
}

export const CommentCard = ({
	className,
	children,
	comment,
	isLoading,
	...otherProps
}: CommentCardProps) => {
	if (isLoading) {
		return (
			<div
				className={classNames(style.CommentCard, {}, [className])}
				{...otherProps}
			>
				<div className={style.header}>
					<Skeleton width={32} height={32} borderRadius="50%" />
					<Skeleton width={100} height={16} borderRadius="8px" />
				</div>
				<Skeleton width={100} height={16} borderRadius="8px" />
			</div>
		);
	}
	if (comment)
		return (
			<div
				className={classNames(style.CommentCard, {}, [className])}
				{...otherProps}
			>
				<div className={style.header}>
					<Avatar
						size={32}
						src={
							comment.user.avatar
								? comment.user.avatar
								: " https://mui.com/static/images/avatar/3.jpg"
						}
					/>
					<Text
						title={comment.user.username}
						align={TextAlign.LEFT}
						size={TextSize.S}
					/>
				</div>
				<Text text={comment.text} />
				{children}
			</div>
		);

	return null;
};
