import { StateSchema } from "app/providers/StoreProvider";

export const getProfileFormdata = (state: StateSchema) => state.profile?.formData;
