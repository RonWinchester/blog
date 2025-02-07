import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ErrorPage.module.scss";
import { Page } from "widgets/Page";

function ErrorPage() {
    const { t } = useTranslation("error");
    return (
        <Page className={classNames(style["error-page"])} id="error-page">
            <h1>{t("Упс!")}</h1>
            <p>{t("Извините, произошла непредвиденная ошибка")}.</p>
            <p>
                <i>{t("Ошибка")}</i>
            </p>
        </Page>
    );
}

export default ErrorPage;
