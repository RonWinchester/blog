import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import style from "./AdminPanelPage.module.scss";
import { memo } from "react";
import { Text } from "shared/ui";
import { Page } from "widgets/Page";

interface AdminPanelPageProps {
    className?: string;
    children?: React.ReactNode;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className, children } = props;
    const { t } = useTranslation("admin");

    return (
        <Page className={classNames(style.AdminPanelPage, {}, [className])}>
            <Text text={t("Админ панель")} />
            {children}
        </Page>
    );
});

export default AdminPanelPage;
