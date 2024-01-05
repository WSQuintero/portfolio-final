import React from 'react'
import './Home.css'

function Home ({ observerRef }) {
  return (
    <section
      className=' w-full h-[100vh] bg-bghome  flex flex-col justify-center items-center'
      id='home'>
      <div className=' border border-titlecolordark flex  flex-col  justify-center items-center w-11/12 h-[97%] xl:w-[98%]  '>
        <div className='flex justify-center xl:justify-around items-center  h-[85%] xl:h-[75%] xl:mt-10  gap-10 xl:flex-row flex-col '>
          <div className=' flex flex-col items-center justify-center gap-3 w-full xl:w-[50%] '>
            <div className='flex flex-col items-center justify-center border-r border-l border-gray-300/20 background p-5 '>
              <h1 className='w-full text-titlecolor text-xl xl:text-3xl whitespace-break-spaces  font-bevan test '>
                Santiago Quintero
              </h1>
              <img
                src='/img/rostro.png'
                alt='rostro postulante'
                className='mt-4 xl:mt-0 w-[60%] '
              />
            </div>
          </div>

          <div className='flex flex-col items-start justify-around   h-full xl:h-[70%] xl:gap-5 w-full px-5 xl:p-0 xl:w-[600px]'>
            <ul>
              <li className='text-title text-xl font-bevan w-full'>
                Desarrollador front-end
              </li>
              <li className='text-title/70 text-lg xl:text-xl font-bevan'>
                Diseñador visual
              </li>
            </ul>
            <p className='text-parraf text-lg w-full xl:pr-5 xl:w-[90%]  mt-5 xl:mt-0'>
            Fuertes habilidades en JavaScript, React, y tecnologías modernas como Tailwind CSS y Redux.
            Puedo construir sitios web totalmente funcionales con un diseño atractivo y efectivo
            </p>

            <div className='flex w-full  items-center h-[40px] mt-3 xl:mt-auto gap-2'>
              <a
                href='#projects'
                className='border h-[40px] border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                Proyectos
              </a>
              <a
                href='#contact'
                className='border h-[40px] border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                Contáctame
              </a>
              <div className='w-[50%] text-center bg-bghome  h-[40px] mt-5 xl:mt-0'>
                <ul className='flex flex-row  justify-center  xl:h-full  items-center w-full  gap-3'>
                  <li >
                    <a
                      href='https://github.com/WSQuintero'
                      target='_about:blank'
                      className='border border-titlecolordark  rounded-xl  xl:mt-auto text-titlecolordark  text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold h-[40px] flex justify-center items-center'
                      >
                      <img
                        src='/svg/github.svg'
                        alt='logo github'
                        className=' object-contain h-full w-full'
                      />
                    </a>
                    <a
                      href='https://github.com/WSQuintero'
                      target='_about:blank'></a>
                  </li>
                  <li >
                    <a
                      href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                      target='_about:blank'
                      className='border border-titlecolordark  rounded-xl  flex justify-center items-center xl:mt-auto text-titlecolordark  text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold h-[40px]'
                      >
                      <img
                        src='/svg/linkedin.svg'
                        alt='logo likedin'
                        className=' object-contain h-full'
                      />
                    </a>
                    <a
                      href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                      target='_about:blank'></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Home }
