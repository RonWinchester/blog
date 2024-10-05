import { Fragment, ReactNode } from "react";
import {
	Listbox as HListBox,
	ListboxButton,
	ListboxOptions,
	ListboxOption,
} from "@headlessui/react";
import { classNames } from "shared/lib/classNames/classNames";
import style from "./ListBox.module.scss";

export interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

type DropdownDirection = "top" | "bottom";

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

const mapDirectionClass: Record<DropdownDirection, string> = {
	bottom: style.optionsBottom,
	top: style.optionsTop,
};

export function ListBox(props: ListBoxProps) {
	const {
		className,
		items,
		value,
		defaultValue,
		onChange,
		readonly,
		direction = "bottom",
		label,
	} = props;

	const optionsClasses = [mapDirectionClass[direction]];

	return (
		<div className={classNames(style.wrapper, {}, [])}>
			{label && <span>{`${label}`}</span>}
			<HListBox
				disabled={readonly}
				as="div"
				className={classNames(style.ListBox, {}, [className])}
				value={value}
				onChange={onChange}
			>
				<ListboxButton disabled={readonly} className={style.trigger}>
					{value ?? defaultValue}
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
										[style.focus]: focus,
										[style.disabled]: item.disabled,
										[style.selected]: selected,
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
