import { useCallback, useMemo, useState } from "react";

interface UseHoverBind {
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = () => {
	const [hovered, setHovered] = useState(false);

	const onMouseEnter = useCallback(() => setHovered(true), []);
	const onMouseLeave = useCallback(() => setHovered(false), []);

	return useMemo(
		(): UseHoverResult => [hovered, { onMouseEnter, onMouseLeave }],
		[hovered, onMouseEnter, onMouseLeave]
	);
};
