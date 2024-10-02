import s from './BlockThree.module.scss'
import { ReactComponent as BlockImage } from '../../../icons/3block.svg'
import { ReactComponent as MiddleImage } from '../../../icons/man375.svg'
import { ReactComponent as BigImage } from '../../../icons/man1920.svg'
import useWindowDimensions  from '../../../hooks/WindowDimensions'

const BlockThree = () => {
  const { width } = useWindowDimensions();
  return (
    <section className={s.blockThree}>
      <div className={s.imageBlock}>
        {width < 375 && <BlockImage className={s.icon}/>}
        {width >= 375 && width < 1920 && <MiddleImage className={s.icon}/>}
        {width >= 1920 && <BigImage className={s.icon}/>}
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