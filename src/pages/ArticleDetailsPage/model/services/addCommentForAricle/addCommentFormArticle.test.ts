import { CommentItem } from "entities/Comment";
import { addCommentFormArticle } from "./addCommentFormArticle";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { getUserAuth } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";

jest.mock("axios");
jest.mock("entities/User");
jest.mock("entities/Article/model/selectors/articleDetails");

describe("addCommentFormArticle.test", () => {
    const data: CommentItem = {
        id: "1",
        text: "text",
        user: {
            id: "1",
            username: "user",
        },
    };
    beforeEach(() => {
        (getUserAuth as jest.Mock).mockReturnValue({ id: "1" });
        (getArticleDetailsData as jest.Mock).mockReturnValue({ id: "1" });
    });
    test("addCommentFormArticle", async () => {
        const thunk = new TestAsyncThunk(addCommentFormArticle);
        thunk.api.post.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk("text");
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("addCommentFormArticle with error", async () => {
        const thunk = new TestAsyncThunk(addCommentFormArticle, {
            addCommentForm: {
                text: "",
                error: "error",
            },
        });

        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk("text");
        expect(result.meta.requestStatus).toBe("rejected");
    });
});
