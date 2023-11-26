import { classNames } from "shared/lib/classNames/classNames";
import style from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
	className?: string;
	children?: React.ReactNode;
}

export const LangSwitcher = ({ className, children }: LangSwitcherProps) => {
	const { i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button
			className={classNames(style.langSwither, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{i18n.language}
			{children}
		</Button>
	);
};
