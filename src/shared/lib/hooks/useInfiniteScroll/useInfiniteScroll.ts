import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
	onScrollEnd?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef?: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = ({
	onScrollEnd,
	triggerRef,
	wrapperRef,
}: UseInfiniteScrollOptions) => {
	useEffect(() => {
		if (!onScrollEnd) return;

		const trigger = triggerRef?.current;
		const wrapper = wrapperRef?.current;

		const options = {
			root: wrapper,
			rootMargin: "0px",
			threshold: 1.0,
		};

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				onScrollEnd();
			}
		}, options);

		observer.observe(trigger);

		return () => {
			if (observer && trigger) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(trigger);
			}
		};
	}, [onScrollEnd, triggerRef, wrapperRef]);
};
