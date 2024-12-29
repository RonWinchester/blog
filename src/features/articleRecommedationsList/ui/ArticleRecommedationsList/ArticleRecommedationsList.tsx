import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import style from "./ArticleRecommedationsList.module.scss";
import { memo } from "react";
import { ArticleList } from "entities/Article";
import { Text } from "shared/ui";
import { useGetArticleRecommendationsListQuery } from "../../api/articleRecommendationsApi";

interface ArticleRecommedationsListProps {
    className?: string;
    children?: React.ReactNode;
}

export const ArticleRecommedationsList = memo(
    (props: ArticleRecommedationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const {
            data: articles,
            isLoading,
            isError,
        } = useGetArticleRecommendationsListQuery(4);

        if (isError) {
            return <div>error</div>;
        }

        return (
            <div
                className={classNames(style.ArticleRecommedationsList, {}, [
                    className,
                ])}
            >
                <Text title={t("Рекомендации")} />
                <ArticleList
                    className={style.recommendations}
                    articles={articles}
                    isLoading={isLoading}
                />
            </div>
        );
    },
);
