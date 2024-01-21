import './Home.css'

function Home ({ openToogleMenu }) {
  return (
    <section
      className=' w-[80%] h-auto lg:h-[100vh]  flex flex-col justify-around items-center'
      id='home'>
        <div className='flex justify- gap-20 lg:justify-between items-center   mt-20  w-full lg:flex-row flex-col  h-auto'>
          <div className=' flex flex-col items-left justify-around gap-3 w-[50%] min-w-[300px] h-[30%]  '>
            <div className='flex flex-col items-center  justify-between border-l border-r border-gray-300/20   '>
              <h1 className="w-full p-2 text-xl border-b text-center text-titlecolorlight dark:text-titlecolor xl:text-4xl whitespace-break-spaces font-bevan dark:animate-pulse dark:border-parraf">
                Santiago Quintero
              </h1>
              <img
                src='/img/rostro.png'
                alt='rostro postulante'
                className=' xl:mt-0 w-[60%] sm:w-full xl:w-[60%]  max-w-[300px] 2xl:max-w-[600px] min-w-[250px] '
              />
            </div>
          </div>

          <div className='flex flex-col items-start justify-around   h-[30%] xl:h-[60%] xl:gap-5 w-full px-5 xl:p-0 xl:w-[600px]'>
            <ul>
              <li className='w-full text-lg text-bghometwo dark:text-title sm:text-2xl font-bevan'>
                Desarrollador front-end
              </li>
              <li className='text-lg text-titlecolordark dark:text-titlecolor xl:text-xl font-bevan'>
                Diseñador visual
              </li>
            </ul>
            <p className='dark:text-parraf text-parraflight text-md  w-full xl:pr-5 xl:w-[90%]  mt-5 xl:mt-0 font-open-san'>
              Fuertes habilidades en JavaScript, React, y tecnologías modernas
              como Tailwind CSS y Redux. Puedo construir sitios web totalmente
              funcionales con un diseño atractivo y efectivo
            </p>

            <div className='flex w-full  items-center h-[40px] mt-3 xl:mt-auto gap-2'>
              <a
                href='#projects'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordarklight p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordarklight w-[120px] text-center  hover:dark:bg-parraf hover:bg-titlecolordarklight hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold'>
                Proyectos
              </a>
              <a
                href='#contact'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordarklight p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordarklight w-[120px] text-center  hover:dark:bg-parraf hover:bg-titlecolordarklight hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold'>
                Contáctame
              </a>
              <div className='w-[50%] text-center   h-[40px] mt-5 xl:mt-0'>
                <ul className='flex flex-row items-center justify-center w-full gap-3 xl:h-full'>
                  <li>
                    <a
                      href='https://github.com/WSQuintero'
                      target='_about:blank'
                      className='border dark:border-titlecolordark border-titlecolordarklight  rounded-xl  xl:mt-auto dark:text-titlecolordark text-titlecolordarklight  text-center  hover:dark:bg-bghomelight  hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold h-[40px] flex justify-center items-center hover:bg-titlecolordark'>
                      <img
                        src='/svg/github.svg'
                        alt='logo github'
                        className='object-contain w-full h-full '
                      />
                    </a>
                    <a
                      href='https://github.com/WSQuintero'
                      target='_about:blank'></a>
                  </li>
                  <li>
                    <a
                      href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                      target='_about:blank'
                      className='border dark:border-titlecolordark border-titlecolordarklight  rounded-xl  xl:mt-auto dark:text-titlecolordark text-titlecolordarklight  text-center  hover:dark:bg-bghomelight  hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold h-[40px] flex justify-center items-center hover:bg-titlecolordark'>
                      <img
                        src='/svg/linkedin.svg'
                        alt='logo likedin'
                        className='object-contain h-full '
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
    </section>
  )
}

export { Home }
