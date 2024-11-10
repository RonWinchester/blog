import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleDetailsPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "widgets/Page";
import { articleDetailsPageReducer } from "../../model/slice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleRecommedationsList } from "features/articleRecommedationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";

interface ArticleDetailsPageProps {
	className?: string;
	children?: React.ReactNode;
}

const reducers: ReducerList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = ({
	className,
	...otherProps
}: ArticleDetailsPageProps) => {
	const { t } = useTranslation("articles");
	const { id } = useParams<{ id: string }>();


	return (
		<DynamicModuleLoader removeAfterUnmount reducers={reducers}>
			<Page
				className={classNames(style.ArticleDetailsPage, {}, [className])}
				{...otherProps}
			>
				{id ? (
					<>
						<ArticleDetailsPageHeader />
						<ArticleDetails id={id} />
						<ArticleRecommedationsList />
						<ArticleDetailsComments id={id} />
					</>
				) : (
					<div>{t("Статья не найдена")}</div>
				)}
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
