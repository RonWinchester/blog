import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleViewSelector.module.scss";
import { ArticleView } from "entities/Article/model/types/article";
import { ListIcon, GridIcon } from "shared/assets/icons";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";

interface ArticleViewSelectorProps {
    className?: string;
    children?: React.ReactNode;
    view?: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    { view: ArticleView.LIST, Icon: ListIcon },
    { view: ArticleView.GRID, Icon: GridIcon },
];

export const ArticleViewSelector = ({
    className,
    children,
    view,
    onViewClick,
    ...otherProps
}: ArticleViewSelectorProps) => {
    return (
        <div
            className={classNames(style.ArticleViewSelector, {}, [className])}
            {...otherProps}
        >
            {viewTypes.map((viewType, index) => {
                const { Icon } = viewType;
                return (
                    <Button
                        key={index}
                        onClick={() => onViewClick(viewType.view)}
                        theme={ButtonTheme.CLEAR}
                        className={classNames("", {
                            [style.active]: viewType.view === view,
                        })}
                    >
                        <Icon />
                    </Button>
                );
            })}
            {children}
        </div>
    );
};
