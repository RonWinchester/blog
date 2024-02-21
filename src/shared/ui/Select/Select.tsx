import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ChangeEvent, memo, useMemo } from "react";
import style from "./Select.module.scss";

export interface SelectOption {
	value: string;
	content: string;
}

interface SelectProps {
	className?: string;
	label?: string;
	options?: SelectOption[];
	value?: string;
	onChange?: (value: string) => void;
	readonly?: boolean;
}

export const Select = memo(function Select (props: SelectProps) {
	const { className, label, options, onChange, value, readonly } = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value);
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
});