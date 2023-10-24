import React from 'react'
import './Home.css'

function Home () {
  return (
    <section
      className=' w-full h-[100vh] bg-bghome p-3 flex justify-center items-center'
      id='home'>
      <div className='p-10 border border-titlecolordark flex justify-center items-center  w-full h-full background  '>
        <div className='flex justify-center items-center h-full p-5 border-t border-b border-gray-400/50 gap-10 '>
          <div className='w-1/3 flex flex-col items-start justify-between gap-3 h-[300px] '>
            <h1 className='text-titlecolor text-6xl whitespace-break-spaces w-full font-bevan test text-start'>
              Santiago Quintero
            </h1>
            <div className='w-[20%] bg-titlecolor h-[2px] ml-2 mt-2'></div>
            <ul className='w-[120px]'>
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
              className='border border-titlecolordark p-2 text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Contactarme
            </a>
          </div>
          <div className='w-1/3 flex flex-col items-center justify-center border-r border-l border-gray-300/20'>
            <img
              src='/img/rostro.png'
              alt='rostro postulante'
              className='w-full'
            />
          </div>
          <div className='w-1/3 flex flex-col items-start  h-[300px] justify-between'>
            <ul>
              <li className='text-title text-3xl font-bevan'>
                Desarrollador web
              </li>
              <li className='text-title text-2xl font-bevan'>
                Diseñador visual
              </li>
            </ul>
            <p className='text-parraf text-xl'>
              Conocimientos avanzados en desarrollo front-end, diseño,
              programación y aspectos técnicos de sistemas en general.
            </p>
            <a
              href='#projects'
              className='border border-titlecolordark p-2 text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Home }
