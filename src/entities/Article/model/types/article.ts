export enum ArticleBlockType {
	IMAGE = "IMAGE",
	CODE = "CODE",
	TEXT = "TEXT",
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	paragraphs: string[];
	title?: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title?: string;
}

export type ArticleBlock =
	| ArticleTextBlock
	| ArticleCodeBlock
	| ArticleImageBlock;

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	updatedAt: string;
	userId: string;
	type: string[];
	blocks: ArticleBlock[];
}
