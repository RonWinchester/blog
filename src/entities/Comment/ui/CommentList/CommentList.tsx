import { classNames } from "shared/lib/classNames/classNames";
import style from "./CommentList.module.scss";
import { Text } from "shared/ui";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { CommentItem } from "entities/Comment";

interface CommentListProps {
	className?: string;
	children?: React.ReactNode;
	comments?: CommentItem[];
	isLoading?: boolean;
}

export const CommentList = ({
	className,
	children,
	comments,
	isLoading,
	...otherProps
}: CommentListProps) => {
	const { t } = useTranslation("articles");

	if (isLoading) {
		return (
			<div
				className={classNames(style.CommentList, {}, [className])}
				{...otherProps}
			>
				<CommentCard isLoading={isLoading} />
			</div>
		);
	}

	if (!comments?.length) {
		return (
			<Text
				text={isLoading ? t("Загрузка комментариев...") : t("Комментариев нет")}
			/>
		);
	}
	return (
		<div
			className={classNames(style.CommentList, {}, [className])}
			{...otherProps}
		>
			{comments?.map((comment) => (
				<CommentCard key={comment.id} comment={comment} />
			))}
			{children}
		</div>
	);
};
