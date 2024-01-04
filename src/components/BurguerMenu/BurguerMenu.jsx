import './BurguerMenu.css'

function BurguerMenu ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <>  {isBurguerMenu && (
      <ul className='flex sm:flex-row flex-col h-[50%] sm:h-full items-center justify-around w-full xl:w-[70%] p-5 gap-3 '>
        <li className='pages'>
          <a
            href='#home'
            className='w-full h-full inline-block'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Home
          </a>
        </li>
        <li className='pages'>
          <a
            href='#skills'
            className='w-full h-full inline-block'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Habilidades
          </a>
        </li>
        <li className='pages'>
          <a
            href='#projects'
            className='w-full h-full inline-block'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Proyectos
          </a>
        </li>
        <li className='pages'>
          <a
            href='#contact'
            className='w-full h-full  inline-block'
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
