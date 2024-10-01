import React, { useState }  from "react"
import { ReactComponent as CheckIcon } from '../../../../icons/check.svg'
import { ReactComponent as CancelIcon } from '../../../../icons/cancel.svg'
import s from './NameInput.module.scss'

const NameInput = ({label, handleNameInput}) => {
  const [input, setInput] = useState('')
  const [inputDirty, setInputDirty] = useState(false)
  const [inputError, setInputError] = useState('* Это обязательное поле')

  const blurHandler = () => {
    if (input) {
      setInputDirty(false)
    } else {
      setInputDirty(true)
      setInputError('* Это обязательное поле')
    }
  }

  function onInputChange(e) {
		setInput(e.target.value)
    const re = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i

    if (!re.test(String(e.target.value).toLowerCase())) {
      setInputDirty(true)
      setInputError('Не корректный ввод')
    } else {
      setInputDirty(false)
      setInputError('')
    } 
	}
  return (
    <>
			<div className={s.nameInput} >
        <div className={s.inputContainer + ((inputDirty && inputError)  ? ' ' + s.errorBorder : '')}>
          <input 
            className={s.input}
            onBlur={() => blurHandler()}
            value={input}
            placeholder="Имя"
            onChange={e => onInputChange(e)}
            type="text" 
          />

          {inputDirty && inputError ? <CancelIcon className={s.icon} /> : !inputDirty && !inputError ? <CheckIcon className={s.icon}/> : null}
        </div>

        {(inputDirty && inputError) && <div className={s.error}>{inputError}</div>} 
      </div>
		</>
  )
}

export default NameInput