import React, { useState }  from "react"
import { useSelector } from "react-redux"
import { ReactComponent as CheckIcon } from '../../../../icons/check.svg'
import { ReactComponent as CancelIcon } from '../../../../icons/cancel.svg'
import s from './NameInput.module.scss'

const NameInput = ({label, handleNameInput}) => {
  const { name } = useSelector((state => state.formData))

  const [input, setInput] = useState('')
  const [inputDirty, setInputDirty] = useState(false)
  const [inputError, setInputError] = useState('это обязательное поле')

  const blurHandler = () => {
    if (input) {
      setInputDirty(false)
    } else {
      // setInputDirty(true)
      // setInputError('* Это обязательное поле')
    }
  }

  function onInputChange(e) {
		setInput(e.target.value)
    const re = /^[а-яё]+(?:[ -]{1}[а-яё]*)?$/i

    if (!re.test(String(e.target.value).toLowerCase())) {
      setInputDirty(true)
      setInputError('не корректный ввод')
    } else {
      setInputDirty(false)
      setInputError('')
      handleNameInput(e.target.value)
    } 

    if (!e.target.value) {
      handleNameInput('')
    }
	}
  return (
    <>
			<div className={s.nameInput} >
        <input 
          className={s.input + ((inputDirty && inputError)  ? ' ' + s.errorBorder : '')}
          onBlur={() => blurHandler()}
          value={input}
          placeholder="Имя"
          onChange={e => onInputChange(e)}
          type="text" 
        />

        {inputDirty && inputError ? <CancelIcon className={s.icon} /> : !inputDirty && !inputError ? <CheckIcon className={s.icon}/> : null}

        {(inputDirty && inputError) && <div className={s.error}>{inputError}</div>}
      </div> 
		</>
  )
}

export default NameInput