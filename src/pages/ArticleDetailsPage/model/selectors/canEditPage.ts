import { createSelector } from "@reduxjs/toolkit";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { getUserAuth } from "entities/User";

const canEditPage = createSelector(
    getUserAuth,
    getArticleDetailsData,
    (user, article) => {
        if (!user || !article) {
            return false;
        }
        return user.id === article.user.id;
    },
);

export { canEditPage };
