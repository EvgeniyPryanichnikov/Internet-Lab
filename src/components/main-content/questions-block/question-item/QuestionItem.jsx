import { useState } from 'react'
import s from './QuestionItem.module.scss'
import { ReactComponent as CloseIcon } from '../../../../icons/close.svg'
import { ReactComponent as OpenIcon } from '../../../../icons/open.svg'

const QuestionItem = ({ answer, question }) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false)
  const handleShowAnswer = (e) => {
    e.stopPropagation()
    setIsShowAnswer(prev =>!prev)
  }

  return (
    <div className={s.item} onClick={(e) => handleShowAnswer(e)}>
      <div className={s.questionContainer}>
        <div className={s.text}>
          {question}
        </div>

        {!isShowAnswer ? <OpenIcon onClick={(e) => handleShowAnswer(e)} /> : <CloseIcon onClick={(e) => handleShowAnswer(e)} />}
      </div>

      {isShowAnswer && <div className={s.answer}>
        {answer}
      </div>}
    </div>
  )
}

export default QuestionItem