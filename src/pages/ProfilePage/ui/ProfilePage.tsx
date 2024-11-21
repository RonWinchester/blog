import { classNames } from "shared/lib/classNames/classNames";
import style from "./ProfilePage.module.scss";
import { Page } from "widgets/Page";
import { EditableProfileCard } from "features/editableProfileCard";
import { useParams } from "react-router-dom";

interface ProfilePageProps {
	className?: string;
	children?: React.ReactNode;
}

const ProfilePage = ({
	className,
	children,
	...otherProps
}: ProfilePageProps) => {
	const { id } = useParams<{ id: string }>();

	return (
		<Page
			className={classNames(style.ProfilePage, {}, [className])}
			{...otherProps}
		>
			<EditableProfileCard id={id} />
			{children}
		</Page>
	);
};

export default ProfilePage;
