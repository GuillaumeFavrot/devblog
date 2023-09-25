import React from 'react';
import TagsList from '../tagsList';
import { ArticleCardProp } from '../../../types';
import { useAppDispatch } from '../../../hooks';
import { updateArticleId, updatePage } from '../../../state/features/view';

export default function ArticleCardComponent({ article }: ArticleCardProp) {
	//Disptach setup
    const dispatch = useAppDispatch()

	const getArticle = () => {
		dispatch(updateArticleId({articleId: article.id}))
		dispatch(updatePage({page: 'article'}))
	}

	return (
		<div onClick={() => getArticle()} className='article-card-container' aria-label="article" >
			<h3 className='article-card-title' aria-label="article-title">{article.title}</h3>
			<p className='article-card-content' aria-label="article-content">{article.abstract}</p>
			<TagsList tags={article.tags} />
		</div>
		
	)
}