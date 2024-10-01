import s from './MainContent.module.scss'
import HowToWorks from './how-to-works/HowToWorks'
import BlockThree from './block-three/BlockThree'
import QuestionsBlock from './questions-block/QuestionsBlock'
import ArticlesBlock from './articles-block/ArticlesBlock'
import Form from './form/Form'

const MainContent = () => {
  return (
    <main className={s.page}>
      <HowToWorks />

      <BlockThree />

      <QuestionsBlock />

      <ArticlesBlock />

      <Form />
    </main>
  )
}

export default MainContent