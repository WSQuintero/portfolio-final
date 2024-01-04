import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import { useEffect, useState } from 'react'
import { InitialAnimate } from './components/InitialAnimate/InitialAnimate'
import './App.css'

function App() {
  const [isBurguerMenu, setIsBurguerMenu] = useState(false)
  const [innerWidth, SetInnerWidth] = useState(window.innerWidth)
  const [initialAnimate, setInitialAnimate] = useState(false)
  const headerStyles = `flex justify-center sm:justify-end  text-gray-200 w-full ${
    isBurguerMenu ? 'h-[100vh] bg-bghome' : 'h-[50px] bg-bghome'
  } sm:h-[50px] z-50   items-center`

  useEffect(() => {
    setTimeout(() => {
      setInitialAnimate(true)
    }, 2000)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => {
      SetInnerWidth(window.innerWidth)
      if (window.innerWidth < 640) {
        setIsBurguerMenu(false)
      } else {
        setIsBurguerMenu(true)
      }
    })
    if (window.innerWidth < 640) {
      setIsBurguerMenu(false)
    } else {
      setIsBurguerMenu(true)
    }
  }, [])

  return (
    <>
      {!initialAnimate ? (
        <InitialAnimate />
      ) : (
        <>
          <header className={headerStyles}>
            <NavBar
              isBurguerMenu={isBurguerMenu}
              setIsBurguerMenu={setIsBurguerMenu}
              innerWidth={innerWidth}
            />
          </header>
          <main className='min-h-[100vh] w-full font-cambria bg-bghome z-0'>
            <Home />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  )
}

export default App
