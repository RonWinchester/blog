import { User } from "entities/User";

export enum ArticleSortField {
	VIEWS = "views",
	TITLE = "title",
	CREATED_AT = "createdAt",
}

export enum ArticleBlockType {
	IMAGE = "IMAGE",
	CODE = "CODE",
	TEXT = "TEXT",
}

export enum ArticleView {
	LIST = "LIST",
	GRID = "GRID",
}

export enum ArticleType {
	ALL = "ALL",
	IT = "IT",
	SCIENCE = "SCIENCE",
	ECONOMICS = "ECONOMICS",
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
	user: User;
	type: ArticleType[];
	blocks: ArticleBlock[];
}
