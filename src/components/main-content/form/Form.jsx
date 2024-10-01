import s from './Form.module.scss'
import NameInput from './text-input/NameInput'

const Form = () => {
  return (
    <form className={s.form}>
      <h2 className={s.title}>
        Отправь форму
      </h2>

      <NameInput label={'Имя'}/>
    </form>
  )
}

export default Form