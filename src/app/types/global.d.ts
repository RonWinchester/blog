declare module "*.scss" {
	interface IClassNames {
		[className: string]: string;
	}
	const classnames: IClassNames;
	export = classnames;
}

declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
	export default content;
}
declare module "*.png";
declare module "*.jpeg";

declare const __IS__DEV__: boolean;
declare const __API__: string;
