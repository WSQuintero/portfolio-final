import './BurguerMenu.css'

function BurguerMenu ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <>  {isBurguerMenu && (
      <ul className='flex sm:flex-row flex-col h-[50%] sm:h-full items-center justify-around w-full xl:w-[70%] p-3 gap-3 '>
        <li >
          <a
            href='#home'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Home
          </a>
        </li>
        <li
        >
          <a
            href='#skills'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Habilidades
          </a>
        </li>
        <li >
          <a
            href='#projects'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Proyectos
          </a>
        </li>
        <li >
          <a
            href='#contact'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Contacto
          </a>
        </li>
      </ul>
    )}</>
  )
}

export { BurguerMenu }
