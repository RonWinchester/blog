import { useTranslation } from "react-i18next";

function ErrorPage() {
	const {t} = useTranslation("error")
	return (
		<div id="error-page">
			<h1>{t("Упс!")}</h1>
			<p>{t("Извините, произошла непредвиденная ошибка")}.</p>
			<p>
				<i>{t("Ошибка")}</i>
			</p>
		</div>
	);
}

export default ErrorPage;