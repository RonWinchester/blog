import { classNames } from "shared/lib/classNames/classNames";
import style from "./Code.module.scss";
import { Button, ButtonTheme } from "../Button/Button";
import { CopyIcon } from "shared/assets/icons";
import { ArticleCodeBlock } from "entities/Article/model/types/article";

interface CodeProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const Code = ({ className, block, ...otherProps }: CodeProps) => {
	const copy = () => {
		navigator.clipboard.writeText(block.code);
	};
	return (
		<pre className={classNames(style.Code, {}, [className])} {...otherProps}>
			<Button onClick={copy} theme={ButtonTheme.CLEAR} className={style.copy}>
				<CopyIcon />
			</Button>
			<code>{block.code}</code>
		</pre>
	);
};
