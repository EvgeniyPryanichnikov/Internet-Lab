import s from './HowToWorks.module.scss'
import StepItem from './step-item/StepItem'
import { ReactComponent as WaitingIcon } from '../../../icons/waiting.svg'
import { ReactComponent as DeliveryIcon } from '../../../icons/delivery-truck.svg'
import { ReactComponent as SecureIcon } from '../../../icons/secure.svg'
import { ReactComponent as MoneyIcon } from '../../../icons/money-bags.svg'


const HowToWorks = () => {
  const steps = [
    { title: 'Прочитай задание внимательно', icon: <WaitingIcon />, info: 'Думаю у тебя не займет это больше двух-трех минут' },
    { title: 'Изучи весь макет заранее', icon: <DeliveryIcon />, info: 'Подумай как это будет работать на разных разрешениях и при скролле' },
    { title: 'Сделай хорошо', icon: <SecureIcon />, info: 'Чтобы мы могли тебе доверить подобные задачи в будущем' },
    { title: 'Получи предложение', icon: <MoneyIcon />, info: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))' }
  ]

  return (
    <section className={s.stepsBlock}>
      <h2>
        Как это работает
      </h2>

      {steps.map(step => (
        <StepItem 
          key={step.title} 
          title={step.title}
          icon={step.icon}
          info={step.info}/>
        ))
      }
    </section>
  )
}

export default HowToWorks