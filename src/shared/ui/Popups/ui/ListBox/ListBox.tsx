import { Fragment, ReactNode } from "react";
import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import { DropdownDirection } from "shared/types/ui";
import { Button } from "../../../Button/Button";
import style from "./ListBox.module.scss";
import { mapDirectionClass } from "../../styles/consts";
import popupCls from "../../styles/popup.module.scss";

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox(props: ListBoxProps) {
    const {
        className,
        items,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = "bottom-left",
        label,
    } = props;

    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <div className={classNames(style.wrapper, {}, [])}>
            {label && <span>{`${label}>`}</span>}
            <HListBox
                disabled={readonly}
                as="div"
                className={classNames(style.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                value={value}
                onChange={onChange}
            >
                <ListboxButton disabled={readonly} className={style.trigger}>
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </ListboxButton>
                <ListboxOptions
                    className={classNames(style.options, {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <ListboxOption
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ focus, selected }) => (
                                <li
                                    className={classNames(style.item, {
                                        [popupCls.active]: focus,
                                        [popupCls.disabled]: item.disabled,
                                        [popupCls.selected]: selected,
                                    })}
                                >
                                    {item.content}
                                </li>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </HListBox>
        </div>
    );
}
