import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import style from "./PageError.module.scss";

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(style["page-error"], {}, [className])}>
            <p>{t("Извините, произошла непредвиденная ошибка")}</p>
            <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
};
