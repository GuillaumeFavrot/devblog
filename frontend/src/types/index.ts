/* istanbul ignore file */

// Article types

export interface AbstractArticle {
    id: number
    title: string
    tags: Tag[]
    abstract: string
}

export interface Article {
    title: string
    content: string
    header_image: string
    user: string
    created_at: string
    updated_at: string
}

export interface AbstractArticles {
    articles: AbstractArticle[]
    page: number
    total_pages: number
}
export interface ArticleCardProp {
    article: AbstractArticle
}

export interface ArticlesRequest {
    page: number;
    lang: string;
}

export interface ArticleRequest {
    id: number;
    lang: string;
}


// Tag types

export interface Tag {
    icon: string,
    path: string,
    name: string,
    background_color: string
    text_color: string
}

export type Tags = Tag[]

export interface TagsListProp {
    tags: Tags
}

export interface TagComponentProp {
    tag: Tag
}

// Button types

export interface ButtonParams {
    content : string | React.JSX.Element
    visible?: boolean
    onClickFunction?: Function
    ariaLabel?: string
    text_color?: string
    background_color?: string
}

export interface ButtonProps {
    buttonParams: ButtonParams
}

// View payload

export interface viewPayload {
    page?: string
    language?: string
    dark?: boolean
    articlePage?: number
    articleTotalPages?: number
    articleId?: number
}
