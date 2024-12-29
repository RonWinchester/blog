import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleSortSelector.module.scss";
import { useTranslation } from "react-i18next";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { memo, useMemo } from "react";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortOrder } from "shared/types";

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeOrder: (newOrder: SortOrder) => void;
}

export const ArticleSortSelector = memo(
    ({
        className,
        onChangeSort,
        onChangeOrder,
        sort,
        order,
        ...otherProps
    }: ArticleSortSelectorProps) => {
        const { t } = useTranslation();

        const orderOptions = useMemo<SelectOption<SortOrder>[]>(
            () => [
                { value: "asc", content: t("Возрастанию") },
                { value: "desc", content: t("Убыванию") },
            ],
            [t],
        );

        const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
            () => [
                { value: ArticleSortField.TITLE, content: t("Название") },
                { value: ArticleSortField.CREATED_AT, content: t("Дата") },
                { value: ArticleSortField.VIEWS, content: t("Просмотры") },
            ],
            [t],
        );

        return (
            <div
                className={classNames(style.ArticleSortSelector, {}, [
                    className,
                ])}
                {...otherProps}
            >
                <Select
                    label={t("Сортировать по")}
                    options={sortFieldOptions}
                    value={sort}
                    onChange={onChangeSort}
                />
                <Select
                    label={t("По")}
                    options={orderOptions}
                    value={order}
                    onChange={onChangeOrder}
                />
            </div>
        );
    },
);
