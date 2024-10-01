import s from './Navbar.module.css'

const Navbar = () => {
	const links = [
	  {id: 1, title: 'Как это работает', name: '#how-to-work'},
	  {id: 2, title: '3-й блок', name: '#block-three'}, 
	  {id: 3, title: 'Вопросы и ответы', name: '#questions'}, 
	  {id: 4, title: 'Форма', name: '#form'}]

  return (
    <div className={s.navbar}>
      {links.map(link => (
				<a 
					className={s.item}
					href={link.name}
					key={link.id}
				>
					{link.title}
				</a>
			))}
    </div>
  )
}

export default Navbar