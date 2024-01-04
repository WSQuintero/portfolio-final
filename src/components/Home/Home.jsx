import React from 'react'
import './Home.css'

function Home () {
  return (
    <section
      className=' w-full xl:h-[93vh] bg-bghome p-3 flex justify-center items-center'
      id='home'>
      <div className='p-10 border border-titlecolordark flex  justify-center items-center w-full h-full   '>
        <div className='flex justify-center items-center h-full p-5  border-b border-gray-400/50 gap-10 xl:flex-row flex-col background'>
          <div className='xl:w-1/3 flex flex-col items-start justify-between gap-3 xl:h-[300px] '>
            <h1 className='text-titlecolor text-3xl xl:text-5xl whitespace-break-spaces text-center xl:w-full font-bevan test xl:text-start'>
              Santiago Quintero
            </h1>
            <div className='lg:w-[60px] w-full bg-titlecolordark h-[3px] ml-2  z-20 '/>
            <ul className='w-[120px] hidden xl:inline z-0 '>
              <li className='text-parraf flex w-full text-lg justify-between items-center'>
                <span>
                  <a href='https://github.com/WSQuintero' target='_about:blank'>
                    <img src='/svg/github.svg' alt='logo github' />
                  </a>
                </span>
                <a href='https://github.com/WSQuintero' target='_about:blank'>
                  Git hub
                </a>
              </li>
              <li className='text-parraf flex w-full text-lg  justify-between items-center'>
                <span>
                  <a
                    href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                    target='_about:blank'>
                    <img
                      src='/svg/linkedin.svg'
                      alt='logo likedin'
                      className='w-full h-full'
                    />
                  </a>
                </span>
                <a
                  href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                  target='_about:blank'>
                  LinkedIn
                </a>
              </li>
            </ul>
            <a
              href='#contact'
              className='border hidden xl:inline border-titlecolordark p-2 rounded-xl text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Contactarme
            </a>
          </div>
          <div className='xl:w-1/3 flex flex-col items-center justify-center border-r border-l border-gray-300/20'>
            <img
              src='/img/rostro.png'
              alt='rostro postulante'
              className='w-[50%] xl:w-full'
            />
          </div>
          <div className='xl:w-1/3 flex flex-col items-start  xl:h-[300px] justify-between'>
            <ul>
              <li className='text-title text-sm xl:text-3xl font-bevan'>
                Desarrollador web
              </li>
              <li className='text-title text-lg xl:text-2xl font-bevan'>
                Diseñador visual
              </li>
            </ul>
            <p className='text-parraf text-sm sm:text-lg mt-5 xl:mt-auto'>
              Conocimientos avanzados en desarrollo front-end, diseño,
              programación y aspectos técnicos de sistemas en general.
            </p>
            <a
              href='#projects'
              className='border border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Home }
