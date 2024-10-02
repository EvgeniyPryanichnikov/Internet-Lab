import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={s.footer}>
     <span className={s.companyName}>
        © 2021 Лаборатория интернет
     </span>
    </footer>
  )
}

export default Footer