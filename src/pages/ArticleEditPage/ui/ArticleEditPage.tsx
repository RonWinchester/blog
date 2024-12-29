import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page";
const ArticleEditPage = () => {
    const { t } = useTranslation("articles");
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <>
            <Page>
                {isEdit ? t("Редактирование статьи") : t("Создание статьи")}
            </Page>
        </>
    );
};

export default ArticleEditPage;
