import './App.css'

function App () {
  return (
    <>
      <header></header>
      <main className='h-[100vh] w-full'>
        <section className='flex w-full h-full justify-between bg-bghome '>
          <div className='w-1/3 '>
            <h1 className='text-titlecolor text-3xl whitespace-break-spaces w-2/4'>
              Santiago <span className='text-5xl'>Quintero</span>
            </h1>
            <ul>
              <li className='text-parraf flex w-full text-xl'>
                <span>
                  <img src='/svg/github.svg' alt='logo github' />
                </span>
                <span></span>Git hub
              </li>
              <li className='text-parraf flex w-full text-xl'>
                <span>
                  <img
                    src='/svg/linkedin.svg'
                    alt='logo likedin'
                    className='w-full h-full'
                  />
                </span>
                LinkedIn
              </li>
            </ul>
            <button className='border border-titlecolordark p-2 text-titlecolordark'>
              Contactarme
            </button>
          </div>
          <div className='w-1/3'>
            <img src='/img/rostro.png' alt='' />
          </div>
          <div className='w-1/3'>
            <h2>Sobre mí</h2>
            <h3>Desarrollador web Diseñador visual</h3>
            <p>
              Conocimientos avanzados en desarrollo front-end como lo son el
              diseño, programación y aspectos técnicos de sistemas en general.
              Así como también experiencia en el trabajo en equipo y el
              aprendizaje constante.
            </p>gh auth login

          </div>
        </section>
        <section className='flex w-full h-full justify-between bg-bghometwo'></section>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghometwo  '></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
