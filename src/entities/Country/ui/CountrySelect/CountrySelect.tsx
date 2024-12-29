import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Country } from "entities/Country/model/types/country";
import { ListBox } from "shared/ui";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.RU, content: Country.RU },
    { value: Country.USA, content: Country.USA },
    { value: Country.BY, content: Country.BY },
];

export const CountrySelect = memo(function CountrySelect({
    className,
    value,
    onChange,
    readonly,
}: CountrySelectProps) {
    const { t } = useTranslation("profile");

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

    return (
        <ListBox
            className={classNames("", {}, [className])}
            label={t("Укажите страну")}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction="top"
        />
    );
});
