import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextPayload {
    Spring?: SpringType;
    Gesture?: GestureType;
    isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = async () => {
    return Promise.all([
        await import("@react-spring/web"),
        await import("@use-gesture/react"),
    ]);
};

export const AnimationProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        });
    }, []);

    const value = useMemo(() => {
        return {
            Gesture: GestureRef.current,
            Spring: SpringRef.current,
            isLoaded,
        };
    }, [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimationModules = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
};
