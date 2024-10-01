import s from './Header.module.scss'
import Logo from '../logo/Logo'
import Burger from '../burger/Burger'
// import Navbar from '../navbar/Navbar'

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <Logo />

        <Burger />
      </div>

      <div className={s.content}>
        <h1 className={s.title}>
          Говорят, никогда не поздно сменить профессию
        </h1>

        <p className={s.subTitle}>
          Сделай круто тестовое задание и у тебя получится
        </p>

        <button className={s.btn}>Проще простого!</button>
      </div>
      {/* <Navbar/> */}
    </header>
  )
}

export default Header