import { rtkApi } from "shared/api/rtkApi";
import { NotificationsSchema } from "../model/types/NotificationsSchema";

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<NotificationsSchema[], null>({
            query: () => ({
                url: "/notifications",
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
