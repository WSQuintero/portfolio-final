import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import { useEffect, useRef, useState } from 'react'
import { InitialAnimate } from './components/InitialAnimate/InitialAnimate'
import { IconContext } from 'react-icons'
import EducationSection from './components/EducationSection/EducationSection'
import { IoMdMenu } from 'react-icons/io'
import './App.css'

function App () {
  const [isBurguerMenu, setIsBurguerMenu] = useState(false)
  const [innerWidth, SetInnerWidth] = useState(window.innerWidth)
  const [initialAnimate, setInitialAnimate] = useState(false)
  const [isOpenHeader, setIsOpenHeader] = useState(true)
  const skillSection = useRef(null)

  const headerStyles = ` flex justify-center lg:justify-end  text-gray-200 w-full ${
    isBurguerMenu ? 'h-[90vh] bg-bghome' : 'h-[40px] bg-bghome'
  } lg:h-[80px] z-40   items-center fixed lg:pr-20 ${
    isOpenHeader
      ? 'animation'
      : 'close-animation -translate-x-full font-open-sans '
  }`

  useEffect(() => {
    setTimeout(() => {
      setInitialAnimate(true)
    }, 2000)

    if (window.innerWidth < 1024) {
      setIsOpenHeader(true)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (window.innerWidth > 1024) {
            setIsOpenHeader(false)
          }
        }
      })
    })
    if (skillSection.current) {
      observer.observe(skillSection.current)
    }
  }, [initialAnimate])

  useEffect(() => {
    window.addEventListener('resize', () => {
      SetInnerWidth(window.innerWidth)
      if (window.innerWidth < 1024) {
        setIsBurguerMenu(false)
      } else {
        setIsBurguerMenu(true)
      }
    })
    if (window.innerWidth < 1024) {
      setIsBurguerMenu(false)
    } else {
      setIsBurguerMenu(true)
    }
  }, [])

  useEffect(() => {}, [])
  return (
    <>
      {!initialAnimate
        ? (
        <InitialAnimate />
          )
        : (
        <>

            <button
              className='w-[50px] h-[50px] hidden md:grid rounded-full border-2 z-50  place-content-center border-titlecolordark fixed top-1 right-2  lg:top-4 lg:right-4 bg-bghome '
              onClick={() => {
                setIsOpenHeader(!isOpenHeader)
              }}>
              <IconContext.Provider
                value={{ size: '30px', color: 'rgb(21, 179, 179)' }}>
                <IoMdMenu />
              </IconContext.Provider>
            </button>

          <header className={headerStyles}>
            <NavBar
              isBurguerMenu={isBurguerMenu}
              setIsBurguerMenu={setIsBurguerMenu}
              innerWidth={innerWidth}
            />
          </header>

          <main className='min-h-[100vh] w-full font-opens-sans dark:bg-bghometwo flex flex-col justify-center items-center   z-0 '>
            <Home />
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
