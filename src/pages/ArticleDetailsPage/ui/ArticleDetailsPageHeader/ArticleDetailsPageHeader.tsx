import { memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPageHeader.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { canEditPage } from "pages/ArticleDetailsPage/model/selectors/canEditPage";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";

interface ArticleDetailsPageHeaderProps {
    className?: string;
    children?: React.ReactNode;
}

export const ArticleDetailsPageHeader = memo(
    ({ className, ...otherProps }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation("articles");
        const canEdit = useSelector(canEditPage);
        const article = useSelector(getArticleDetailsData);

        const navigate = useNavigate();

        const onBackToArticleList = useCallback(() => {
            navigate(RoutePath.articles);
        }, [navigate]);

        const onEdit = useCallback(() => {
            navigate(`${RoutePath.articles_details}${article?.id}/edit`);
        }, [article?.id, navigate]);

        return (
            <div
                className={classNames(style.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
                {...otherProps}
            >
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onBackToArticleList}
                >
                    {t("Назад")}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onEdit}>
                        {t("Редактировать")}
                    </Button>
                )}
            </div>
        );
    },
);
