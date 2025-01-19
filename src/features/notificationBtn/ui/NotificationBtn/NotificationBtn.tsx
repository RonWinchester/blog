import { memo, useState } from "react";
import { Popover } from "shared/ui";
import { Notifications } from "entities/Notifications";
import { NotificationIcon } from "shared/assets/icons";
import { Drawer } from "shared/ui/Drawer/Drawer";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";
import style from "./NotificationBtn.module.scss";
import { useMediaQuery } from "shared/lib/hooks/useMediaQuery/useMediaQuery";
import { AnimationProvider } from "shared/lib/components/AnimationProvider";

export const NotificationBtn = memo(() => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 1024px)");
    const onDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const onDrawerClose = () => {
        setOpenDrawer(false);
    };
    return (
        <>
            {!isDesktop && (
                <>
                    <Button onClick={onDrawerOpen} theme={ButtonTheme.CLEAR}>
                        <NotificationIcon />
                    </Button>
                    <AnimationProvider>
                        <Drawer onClose={onDrawerClose} isOpen={openDrawer}>
                            <Notifications />
                        </Drawer>
                    </AnimationProvider>
                </>
            )}
            {isDesktop && (
                <Popover trigger={<NotificationIcon />}>
                    <Notifications className={style.popover} />
                </Popover>
            )}
        </>
    );
});
