import { useState } from 'react'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { IconContext } from 'react-icons'
import { IoMdMenu } from 'react-icons/io'

function NavBar () {
  const [openToogleMenu, setOpenToogleMenu] = useState(false)
  return (
    <>
  <div className="mx-auto flex w-[80%] h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
  {!openToogleMenu && window.innerWidth > 1040 && (
    <a className="block text-teal-600 h-[70px] w-[70px] border border-titlecolordark rounded-full p-3" href="/">
      <span className="sr-only">Home</span>

    <img src="/img/logo.png" alt="logo" className="object-contain w-full " />
    </a>
  )}

    <div className="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-gray-500 dark:text-white transition hover:text-gray-500/75" href="#home"> Home </a>
          </li>
          <li>
            <a className="text-gray-500 dark:text-white transition hover:text-gray-500/75" href="#about-me"> Sobre mí </a>
          </li>

          <li>
            <a className="text-gray-500 dark:text-white transition hover:text-gray-500/75" href="#skills"> Habilidades </a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-titlecolordark px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            href="#projects"
          >
            Proyectos
          </a>

          <a
            className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            href="#contact"
          >
            Contáctame
          </a>
        </div>

        <button
          className="block   rounded-full border-2 z-50  place-content-center border-titlecolordark  bg-bghome  p-1 md:hidden"
          onClick={() => setOpenToogleMenu(!openToogleMenu)}
        >

              <IconContext.Provider
                value={{ size: '30px', color: 'rgb(21, 179, 179)' }}>
                <IoMdMenu />
              </IconContext.Provider>
            </button>
      </div>
    </div>
    {openToogleMenu && <BurguerMenu isBurguerMenu={openToogleMenu} setIsBurguerMenu={setOpenToogleMenu} />}
  </div>
    </>
  )
}

export { NavBar }
