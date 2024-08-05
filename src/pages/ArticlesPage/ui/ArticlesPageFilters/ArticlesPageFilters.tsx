import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticlesPageFilters.module.scss";
import {
	ArticleSortField,
	ArticleSortSelector,
	ArticleTypeTabs,
	ArticleView,
	ArticleViewSelector,
} from "entities/Article";
import { articlePageActions } from "pages/ArticlesPage/modal/slice/artilcePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import {
	getArticlesPageOrder,
	getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageView,
	getArticlesType,
} from "pages/ArticlesPage/modal/selectors/articlesPageSelector";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Card, TabItem } from "shared/ui";
import { Input } from "shared/ui/Input/Input";
import { SortOrder } from "shared/types";
import { useCallback } from "react";
import { fetchArticlesList } from "pages/ArticlesPage/modal/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";

interface ArticlesPageFiltersProps {
	className?: string;
}

const ArticlesPageFilters = ({
	className,
	...otherProps
}: ArticlesPageFiltersProps) => {
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const search = useSelector(getArticlesPageSearch);
	const order = useSelector(getArticlesPageOrder);
	const sort = useSelector(getArticlesPageSort);
	const type = useSelector(getArticlesType);
	const { t } = useTranslation();

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debounceFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlePageActions.setView(view));
		},
		[dispatch]
	);

	const onChangeSort = useCallback(
		(sort: ArticleSortField) => {
			dispatch(articlePageActions.setSort(sort));
			dispatch(articlePageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
	);

	const onChangeOrder = useCallback(
		(order: SortOrder) => {
			dispatch(articlePageActions.setOrder(order));
			dispatch(articlePageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
	);

	const onChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlePageActions.setSearch(search));
			dispatch(articlePageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
	);

	const onChangeType = useCallback(
		(tab: TabItem) => {
			dispatch(articlePageActions.setType(tab.value));
			dispatch(articlePageActions.setPage(1));
			fetchData();
		},
		[dispatch, fetchData]
	);

	return (
		<div
			className={classNames(style.ArticlesPageFilters, {}, [className])}
			{...otherProps}
		>
			<div>
				<ArticleSortSelector
					{...{ order, sort, onChangeOrder, onChangeSort }}
				/>
				<ArticleViewSelector view={view} onViewClick={onChangeView} />
			</div>
			<Card className={style.search}>
				<Input
					placeholder={t("Поиск")}
					value={search || ""}
					onChange={onChangeSearch}
				/>
			</Card>
			<ArticleTypeTabs value={type} onChangeType={onChangeType} />
		</div>
	);
};

export default ArticlesPageFilters;
