import { Mods, classNames } from "shared/lib/classNames/classNames";
import style from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Avatar, PageLoader, Text } from "shared/ui";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/ProfileSchema";
import { TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country, CountrySelect } from "entities/Country";

interface ProfileCardProps {
	className?: string;
	children?: React.ReactNode;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstName: (value: string) => void;
	onChangeLastName: (value: string) => void;
	onChangeAge: (value: string) => void;
	onChangeCity: (value: string) => void;
	onChangeAvatar: (value: string) => void;
	onChangeUsername: (value: string) => void;
	onChangeCountry: (value: Country) => void;
	onChangeCurrency: (value: Currency) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeFirstName,
		onChangeLastName,
		onChangeAge,
		onChangeCity,
		onChangeAvatar,
		onChangeUsername,
		onChangeCountry,
		onChangeCurrency,
	} = props;
	const { t } = useTranslation("profile");

	if (error) {
		return (
			<div
				className={classNames(style.ProfileCard, {}, [className, style.error])}
			>
				<Text
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
					title={t("Произошла ошибка при загрузке профиля")}
					text={t("Попробуйте обновить страницу")}
				/>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div
				className={classNames(style.ProfileCard, {}, [
					className,
					style.loading,
				])}
			>
				<PageLoader />
			</div>
		);
	}

	const mods: Mods = {
		[style.editing]: !readonly,
	};

	return (
		<div className={classNames(style.ProfileCard, mods, [className])}>
			<div className={style.data}>
				{data?.avatar && (
					<div className={style.avatarWrapper}>
						<Avatar src={data.avatar} />
					</div>
				)}
				<Input
					value={data?.firstname}
					placeholder={t("Ваше имя")}
					className={style.input}
					onChange={onChangeFirstName}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t("Ваша фамилия")}
					className={style.input}
					onChange={onChangeLastName}
					readonly={readonly}
				/>
				<Input
					value={data?.age}
					placeholder={t("Ваш возраст")}
					className={style.input}
					onChange={onChangeAge}
					readonly={readonly}
				/>
				<Input
					value={data?.city}
					placeholder={t("Город")}
					className={style.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t("Введите имя пользователя")}
					className={style.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t("Введите ссылку на аватар")}
					className={style.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					className={style.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					className={style.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
