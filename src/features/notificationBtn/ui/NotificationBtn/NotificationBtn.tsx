import { memo } from "react";
import { Popover } from "shared/ui";
import { Notifications } from "entities/Notifications";
import { NotificationIcon } from "shared/assets/icons";

export const NotificationBtn = memo(() => {
    return (
        <Popover trigger={<NotificationIcon />}>
            <Notifications />
        </Popover>
    );
});
