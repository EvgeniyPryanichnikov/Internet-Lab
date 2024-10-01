import s from './ArticleItem.module.scss'

const ArticleItem = ({ title, description }) => {
  return (
    <article className={s.article}>
      <h3 className={s.title}>
        {title}
      </h3>

      <p className={s.description}>
        {description}
      </p>
    </article>
  )
}

export default ArticleItem