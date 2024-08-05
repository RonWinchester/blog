import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, useMemo } from "react";
import style from "./Select.module.scss";

export interface SelectOption<T extends string> {
	value: T;
	content: string;
}

interface SelectProps<T extends string> {
	className?: string;
	label?: string;
	options?: SelectOption<T>[];
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const { className, label, options, onChange, value, readonly } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value as T);
		}
	};

	const optionsList = useMemo(
		() =>
			options?.map((opt) => (
				<option className={style.option} value={opt.value} key={opt.value}>
					{opt.content}
				</option>
			)),
		[options]
	);

	const mods: Mods = {
		[style.readonly]: readonly,
	};

	return (
		<div className={classNames(style.Wrapper, mods, [className])}>
			{label && <span className={style.label}>{`${label}:`}</span>}
			<select
				disabled={readonly}
				className={style.select}
				value={value}
				onChange={onChangeHandler}
			>
				{optionsList}
			</select>
		</div>
	);
};