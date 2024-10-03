import { useState } from 'react'
import s from './Burger.module.scss'
import Logo from '../logo/Logo'
import { ReactComponent as BurgerIcon } from '../../icons/burger.svg'
import { ReactComponent as CloseIcon } from '../../icons/x-close.svg'
import { ReactComponent as ArrowIcon } from '../../icons/arrow-right.svg'

const Burger = () => {
  const links = [
    {id: 1, title: 'Как это работает'},
    {id: 2, title: '3-й блок'},
    {id: 3, title: 'Вопросы и ответы'},
    {id: 4, title: 'Форма'},
  ]

  const [showMenu, setShowMenu] = useState(false)
  function handleShowMenu() {
    setShowMenu(prev => !prev)
  }

  return (
    <div className={s.test}>
      <BurgerIcon onClick={handleShowMenu}/>

      {showMenu && <div className={s.modalMenu}>
        <div className={s.top}>
          <Logo blackTitle={true}/>

          <CloseIcon className={s.close} onClick={handleShowMenu}/>
        </div>

        <div className={s.menuItems}>
          {links.map(link => (
            <div className={s.item} key={link.id}>
              <span className={s.title} >
                {link.title}
              </span>

              <ArrowIcon />
            </div>))}
        </div>
      </div>}
    </div>
  )
}

export default Burger