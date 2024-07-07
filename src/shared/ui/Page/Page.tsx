import { classNames } from "shared/lib/classNames/classNames";
import style from "./Page.module.scss";
import { MutableRefObject, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

interface PageProps {
	className?: string;
	children?: React.ReactNode;
	id?: string;
	onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd, ...otherProps }: PageProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		onScrollEnd,
	});
	return (
		<section
			ref={wrapperRef}
			className={classNames(style.Page, {}, [className])}
			{...otherProps}
		>
			{children}
			<div ref={triggerRef}></div>
		</section>
	);
};
