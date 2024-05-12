import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
 className?: string;
 children?: React.ReactNode;
}

export const ArticleTextBlockComponent = ({ className, children, ...otherProps }: ArticleTextBlockComponentProps) => {
 return (
  <div className={classNames(style.ArticleTextBlockComponent, {}, [className])} {...otherProps}>
    {children}
  </div>
 );
};