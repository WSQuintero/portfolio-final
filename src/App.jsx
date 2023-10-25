import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import { Projects } from './components/Projects/Projects'
import { NavBar } from './components/NavBar/NavBar'
import './App.css'

function App () {
  return (
    <>
      <header className='flex justify-end fixed top-0 text-gray-200 w-full h-[65px] z-40 bg-black/30 items-center'>
        <NavBar />
      </header>
      <main className='min-h-[100vh] w-full font-cambria bg-bghome z-10'>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
