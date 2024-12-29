import { Currency } from "entities/Currency/model/types/currency";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ListBox } from "shared/ui";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(function CurrencySelect({
    className,
    value,
    onChange,
    readonly,
}: CurrencySelectProps) {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames("", {}, [className])}
            label={t("Укажите валюту")}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />
    );
});
