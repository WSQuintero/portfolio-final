import React from 'react'
import './Home.css'

function Home () {
  return (
    <section className=' w-full h-full bg-bghome p-3 flex justify-center items-center'>
      <div className='p-10 border border-titlecolordark flex justify-center items-center  w-full h-full background '>
        <div className='flex justify-center items-center h-full p-5 border-t border-b border-gray-400/50 gap-10'>
          <div className='w-1/3 flex flex-col items-start justify-center gap-3 h-full '>
            <h1 className='text-titlecolor text-5xl whitespace-break-spaces w-2/4 font-bevan test'>
              Santiago Quintero
            </h1>
            <div className='w-[20%] bg-titlecolor h-[2px] ml-2 mt-2'></div>
            <ul className='w-[120px]'>
              <li className='text-parraf flex w-full text-lg  justify-between items-center'>
                <span>
                  <img src='/svg/github.svg' alt='logo github' />
                </span>
                <span></span>Git hub
              </li>
              <li className='text-parraf flex w-full text-lg  justify-between items-center'>
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
            <button className='border border-titlecolordark p-2 text-titlecolordark w-[120px] bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Contactarme
            </button>
          </div>
          <div className='w-1/3 flex flex-col items-start justify-center border-r border-l border-gray-300/20'>
            <img
              src='/img/rostro.png'
              alt='rostro postulante'
              className='full'
            />
          </div>
          <div className='w-1/3 flex flex-col items-start justify-center gap-3'>
            <h3 className='text-titlecolordark text-xl'>Sobre mí</h3>
            <ul>
              <li className='text-title text-3xl font-bevan'>
                Desarrollador web
              </li>
              <li className='text-title text-3xl font-bevan'>
                Diseñador visual
              </li>
            </ul>
            <p className='text-parraf'>
              Conocimientos avanzados en desarrollo front-end como lo son el
              diseño, programación y aspectos técnicos de sistemas en general.
              Así como también experiencia en el trabajo en equipo y el
              aprendizaje constante.
            </p>
            <button className='border border-titlecolordark p-2 text-titlecolordark w-[120px] bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Proyectos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Home }
