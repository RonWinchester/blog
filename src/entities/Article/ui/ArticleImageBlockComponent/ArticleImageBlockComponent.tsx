import { classNames } from "shared/lib/classNames/classNames";
import style from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
 className?: string;
 children?: React.ReactNode;
}

export const ArticleImageBlockComponent = ({ className, children, ...otherProps }: ArticleImageBlockComponentProps) => {
 return (
  <div className={classNames(style.ArticleImageBlockComponent, {}, [className])} {...otherProps}>
    {children}
  </div>
 );
};