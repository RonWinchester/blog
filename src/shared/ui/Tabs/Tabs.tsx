import { memo, ReactNode, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Tabs.module.scss";
import { Card, CardTheme } from "..";
import { ArticleType } from "entities/Article/model/types/article";

export interface TabItem {
	value: ArticleType;
	content: ReactNode;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	value: string;
	onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(
	({ className, tabs, value, onTabClick, ...otherProps }: TabsProps) => {
		const onClickHandle = useCallback(
			(tab: TabItem) => () => onTabClick(tab),
			[onTabClick]
		);

		return (
			<div className={classNames(style.Tabs, {}, [className])} {...otherProps}>
				{tabs.map((tab) => (
					<Card
						onClick={onClickHandle(tab)}
						key={tab.value}
						className={classNames(style.tab, {})}
						theme={tab.value === value ? CardTheme.DEFAULT : CardTheme.OUTLINED}
					>
						{tab.content}
					</Card>
				))}
			</div>
		);
	}
);
