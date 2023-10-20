import { Home } from './components/Home/Home'
import { Skills } from './components/Skills/Skills'
import './App.css'

function App () {
  return (
    <>
      <header></header>
      <main className='h-[100vh] w-full font-cambria'>
        <Home />
        <Skills/>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghometwo  '></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
