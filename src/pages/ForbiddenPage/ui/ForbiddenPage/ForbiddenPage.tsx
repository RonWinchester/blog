import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import style from "./ForbiddenPage.module.scss";
import { memo } from "react";
import { Text } from "shared/ui";
import { Page } from "widgets/Page";

interface ForbiddenPageProps {
	className?: string;
	children?: React.ReactNode;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
	const { className } = props;
	const { t } = useTranslation("forbidden");

	return (
		<Page className={classNames(style.ForbiddenPage, {}, [className])}>
			<Text text={t("Доступ запрещен")} />
		</Page>
	);
});

export default ForbiddenPage;
