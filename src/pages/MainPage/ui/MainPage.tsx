import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";
import { Page } from "widgets/Page";

const MainPage = () => {
    const { t } = useTranslation("main");
    return (
        <Page>
            {t("Главная")}
            <Counter />
        </Page>
    );
};

export default MainPage;
