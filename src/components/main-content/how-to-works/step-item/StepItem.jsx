import s from './StepItem.module.scss'

const StepItem = ({ title, icon, info }) => {

  return (
    <div className={s.step}>
      {icon}
 
      <div className={s.text}>
        <p className={s.title}>{title}</p>

        <p className={s.info}>{info}</p>
      </div>
    </div>
  )
}

export default StepItem