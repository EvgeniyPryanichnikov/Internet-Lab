import React, { useState }  from "react"
import { useSelector } from "react-redux"
import { ReactComponent as CheckIcon } from '../../../../icons/check.svg'
import { ReactComponent as CancelIcon } from '../../../../icons/cancel.svg'
import s from './PhoneInput.module.scss'

const PhoneInput = ({handlePhoneInput}) => {
  const { phone } = useSelector((state => state.formData))

  const [input, setInput] = useState('')
  const [inputDirty, setInputDirty] = useState(false)
  const [inputError, setInputError] = useState('это обязательное поле')

  const blurHandler = () => {
    if (input) {
      setInputDirty(false)
    } else {
      // setInputDirty(true)
    }
  }

  function onInputChange(e) {
		setInput(e.target.value)
    const re = /^((\+7|7|8)+([0-9]){10})$/

    if (!re.test(String(e.target.value).toLowerCase())) {
      setInputDirty(true)
      setInputError('Не корректный ввод')
    } else {
      setInputDirty(false)
      setInputError('')
      handlePhoneInput(e.target.value)
    } 

    if (!e.target.value) {
      handlePhoneInput(null)
    }
	}

  return (
    <>
			<div className={s.phoneInput}>
        <input 
          className={s.input + ((inputDirty && inputError)  ? ' ' + s.errorBorder : '')}
          onBlur={() => blurHandler()}
          value={input}
          placeholder='Телефон'
          onChange={e => onInputChange(e)}
          type="text" 
        />

        {inputDirty && inputError ? <CancelIcon className={s.icon} /> : !inputDirty && !inputError ? <CheckIcon className={s.icon}/> : null}

        {(inputDirty && inputError) && <div className={s.error}>{inputError}</div>}
      </div>
		</>
  )
}

export default PhoneInput