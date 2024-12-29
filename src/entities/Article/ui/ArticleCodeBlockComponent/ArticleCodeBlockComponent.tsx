import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleCodeBlockComponent.module.scss";
import { memo } from "react";
import { ArticleCodeBlock } from "entities/Article/model/types/article";
import { Code } from "shared/ui";

interface ArticleCodeBlockComponentProps {
    className?: string;
    children?: React.ReactNode;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    ({
        className,
        children,
        block,
        ...otherProps
    }: ArticleCodeBlockComponentProps) => {
        return (
            <div
                className={classNames(style.ArticleCodeBlockComponent, {}, [
                    className,
                ])}
                {...otherProps}
            >
                <Code block={block} />
                {children}
            </div>
        );
    },
);
