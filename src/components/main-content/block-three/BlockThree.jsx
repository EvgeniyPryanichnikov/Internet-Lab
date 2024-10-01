import s from './BlockThree.module.scss'
import { ReactComponent as BlockImage } from '../../../icons/3block.svg'

const BlockThree = () => {
  return (
    <section className={s.blockThree}>
      <div className={s.imageBlock}>
        <BlockImage className={s.icon}/>
      </div>

      <div className={s.textBlock}>
        <h3 className={s.title}>
          Круто, ты дошел до третьего блока
        </h3>

        <p className={s.text}>
          63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.
        </p>

        <p className={s.text}>
          Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
        </p>
      </div>
    </section>
  )
}

export default BlockThree