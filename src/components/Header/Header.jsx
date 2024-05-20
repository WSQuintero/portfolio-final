import React from 'react'
import { IconContext } from 'react-icons'
import { NavBar } from '../NavBar/NavBar'
import { Toogle } from '../Toogle/Toogle'
import clsx from 'clsx'
import { IoMdMenu } from 'react-icons/io'

function Header({
  setOpenToogleMenu,
  openToogleMenu,
  isOpenHeader,
  setIsOpenHeader
}) {
  const headerStyles = clsx(
    'flex justify-center lg:justify-end p-4  fixed w-full lg:pr-20 py-7 z-50 lg:h-[80px]  dark:bg-bghome ',
    openToogleMenu
      ? 'h-[99vh] bg-bghomelight dark:bg-bghome flex-col pt-3 px-0'
      : 'h-[40px] dark:bg-bghome items-center ',
    isOpenHeader
      ? 'bg-bghomeligth/100 dark:bg-bghome transform-opacity '
      : 'bg-bghomelight/50 dark:bg-bghome/50 transform-opacity duration-200',
    window.innerWidth < 1040 && isOpenHeader && 'bg-bghomelight '
  )

  return (
    <header className={headerStyles}>
      <button
        className='w-[50px] h-[50px] hidden md:grid rounded-full border-2 z-50  place-content-center border-titlecolordark dark:border-titlecolordark fixed top-1 right-2  lg:top-4 lg:right-4 bg-bghomelight dark:bg-bghome '
        onClick={(event) => {
          event.stopPropagation()
          setIsOpenHeader(!isOpenHeader)
        }}>
        <IconContext.Provider
          value={{
            size: '30px',
            className: 'dark:text-titlecolordark text-titlecolordark'
          }}>
          <IoMdMenu />
        </IconContext.Provider>
      </button>
      <Toogle />
      <NavBar
        openToogleMenu={openToogleMenu}
        setOpenToogleMenu={setOpenToogleMenu}
        isOpenHeader={isOpenHeader}
      />
    </header>
  )
}

export default Header
