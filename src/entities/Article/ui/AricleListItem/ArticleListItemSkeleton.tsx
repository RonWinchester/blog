import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleListItem.module.scss";
import { ArticleView } from "entities/Article";
import { Card, Skeleton } from "shared/ui";

interface ArticleListItemSkeletonProps {
    className?: string;
    children?: React.ReactNode;
    view: ArticleView;
}

const SkeletonListArticle = () => {
    return (
        <>
            <div className={style.header}>
                <Skeleton width={32} height={32} borderRadius="50%" />
                <Skeleton width={30} height={16} borderRadius="8px" />
                <Skeleton width={20} height={16} borderRadius="8px" />
            </div>
            <Skeleton width={100} height={16} className={style.title} />
            <div className={style.infoWrapper}>
                <Skeleton className={style.type} width={170} height={16} />
                <div className={style.views}>
                    <Skeleton width={16} height={16} />
                    <Skeleton width={16} height={16} />
                </div>
            </div>
            <Skeleton
                width="100%"
                height={200}
                borderRadius={8}
                className={style.img}
            />
            <Skeleton width="100%" height={100} className={style.textBlock} />
            <div className={style.footer}>
                <Skeleton width={100} height={30} />
            </div>
        </>
    );
};

const SkeletonGridArticle = () => {
    return (
        <>
            <Skeleton className={style.imageWrapper} width={250} height={200}>
                <Skeleton className={style.img} width={250} height={200} />
            </Skeleton>
            <div className={style.infoWrapper}>
                <Skeleton className={style.type} width={170} height={16} />
                <div className={style.views}>
                    <Skeleton width={16} height={16} />
                    <Skeleton width={16} height={16} />
                </div>
            </div>
            <Skeleton width={70} height={16} className={style.title} />
        </>
    );
};

export const ArticleListItemSkeleton = ({
    className,
    children,
    view,
    ...otherProps
}: ArticleListItemSkeletonProps) => {
    return (
        <div
            className={classNames(style.AricleListItem, {}, [
                className,
                style[view],
            ])}
            {...otherProps}
        >
            <Card className={style.card}>
                {view === ArticleView.GRID ? (
                    <SkeletonGridArticle />
                ) : (
                    <SkeletonListArticle />
                )}
            </Card>
            {children}
        </div>
    );
};
