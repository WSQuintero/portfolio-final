import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [isBurguerMenu, setIsBurguerMenu] = useState(false)
  const [innerWidth, SetInnerWidth] = useState(window.innerWidth)

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
      <header
        className={`flex justify-center sm:justify-end fixed top-0 text-gray-200 w-full ${
          isBurguerMenu ? 'h-[100vh] bg-bghome' : 'h-[65px] bg-black/70'
        } sm:h-[65px] z-50 bg-bghome xl:bg-black/30 items-center`}>
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
  )
}

export default App
