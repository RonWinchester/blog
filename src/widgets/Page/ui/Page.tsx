import { classNames } from "shared/lib/classNames/classNames";
import style from "./Page.module.scss";
import { MutableRefObject, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispach/useAppDispach";
import { getScrollByPath, scrollActions } from "features/scrollSave";
import { useLocation } from "react-router-dom";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";

interface PageProps {
	className?: string;
	children?: React.ReactNode;
	id?: string;
	onScrollEnd?: () => void;
}

export const Page = ({
	className,
	children,
	onScrollEnd,
	...otherProps
}: PageProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const location = useLocation();
	const scrollPosition = useSelector((state: StateSchema)=>getScrollByPath(state, location.pathname));

	const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
		dispatch(
			scrollActions.setScrollPosition({ path: location.pathname, position: e.currentTarget.scrollTop })
		);
	}, 500);

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		onScrollEnd,
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	})

	return (
		<section
			ref={wrapperRef}
			className={classNames(style.Page, {}, [className])}
			onScroll={onScroll}
			{...otherProps}
		>
			{children}
			<div ref={triggerRef}></div>
		</section>
	);
};
