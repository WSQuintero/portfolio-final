import React from 'react'
import './Home.css'

function Home ({ observerRef }) {
  return (
    <section
      className=' w-full h-[100vh] bg-bghome  flex flex-col justify-center items-center'
      id='home'>
      <div className=' border border-titlecolordark flex  flex-col  justify-center items-center w-11/12 h-[97%] xl:w-[98%]  '>
        <div className='flex justify-center xl:justify-around items-center  h-[85%] xl:h-[75%] xl:mt-10  gap-10 xl:flex-row flex-col '>
          <div className=' flex flex-col items-center justify-center gap-3 w-full xl:w-[50%] mt- '>
            <div className='flex flex-col items-center justify-center border-r border-l border-gray-300/20 background'>
              <h1 className='w-full text-titlecolor text-2xl xl:text-3xl whitespace-break-spaces  font-bevan test mb-3'>
                Santiago Quintero
              </h1>
              <img
                src='/img/rostro.png'
                alt='rostro postulante'
                className='w-[60%] '
              />
            </div>
            {/* <div className='lg:w-[60px] w-full bg-titlecolordark h-[3px] ml-2  z-20   '/> */}
          </div>

          <div className='flex flex-col items-start justify-around   h-full w-full p-10 xl:p-0 xl:w-[50%]'>
            <ul>
              <li className='text-title text-3xl font-bevan w-full'>
                Desarrollador front-end
              </li>
              <li className='text-title/70 text-lg xl:text-xl font-bevan'>
                Diseñador visual
              </li>
            </ul>
            <p className='text-parraf text-lg w-full xl:pr-5 xl:w-[90%]'>
            Fuertes habilidades en JavaScript, React, y tecnologías modernas como Tailwind CSS y Redux.
            Puedo construir sitios web totalmente funcionales con un diseño atractivo y efectivo
            </p>

            <div className='flex w-[50%] gap-5 items-center'>
              <a
                href='#projects'
                className='border h-[40px] border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                Proyectos
              </a>
              <div className='border border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome  h-[40px]'>
                <ul className='flex flex-row  justify-center  xl:h-full  items-center gap-5 w-full  '>
                  <li className='border border-titlecolordark p-1 rounded-xl  xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold h-[40px]'>
                    <a
                      href='https://github.com/WSQuintero'
                      target='_about:blank'>
                      <img
                        src='/svg/github.svg'
                        alt='logo github'
                        className=' object-cover h-full w-full'
                      />
                    </a>
                    <a
                      href='https://github.com/WSQuintero'
                      target='_about:blank'></a>
                  </li>
                  <li className='border border-titlecolordark p-1 rounded-xl  xl:mt-auto text-titlecolordark w-[120px] text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold h-[40px]'>
                    <a
                      href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                      target='_about:blank'>
                      <img
                        src='/svg/linkedin.svg'
                        alt='logo likedin'
                        className='obje object-cover h-full'
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
