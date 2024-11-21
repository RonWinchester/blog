import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
	DynamicModuleLoader,
	ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
	articlePageReducer,
} from "../../modal/slice/artilcePageSlice";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { Text } from "shared/ui";
import { fetchNextArticlePage } from "../../modal/services/fetchNextArticlePage/fetchNextArticlePage";
import { Page } from "widgets/Page";
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";

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

	const onLoadMore = useCallback(() => {
		dispatch(fetchNextArticlePage());
	}, [dispatch]);

	return (
		<DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
			<Page
				onScrollEnd={onLoadMore}
				className={classNames(style.ArticlesPage, {}, [className])}
				{...otherProps}
			>
				<Text title={t("Статьи")} />
				<div className={style.wrapper}>
					<ArticlesPageFilters />
					<ArticleInfiniteList />
				</div>
				{children}
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
