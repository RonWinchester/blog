import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticlesPageFilters.module.scss";
import {
	ArticleSortField,
	ArticleSortSelector,
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
} from "pages/ArticlesPage/modal/selectors/articlesPageSelector";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui";
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
	const { t } = useTranslation();

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debounceFetchData = useDebounce(fetchData, 500)

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
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
	);

	const onChangeOrder = useCallback(
		(order: SortOrder) => {
			dispatch(articlePageActions.setOrder(order));
			dispatch(articlePageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
	);

	const onChangeSearch = useCallback(
		(search: string) => {
			dispatch(articlePageActions.setSearch(search));
			dispatch(articlePageActions.setPage(1));
			debounceFetchData();
		},
		[dispatch, debounceFetchData]
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
		</div>
	);
};

export default ArticlesPageFilters;
