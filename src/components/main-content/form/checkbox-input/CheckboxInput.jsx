
import React, {useEffect, useState} from 'react'
import { useSelector } from "react-redux"
import s from './CheckboxInput.module.scss'

const CheckboxInput = ({handleAgreeInput}) => {
  const { name, phone } = useSelector((state => state.formData))

  const [active, setActive] = useState(false)

  useEffect(() => {
    if (name && phone) {
      setActive(() => prev => !prev)
    }
  }, [name, phone])

  function use(e) {
    handleAgreeInput(e.target.checked)
  }

  return (
    <div className={s.checkbox}>
      {active && <label htmlFor="input" className={s.label}>
        <input type="checkbox" onClick={(e) => use(e)} className={s.input} id='input'/>

        <span className={s.text}>
          Согласен, отказываюсь
        </span>
      </label>}
    </div> 
  )
}

export default CheckboxInput