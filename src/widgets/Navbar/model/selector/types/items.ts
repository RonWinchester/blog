export interface ConfigNavbarItems {
    text: string;
    path: string;
    icon: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    authOnly?: boolean;
}
