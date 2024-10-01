import s from './ArticlesBlock.module.scss'
import ArticleItem from './article-item/ArticleItem'
import articles from '../../../data/articles'

const ArticlesBlock = () => {
  return (
    <div className={s.articles}>  
      {articles.map(el => (
        <ArticleItem 
          key={el.id} 
          title={el.title}
          description={el.description}/>
        ))
      }
    </div> 
  )
}

export default ArticlesBlock