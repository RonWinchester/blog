import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticleDetailsPageProps {
 className?: string;
 children?: React.ReactNode;
}

const ArticleDetailsPage = ({ className, children, ...otherProps }: ArticleDetailsPageProps) => {
    const {t} = useTranslation('articles')

 return (
  <div className={classNames(style.ArticleDetailsPage, {}, [className])} {...otherProps}>
    <h1>{t("Статья")}</h1>
    {children}
  </div>
 );
};

export default memo(ArticleDetailsPage);