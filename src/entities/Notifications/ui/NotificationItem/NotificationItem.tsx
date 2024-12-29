import { classNames } from "shared/lib/classNames/classNames";
import style from "./NotificationItem.module.scss";
import { memo } from "react";
import { NotificationsSchema } from "../../model/types/NotificationsSchema";
import { AppLink, Card, Text } from "shared/ui";

interface NotificationsProps {
    className?: string;
    notification: NotificationsSchema;
}

export const NotificationItem = memo((props: NotificationsProps) => {
    const { className, notification } = props;

    if (notification.href) {
        return (
            <AppLink to={notification.href} className={style.link}>
                <Card
                    className={classNames(style.Notification, {}, [className])}
                >
                    <Text text={notification.text} />
                </Card>
            </AppLink>
        );
    }

    return (
        <Card className={classNames(style.Notification, {}, [className])}>
            <Text text={notification.text} />
        </Card>
    );
});
