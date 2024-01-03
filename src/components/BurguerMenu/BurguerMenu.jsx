function BurguerMenu ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <>  {isBurguerMenu && (
      <ul className='flex sm:flex-row flex-col h-[50%] items-center justify-between w-full p-5 '>
        <li className='border border-gray-200 text-center w-full sm:w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a
            href='#home'
            className='w-full h-full inline-block'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Home
          </a>
        </li>
        <li className='border border-gray-200 text-center w-full sm:w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a
            href='#skills'
            className='w-full h-full inline-block'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Habilidades
          </a>
        </li>
        <li className='border border-gray-200 text-center w-full sm:w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a
            href='#projects'
            className='w-full h-full inline-block'
            onClick={() => {
              setIsBurguerMenu(innerWidth > 640)
            }}>
            Proyectos
          </a>
        </li>
        <li className='border border-gray-200 text-center w-full sm:w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
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
