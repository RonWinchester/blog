import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./Dropdown.module.scss";
import { Fragment, ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { AppLink } from "../AppLink/AppLink";

export interface DropdownItem {
    content: ReactNode;
    value?: string;
    disabled?: boolean;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    bottom: style.optionsBottom,
    top: style.optionsTop,
    "top-left": style.optionsTopLeft,
    "top-right": style.optionsTopRight,
    "bottom-left": style.optionsBottomLeft,
    "bottom-right": style.optionsBottomRight,
};

export function Dropdown({
    className,
    items,
    trigger,
    direction = "bottom",
}: DropdownProps) {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(style.Dropdown, {}, [className])}>
            <MenuButton className={style.btn}>{trigger}</MenuButton>
            <MenuItems className={classNames(style.menu, {}, optionsClasses)}>
                {items.map((item, idx) => {
                    const content = ({ focus }: { focus: boolean }) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(style.item, {
                                [style.focus]: focus,
                                [style.disabled]: item.disabled,
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <MenuItem
                                key={idx}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </MenuItem>
                        );
                    }

                    return (
                        <MenuItem
                            key={idx}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </MenuItem>
                    );
                })}
            </MenuItems>
        </Menu>
    );
}
