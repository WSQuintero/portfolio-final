import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { useRef, useState } from 'react'
import { InitialAnimate } from './components/InitialAnimate/InitialAnimate'
import EducationSection from './components/EducationSection/EducationSection'
import { useInitialAnimate } from './customHooks/useInitialAnimate'
import Header from './components/Header/Header'
import './App.css'

function App() {
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

  return (
    <>
      {!initialAnimate ? (
        <InitialAnimate />
      ) : (
        <>
          <Header
            isOpenHeader={isOpenHeader}
            setOpenToogleMenu={setOpenToogleMenu}
            openToogleMenu={openToogleMenu}
            setIsOpenHeader={setIsOpenHeader}
          />
          <main className='min-h-[100vh] w-full font-opens-sans text-titlecolor bg-bghomelight dark:bg-bghometwo flex flex-col justify-center items-center   z-0 '>
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
