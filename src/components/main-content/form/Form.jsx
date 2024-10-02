import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { setName, setPhone, setAgree } from "../../../store/slices/formSlice"
import s from './Form.module.scss'
import NameInput from './text-input/NameInput'
import PhoneInput from './phone-input/PhoneInput'
import CheckboxInput from "./checkbox-input/CheckboxInput"
import { getSubscription } from '../../../api/subscription'


const Form = () => {
  const { name, phone, agreement } = useSelector((state => state.formData))
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (name && phone && agreement) {
      setActive(() => prev => !prev)
    }
  }, [name, phone, agreement])

  const dispatch = useDispatch()

  function handleNameInput(value) {
    dispatch(setName(value))
  }

  function handlePhoneInput(value) {
    dispatch(setPhone(value))
  }

  function handleAgreeInput(value) {
    dispatch(setAgree(value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    if (name && phone && agreement) {
      getSubscription(name, phone)
      dispatch(setName(''))
      dispatch(setPhone(null))
      dispatch(setAgree(false))
    } 
  }


  return (
    <form className={s.form} id='form'>
      <h2 className={s.title}>
        Отправь форму
      </h2>

      <div className={s.inputsContainer}>
        <NameInput handleNameInput={handleNameInput}/>

        <PhoneInput handlePhoneInput={handlePhoneInput}/>
      </div>

      <div className={s.btnsContainer}>
        <CheckboxInput handleAgreeInput={handleAgreeInput}/>

        <button 
          onClick={(e) => handleSubmit(e)}
          className={active ? s.btn : s.btnDisabled}
        >
          Отправить
        </button>
      </div>
        
     
    </form>
  )
}

export default Form