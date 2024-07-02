import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import {
	ArticleList,
	ArticleView,
	ArticleViewSelector,
} from "entities/Article";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
	articlePageActions,
	articlePageReducer,
	getArticles,
} from "../modal/slice/artilcePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchArticlesList } from "../modal/services/fetchArticlesList";
import { useSelector } from "react-redux";
import {
	getArticleListError,
	getArticlesListIsLoading,
	getArticlesListView,
} from "../modal/selectors/articlesList";
import { Text } from "shared/ui";

interface ArticlesPageProps {
	className?: string;
	children?: React.ReactNode;
}

const reducers: ReducerList = {
	articlesPage: articlePageReducer,
};

const ArticlesPage = ({
	className,
	children,
	...otherProps
}: ArticlesPageProps) => {
	const { t } = useTranslation("articles");
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesListIsLoading);
	const error = useSelector(getArticleListError);
	const view = useSelector(getArticlesListView);

	const onChangeView = (view: ArticleView) => {
		dispatch(articlePageActions.setView(view));
	};

	useInitialEffect(() => {
		dispatch(fetchArticlesList());
		dispatch(articlePageActions.initState);
	});
	return (
		<DynamicModuleLoader removeAfterUnmount reducers={reducers}>
			<div
				className={classNames(style.ArticlesPage, {}, [className])}
				{...otherProps}
			>
				<Text title={t("Статьи")} />
				<div>
					<ArticleViewSelector view={view} onViewClick={onChangeView} />
					<ArticleList {...{ articles, isLoading, view, error }} />
				</div>
				{children}
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
