import s from './Logo.module.scss'
import { ReactComponent as Ellipse1 } from '../../icons/Ellipse1.svg'
import { ReactComponent as Ellipse2 } from '../../icons/Ellipse2.svg'

const Logo = ({blackTitle}) => {
  return (
    <div className={s.logo}>
      <div className={s.icon}>
        <Ellipse2 className={s.ellipseWhite}/>
        <Ellipse1 className={s.ellipseBlue}/>
      </div>
      

      <span className={s.title && blackTitle ? s.blackTitle : s.title}>
        testLab
      </span>
    </div>
  )
}

export default Logo