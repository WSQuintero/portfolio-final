import React from 'react'

function NavBar () {
  return (
    <nav className='h-[20px] w-[50%]  mr-5 '>
      <ul className='flex h-full items-center justify-between'>
        <li className='border border-gray-200 text-center w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a href='#home' className='w-full h-full inline-block'>
            Home
          </a>
        </li>
        <li className='border border-gray-200 text-center w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a href='#skills' className='w-full h-full inline-block'>
            Habilidades
          </a>
        </li>
        <li className='border border-gray-200 text-center w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a href='#projects' className='w-full h-full inline-block'>
            Proyectos
          </a>
        </li>
        <li className='border border-gray-200 text-center w-1/4 bg-bghome hover:border-titlecolordark hover:text-titlecolordark'>
          <a href='#contact' className='w-full h-full  inline-block'>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}

export { NavBar }
