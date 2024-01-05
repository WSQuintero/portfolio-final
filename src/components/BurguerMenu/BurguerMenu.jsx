import './BurguerMenu.css'

function BurguerMenu ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <>  {isBurguerMenu && (
      <ul className='flex xl:flex-row flex-col  xl:h-full items-center justify-around w-full xl:w-[70%] p-3 gap-3 '>
        <li >
          <a
            href='#home'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 1280)
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
              setIsBurguerMenu(innerWidth > 1280)
            }}>
            Habilidades
          </a>
        </li>
        <li >
          <a
            href='#projects'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 1280)
            }}>
            Proyectos
          </a>
        </li>
        <li >
          <a
            href='#contact'
            className='pages px-40 w-full max-w-[300px] xl:px-[70px]'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 1280)
            }}>
            Contacto
          </a>
        </li>
      </ul>
    )}</>
  )
}

export { BurguerMenu }
