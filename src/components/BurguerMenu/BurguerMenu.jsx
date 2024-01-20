import './BurguerMenu.css'

function BurguerMenu ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <>
      {' '}
      {isBurguerMenu && (
        <ul className='flex lg:flex-row flex-col  lg:h-full items-center justify-around w-full lg:w-[70%] p-3 gap-3 text-nowrap '>
          <li>
            <a
              href='#home'
              className='pages px-40 w-full max-w-[300px] lg:px-[70px]'
              onClick={() => {
                setIsBurguerMenu(innerWidth > 1024)
              }}>
              Home
            </a>
          </li>
          <li>
            <a
              href='#projects'
              className='pages px-40 w-full max-w-[300px] lg:px-[70px]'
              onClick={() => {
                setIsBurguerMenu(innerWidth > 1024)
              }}>
              Proyectos
            </a>
          </li>
          <li>
            <a
              href='#about-me'
              className='pages  w-[200px] '
              onClick={() => {
                setIsBurguerMenu(innerWidth > 1024)
              }}>
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href='#skills'
              className='pages px-40 w-full max-w-[300px] lg:px-[70px]'
              onClick={() => {
                setIsBurguerMenu(innerWidth > 1024)
              }}>
              Habilidades
            </a>
          </li>
          <li>
            <a
              href='#contact'
              className='pages px-40 w-full max-w-[300px] lg:px-[70px]'
              onClick={() => {
                setIsBurguerMenu(innerWidth > 1024)
              }}>
              Contacto
            </a>
          </li>
        </ul>
      )}
    </>
  )
}

export { BurguerMenu }
