import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import { useRef, useState } from 'react'
import { InitialAnimate } from './components/InitialAnimate/InitialAnimate'
import { IconContext } from 'react-icons'
import EducationSection from './components/EducationSection/EducationSection'
import { IoMdMenu } from 'react-icons/io'
import './App.css'
import { useInitialAnimate } from './customHooks/useInitialAnimate'
import clsx from 'clsx'
import { Toogle } from './components/Toogle/Toogle'

function App () {
  const [initialAnimate, setInitialAnimate] = useState(false)
  const [isOpenHeader, setIsOpenHeader] = useState(true)
  const [openToogleMenu, setOpenToogleMenu] = useState()
  const skillSection = useRef(null)
  useInitialAnimate({
    setIsOpenHeader,
    setInitialAnimate,
    skillSection,
    initialAnimate
  })

  const headerStyles = clsx(
    'flex justify-center lg:justify-end  fixed w-full lg:pr-20 py-7 z-50 lg:h-[80px] bg-bghomelight/50 dark:bg-bghome/50 ',
    openToogleMenu
      ? 'h-[99vh] bg-bghomelight dark:bg-bghome flex-col pt-3'
      : 'h-[40px] dark:bg-bghome items-center ',
    isOpenHeader
      ? 'bg-bghomelight/100 dark:bg-bghome/100 transform-opacity '
      : 'bg-bghomelight transform-opacity duration-200',
    window.innerWidth < 1040 && isOpenHeader && 'bg-bghomelight/100 '
  )

  return (
    <>
      {!initialAnimate
        ? (
        <InitialAnimate />
          )
        : (
        <>
          <header className={headerStyles}>
            <button
              className="w-[50px] h-[50px] hidden md:grid rounded-full border-2 z-50  place-content-center border-titlecolordark dark:border-titlecolordark fixed top-1 right-2  lg:top-4 lg:right-4 bg-bghomelight dark:bg-bghome "
              onClick={(event) => {
                event.stopPropagation()
                setIsOpenHeader(!isOpenHeader)
              }}
            >
              <IconContext.Provider
                value={{
                  size: '30px',
                  className: 'dark:text-titlecolordark text-titlecolordark'
                }}
              >
                <IoMdMenu />
              </IconContext.Provider>
            </button>
            <div className="ml-5">
              <Toogle />
            </div>
            <NavBar
              openToogleMenu={openToogleMenu}
              setOpenToogleMenu={setOpenToogleMenu}
              isOpenHeader={isOpenHeader}
            />
          </header>

          <main className="min-h-[100vh] w-full font-opens-sans text-titlecolor bg-bghomelight dark:bg-bghometwo flex flex-col justify-center items-center   z-0 ">
            <Home openToogleMenu={openToogleMenu} />
            <Projects skillSection={skillSection} />
            <EducationSection />
            <Skills />
            <Contact />
          </main>
        </>
          )}
    </>
  )
}

export default App
