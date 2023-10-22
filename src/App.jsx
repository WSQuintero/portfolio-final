import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import { Contact } from './components/Contact/Contact'
import './App.css'

function App () {
  return (
    <>
      <header></header>
      <main className='min-h-[100vh] w-full font-cambria bg-bghome'>
        <Home />
        <Skills />
        <Contact />
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghometwo  '></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
