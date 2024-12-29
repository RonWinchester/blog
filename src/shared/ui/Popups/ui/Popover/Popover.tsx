import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { ReactNode } from 'react';
import { mapDirectionClass } from '../../styles/consts';
import style from './Popover.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className, trigger, direction = 'bottom-left', children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            className={classNames(style.Popover, {}, [className, popupCls.popup])}
        >
            <PopoverButton className={popupCls.trigger}>
                {trigger}
            </PopoverButton>

            <PopoverPanel
                className={classNames(style.panel, {}, menuClasses)}
            >
                {children}
            </PopoverPanel>
        </HPopover>
    );
}
