import s from './Header.module.scss'
import Logo from '../logo/Logo'
import Burger from '../burger/Burger'
import useWindowDimensions  from '../../hooks/WindowDimensions'
import Navbar from '../navbar/Navbar'

const Header = () => {
  const { width } = useWindowDimensions()

  return (
    <header className={s.header}>
      <div className={s.top}>
        <Logo />

        {width >= 1920 ? <Navbar /> : <Burger />}
      </div>

      <div className={s.content}>
        <div>
          <h1 className={s.title}>
            Говорят, никогда не поздно сменить профессию
          </h1>

          <p className={s.subTitle}>
            Сделай круто тестовое задание и у тебя получится
          </p>
        </div>
        

        <button className={s.btn}>Проще простого!</button>
      </div>
    </header>
  )
}

export default Header