import { memo, useMemo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleTypeTabs.module.scss";
import { TabItem, Tabs } from "shared/ui";
import { ArticleType } from "entities/Article/model/types/article";
import { useTranslation } from "react-i18next";

interface ArticleTypeTabsProps {
    className?: string;
    children?: React.ReactNode;
    onChangeType: (tab: TabItem) => void;
    value: ArticleType;
}

export const ArticleTypeTabs = memo(
    ({ className, onChangeType, value }: ArticleTypeTabsProps) => {
        const { t } = useTranslation();
        const typeTabs = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t("Все статьи"),
                },
                {
                    value: ArticleType.IT,
                    content: t("Технологии"),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t("Наука"),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t("Экономика"),
                },
            ],
            [t],
        );
        return (
            <Tabs
                className={classNames(style.ArticleTypeTabs, {}, [className])}
                tabs={typeTabs}
                value={value}
                onTabClick={onChangeType}
            />
        );
    },
);
