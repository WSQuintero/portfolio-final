import { FaFileDownload } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './Home.css'

function Home({ openToogleMenu }) {
  return (
    <section
      className=' w-[80%] min-h-screen   sm:pt-20 flex flex-col justify-center items-center'
      id='home'>
      <img
        src='/img/smoke.png'
        alt='smoke'
        className='absolute z-0 opacity-50 object-contain w-full h-full'
      />
      <div className='flex gap-10 lg:justify-center items-center w-full lg:flex-row flex-col  h-full z-40'>
        <div className=' flex flex-col items-left justify-center gap-3 w-[50%] min-w-[300px] h-[30%]  '>
          <div className='flex flex-col items-center  justify-between border-l border-r border-titlecolordark dark:border-gray-300/20 w-full   '>
            <h1 className='w-full p-2 text-2xl xl:text-4xl   whitespace-nowrap border-b text-titlecolordark/80 dark:text-titlecolor  text-center font-bevan animate-pulse border-titlecolordark dark:border-parraf'>
              Santiago Quintero
            </h1>
            <img
              src='/img/rostro.png'
              alt='rostro postulante'
              className=' xl:mt-0 w-[60%] sm:w-full xl:w-[60%]  max-w-[300px] 2xl:max-w-[600px] min-w-[250px] '
            />
          </div>
        </div>

        <div className='flex flex-col items-start justify-around   h-auto xl:h-[60%] xl:gap-5 w-full px-5 xl:p-0 xl:w-[630px] '>
          <ul>
            <li className='w-full text-lg text-bghometwo dark:text-title sm:text-2xl font-bevan 2xl:text-4xl'>
              Desarrollador front-end
            </li>
            <li className='text-lg text-titlecolordark/60 dark:text-titlecolor xl:text-xl font-bevan 2xl:text-2xl'>
              Diseñador visual
            </li>
          </ul>
          <p className=' mt-5 dark:text-parraf text-parraflight text-md 2xl:text-xl  w-full xl:pr-5 xl:w-[90%]  xl:mt-0 font-open-san'>
            Fuertes habilidades en JavaScript, Typescript, React, y tecnologías
            modernas como Tailwind CSS, Material Ui, Zustand, Redux, entre
            otras.
            <br /> <br /> Puedo construir sitios web totalmente funcionales con
            un diseño atractivo, y siguiendo estándares correctos a la hora de
            escribir código.
          </p>

          <div className='flex sm:flex-row flex-col w-full  items-start h-auto mt-3 xl:mt-auto sm:gap-2'>
            <div className='flex gap-2'>
              <a
                href='#projects'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                Proyectos
              </a>
              <a
                href='#contact'
                className='border h-[40px]  dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                Contáctame
              </a>
            </div>
            <div className='sm:w-[50%] w-full text-center  xl:mt-0 mt-5'>
              <ul className='flex flex-row items-center justify-center w-full gap-3 xl:h-full'>
                <li>
                  <a
                    href='/CVSantiagoQuintero.pdf'
                    target='_about:blank'
                    download='CV Santiago Quintero.pdf'
                    className='border dark:border-titlecolordark w-[40px]  border-titlecolordark  rounded-xl  xl:mt-auto dark:text-titlecolordark text-titlecolordark  text-center  hover:dark:bg-bghomelight  hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold h-[40px] flex justify-center items-center hover:bg-titlecolordark'>
                    <IconContext.Provider value={{ size: '70%', color: 'red' }}>
                      <FaFileDownload />
                    </IconContext.Provider>
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/WSQuintero'
                    target='_about:blank'
                    className='border dark:border-titlecolordark w-[40px]  border-titlecolordark  rounded-xl  xl:mt-auto dark:text-titlecolordark text-titlecolordark  text-center  hover:dark:bg-bghomelight  hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold h-[40px] flex justify-center items-center hover:bg-titlecolordark'>
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
                    className='border dark:border-titlecolordark w-[40px]  border-titlecolordark  rounded-xl  xl:mt-auto dark:text-titlecolordark text-titlecolordark  text-center  hover:dark:bg-bghomelight  hover:dark:text-bghometwo hover:text-bghometwolight hover:font-bold h-[40px] flex justify-center items-center hover:bg-titlecolordark'>
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
