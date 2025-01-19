import { memo, useCallback, useEffect } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import style from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import useTheme from "shared/config/theme/useTheme";
import { Overlay } from "../Overlay/Overlay";

// import { useDrag } from "@use-gesture/react";
// import { a, useSpring, config } from "@react-spring/web";
import { useAnimationModules } from "shared/lib/components/AnimationProvider";

interface DrawerProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo(
    ({ className, children, isOpen, onClose }: DrawerProps) => {
        const portalElement = document.getElementById("app") as HTMLElement;
        const { theme } = useTheme();
        const { Gesture, Spring } = useAnimationModules();
        const [{ y }, api] = Spring.useSpring(() => ({ y: height }));
        const mods: Mods = {
            [style.opened]: isOpen,
        };

        const openDrawer = useCallback(() => {
            api.start({ y: 0, immediate: false });
        }, [api]);

        useEffect(() => {
            if (isOpen) {
                openDrawer();
            }
        }, [api, isOpen, openDrawer]);
        const close = (velocity = 0) => {
            api.start({
                y: height,
                immediate: false,
                config: { ...Spring.config.stiff, velocity },
                onResolve: onClose,
            });
        };

        const bind = Gesture.useDrag(
            ({
                last,
                velocity: [, vy],
                direction: [, dy],
                movement: [, my],
                cancel,
            }) => {
                if (my < -70) cancel();

                if (last) {
                    if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                        close();
                    } else {
                        openDrawer();
                    }
                } else {
                    api.start({ y: my, immediate: false });
                }
            },
            {
                from: () => [0, y.get()],
                filterTaps: true,
                bounds: { top: 0 },
                rubberband: true,
            },
        );

        if (!isOpen) {
            return null;
        }

        const display = y.to((py) => (py < height ? "block" : "none"));

        return (
            <Portal element={portalElement || document.body}>
                <div
                    className={classNames(style.Drawer, mods, [
                        className,
                        theme,
                    ])}
                >
                    <Overlay onClick={onClose} />
                    <Spring.a.div
                        className={style.content}
                        style={{
                            display,
                            bottom: `calc(-100vh + ${height + 100}px)`,
                            y,
                        }}
                        {...bind()}
                    >
                        {children}
                    </Spring.a.div>
                </div>
            </Portal>
        );
    },
);

export const Drawer = memo((props: DrawerProps) => {
    const { isLoaded } = useAnimationModules();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props} />;
});
