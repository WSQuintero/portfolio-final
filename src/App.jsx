import './App.css'

function App () {
  return (
    <>
      <header></header>
      <main className='h-[100vh] w-full'>
        <section className=' w-full h-full  bg-bghome p-3'>
          <div className='p-10 border border-titlecolordark flex justify-between  w-full h-full '>
            <div className='w-1/3 flex flex-col items-start justify-center gap-3'>
              <h1 className='text-titlecolor text-3xl whitespace-break-spaces w-2/4'>
                Santiago <span className='text-5xl'>Quintero</span>
              </h1>
              <div className='w-[10%] bg-titlecolor h-[2px] ml-2 mt-2'></div>
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
            <div className='w-1/3 flex flex-col items-start justify-center gap-3'>
              <img
                src='/img/rostro.png'
                alt='rostro postulante'
                className='w-3/4'
              />
            </div>
            <div className='w-1/3 flex flex-col items-start justify-center gap-3'>
              <h3 className='text-titlecolordark'>Sobre mí</h3>
              <ul>
                <li className='text-title text-3xl'>Desarrollador web</li>
                <li className='text-title text-3xl'>Diseñador visual</li>
              </ul>
              <p className='text-parraf'>
                Conocimientos avanzados en desarrollo front-end como lo son el
                diseño, programación y aspectos técnicos de sistemas en general.
                Así como también experiencia en el trabajo en equipo y el
                aprendizaje constante.
              </p>
              <button className='border border-titlecolordark p-2 text-titlecolordark'>
                Proyectos
              </button>
            </div>
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
