import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { UserRoles } from "../types/userSchema";

const getUserRole = (state: StateSchema) => state.user.authData?.role;

const isAdmin = createSelector(getUserRole, (roles) =>
    Boolean(roles?.includes(UserRoles.ADMIN)),
);
const isModerator = createSelector(getUserRole, (roles) =>
    Boolean(roles?.includes(UserRoles.MODERATOR)),
);

export { isAdmin, isModerator };
