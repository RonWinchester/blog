import { classNames } from "shared/lib/classNames/classNames";
import style from "./PageLoader.module.scss";

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(style["page-loader"], {}, [className])}>
			<div className={classNames(style.loader)}></div>
		</div>
	);
};
