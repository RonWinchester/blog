import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui";
import { CommentList } from "entities/Comment";

interface ArticleDetailsPageProps {
	className?: string;
	children?: React.ReactNode;
}

const ArticleDetailsPage = ({
	className,
	...otherProps
}: ArticleDetailsPageProps) => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();
	return (
		<div
			className={classNames(style.ArticleDetailsPage, {}, [className])}
			{...otherProps}
		>
			{id ? (
				<>
					<ArticleDetails id={id} />
					<Text title={t("Комментарии")} />
					<CommentList />
				</>
			) : (
				<div>{t("Статья не найдена")}</div>
			)}
		</div>
	);
};

export default memo(ArticleDetailsPage);
