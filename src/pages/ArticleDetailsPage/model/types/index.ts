import { ArticleDetailsCommentSchema } from "./ArticleDetailsCommentSchema";
import { ArticleDetailsRecommendationSchema } from "./ArticleDetailsRecommendation";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema;
    recommendations: ArticleDetailsRecommendationSchema;
}