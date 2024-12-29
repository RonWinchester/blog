import { classNames } from "shared/lib/classNames/classNames";
import style from "./Notifications.module.scss";
import { memo } from "react";
import { useNotifications } from "../../api/notificationsApi";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "shared/ui";

interface NotificationsProps {
    className?: string;
}

export const Notifications = memo((props: NotificationsProps) => {
    const { className } = props;

    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return <div className={classNames(style.Notifications, {}, [className])}>
            <Skeleton width={"100%"} borderRadius={"8px"} height={"80px"} />
            <Skeleton width={"100%"} borderRadius={"8px"} height={"80px"} />
            <Skeleton width={"100%"} borderRadius={"8px"} height={"80px"} />
        </div>
    }

    return (
        <div className={classNames(style.Notifications, {}, [className])}>
            {data?.map((notification) => (
                <NotificationItem key={notification.id} notification={notification} />
            ))}
        </div>
    );
});
