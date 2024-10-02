import s from './QuestionsBlock.module.scss'
import QuestionItem from './question-item/QuestionItem'
import questions from '../../../data/questions'

const QuestionsBlock = () => {
  return (
    <section className={s.questionsList} id='questions'>
      <h2 className={s.title}>
        Вопросы и ответы
      </h2>

      <div className={s.questions}>
        {questions.map(q => (
          <QuestionItem 
            key={q.id} 
            question={q.question}
            answer={q.answer}/>
          ))
        }
      </div>
    </section>
  )
}

export default QuestionsBlock