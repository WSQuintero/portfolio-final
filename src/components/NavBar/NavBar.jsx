import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { IconContext } from 'react-icons'
import { IoMdMenu } from 'react-icons/io'
import { Toogle } from '../Toogle/Toogle'
import clsx from 'clsx'

function NavBar ({ openToogleMenu, setOpenToogleMenu, isOpenHeader }) {
  return (
    <>
  <div className={clsx('mx-auto flex w-[80%] h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8', isOpenHeader ? 'animation' : 'close-animation -translate-x-full opacity-0 font-open-sans ', openToogleMenu && 'opacity-100 h-full')}>
  {!openToogleMenu && window.innerWidth > 1040 && (
    <a className="block text-teal-600 h-[70px] w-[70px] border border-titlecolordarklight dark:border-titlecolordark rounded-full p-3" href="/">
      <span className="sr-only">Home</span>

    <img src="/img/logo.png" alt="logo" className="object-contain w-full " />
    </a>
  )}

    <div className="flex flex-1 items-center justify-end md:justify-between h-full ">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a className="text-parraflight dark:text-white transition hover:text-parraf/75" href="#home"> Home </a>
          </li>
          <li>
          <a className="text-parraflight dark:text-white transition hover:text-parraf/75" href="#about-me"> Sobre mí </a>
          </li>

          <li>
          <a className="text-parraflight dark:text-white transition hover:text-parraf/75" href="#skills"> Habilidades </a>
          </li>

        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="block rounded-md bg-titlecolordarklight/60  dark:bg-titlecolordark px-5 py-2.5 text-sm font-medium text-white transition hover:bg-titlecolorlight hover:dark:bg-titlecolor"
            href="#projects"
          >
            Proyectos
          </a>

          <a
            className="hidden rounded-md dark:bg-bghomelight text-titlecolordarklight hover:bg-titlecolordarklight hover:text-bghomelight bg-parraflight/10 px-5 py-2.5 text-sm font-semibold dark:text-titlecolordark transition    hover:dark:text-bghomelight hover:dark:bg-titlecolordark/75 sm:block"
            href="#contact"
          >
            Contáctame
          </a>
        </div>

        <button
          className={clsx('block   rounded-full border-2 z-50  place-content-center border-titlecolordarklight dark:border-titlecolordark  dark:bg-bghome bg-bghomelight  p-1 md:hidden', openToogleMenu && 'absolute top-2 right-14')}
          onClick={(event) => { event.stopPropagation(); setOpenToogleMenu(!openToogleMenu) }}
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
