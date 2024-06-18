import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticlesPageProps {
	className?: string;
	children?: React.ReactNode;
}

const ArticlesPage = ({
	className,
	children,
	...otherProps
}: ArticlesPageProps) => {
	const { t } = useTranslation("articles");

	return (
		<div
			className={classNames(style.ArticlesPage, {}, [className])}
			{...otherProps}
		>
            <div>{t("Страница статей")}</div>
			{children}
		</div>
	);
};

export default memo(ArticlesPage);