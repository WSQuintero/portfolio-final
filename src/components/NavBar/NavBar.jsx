import { BurguerMenu } from '../BurguerMenu/BurguerMenu'
import { IconContext } from 'react-icons'
import { IoMdMenu } from 'react-icons/io'
import clsx from 'clsx'
import './NavBar.css'

function NavBar ({ openToogleMenu, setOpenToogleMenu, isOpenHeader }) {
  return (
    <>
      <div
        className={clsx(
          'mx-auto flex w-[80%] h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 container',
          isOpenHeader
            ? 'animation opacity-100'
            : 'close-animation -translate-x-full opacity-0 font-open-sans ',
          openToogleMenu && 'opacity-100 h-full'
        )}>
        <div className='flex flex-1 items-center justify-end gap-5 h-full '>
          <nav aria-label='Global' className='hidden md:block'>
            <ul className='flex items-center gap-6 text-md '>
              <li>
                <a
                  className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'
                  href='#home'>
                  {' '}
                  Home{' '}
                </a>
              </li>
              <li>
                <a
                  className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'
                  href='#about-me'>
                  {' '}
                  Sobre mí{' '}
                </a>
              </li>

              <li>
                <a
                  className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'
                  href='#skills'>
                  {' '}
                  Habilidades{' '}
                </a>
              </li>
            </ul>
          </nav>

          <div className='flex items-center gap-4'>

              <a
                  className='border relative h-[40px] grid place-content-center rounded-xl px-[10px]  dark:text-bghomelight dark:hover:text-bghometwo dark:border-bghomelight  border-titlecolordark p-2  mt-5 xl:mt-auto  text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'
                  href='#contact'>
                Contáctame
              </a>
              <a
                className='border h-[40px] bg-titlecolordark dark:hover:text-bghomelight dark:text-bghomelight text-bghomelight dark:border-titlecolordark dark:hover:bg-titlecolordark/70 border-titlecolordark px-10 py-3 rounded-xl   w-[140px] text-center   hover:bg-titlecolor/50  hover:text-titlecolordark   font-bold grid place-content-center'
                href='#projects'>
                Proyectos
              </a>

            <button
              className={clsx(
                'block   rounded-full border-2 z-50  place-content-center border-titlecolordark dark:border-titlecolordark  dark:bg-bghome bg-bghomelight  p-1 md:hidden',
                openToogleMenu && 'absolute top-2 right-14'
              )}
              onClick={(event) => {
                event.stopPropagation()
                setOpenToogleMenu(!openToogleMenu)
              }}>
              <IconContext.Provider
                value={{ size: '30px', color: 'rgb(21, 179, 179)' }}>
                <IoMdMenu />
              </IconContext.Provider>
            </button>
          </div>
        </div>
        {openToogleMenu && (
          <BurguerMenu
            isBurguerMenu={openToogleMenu}
            setIsBurguerMenu={setOpenToogleMenu}
          />
        )}
      </div>
    </>
  )
}

export { NavBar }
