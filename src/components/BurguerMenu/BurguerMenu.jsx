import './BurguerMenu.css'

function BurguerMenu({ isBurguerMenu, setIsBurguerMenu }) {
  const burguerMenuOption = [
    { link: '#home', title: 'Home' },
    { link: '#projects', title: 'Proyectos' },
    { link: '#about-me', title: 'Sobre mí' },
    { link: '#skills', title: 'Habilidades' },
    { link: '#contact', title: 'Contacto' },
    { link: 'https://github.com/WSQuintero', title: 'Github' },
    {
      link: 'https://www.linkedin.com/in/webdevsantiagoquintero',
      title: 'Linked in'
    }
  ]
  return (
    <>
      {isBurguerMenu && (
        <div className='flow-root fixed h-[100vh] w-full p-4 top-0 dark:bg-bghome bg-bghomelight mt-14 font-open-sans burguer '>
          <ul className='space-y-1 flex flex-col justify-around h-[60%] '>
            {burguerMenuOption.map((option) => (
              <li className='border border-white p-2' key={option.title}>
                <a
                  href={option.link}
                  className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                  onClick={(event) => {
                    setIsBurguerMenu(false)
                    event.stopPropagation()
                  }}>
                  {option.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export { BurguerMenu }
