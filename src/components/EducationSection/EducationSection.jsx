import { useState } from 'react'
import { principalStudies } from '../../db/studies'
import Certificate from '../Certificate/Certificate'
import { Certificates } from '../Certificates/Certificates'

function EducationSection () {
  const [cetificatesOpen, setCetificatesOpen] = useState(false)
  const [openCertificate, setOpenCertificate] = useState(null)

  return (
    <section
      id='about-me'
      className='dark:text-bghomelight text-bghometwo font-open-san relative flex flex-col justify-center items-center dark:bg-dark-background'>
      <div className='py-8 sm:px-6 sm:py-12 lg:py-16 flex flex-col justify-center items-center w-[80%]'>
        <h2 className='text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5 bg-titlecolorlight/10  text-left dark:text-titlecolor text-titlecolordark/70 mt-10'>
          Sobre mí
        </h2>
        <div className='max-w-full flex flex-col gap-5 lg:flex-row items-center justify-center xl:justify-between mt-5'>
          <div className=' text-pretty w-full xl:w-[70%] px-5'>
            <p>
              Soy un Desarrollador Web y Profesional en Diseño Visual con una
              trayectoria desde 2014 explorando la programación con tecnologías
              como Java y C++.{' '}
              <strong className='text-titlecolordark'>
                Me especializo con entusiasmo en React y JavaScript,
              </strong>{' '}
              Esta dedicación impulsa mi crecimiento constante.
            </p>
            <br />
            <p>
              La combinación de habilidades en programación con la creatividad
              del diseño me ha destacado en la creación de aplicaciones web
              funcionales y estéticas. Mi enfoque integral, junto con una{' '}
              <strong className='text-titlecolordark'>
                profunda comprensión de las tecnologías avanzadas
              </strong>{' '}
              me posiciona de manera única para abordar proyectos desafiantes y
              ofrecer soluciones tanto estéticas como funcionales.
            </p>
          </div>

          <img
            src='/img/foto.jpg'
            alt='photo'
            className='rounded-full w-[200px] h-[200px] mt-10 sm:mt-auto '
          />
        </div>

        <h2 className='text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5 bg-titlecolorlight/10  text-left dark:text-titlecolor text-titlecolordark/70 mt-10'>
          Estudios{' '}
        </h2>
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
          {principalStudies.map((studie, index) => (
            <button
              key={studie.studie}
              className='block rounded-xl border dark:border-bghomelight/20 border-bghometwo p-8 shadow-xl transition dark:hover:border-titlecolordark/10 border-titlecolordark/10 dark:hover:shadow-titlecolordark/20 dark:shadow-titlecolordark/5 hover:shadow-titlecolordark/40 relative overflow-hidden'
              onClick={() =>
                setOpenCertificate(principalStudies[index].diploma)
              }>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-10 w-10 dark:text-pink-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='rgb(21, 179, 179)'>
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                />
              </svg>

              <h2 className='mt-4 text-md font-bevan dark:text-bghomelight text-bghometwo/80'>
                {studie.studie}
              </h2>

              <p className='mt-1 text-sm dark:text-parraf text-parraflight'>
                {studie.school}
              </p>
              <p className='mt-1 text-sm dark:text-parraf text-parraflight'>
                {studie.description}
              </p>
            </button>
          ))}
          {openCertificate && (
            <Certificate
              img={openCertificate}
              setOpenCertificate={setOpenCertificate}
            />
          )}
        </div>

        <div className='mt-12 text-center'>
          <button
            className='inline-block rounded bg-titlecolordark px-12 py-3 text-sm font-bold text-white transition border hover:border-titlecolordark dark:border-none hover:bg-bghomelight hover:text-titlecolordark focus:outline-none focus:ring focus:ring-yellow-400'
            onClick={() => setCetificatesOpen(true)}>
            Ver certificados
          </button>
        </div>
      </div>
      {cetificatesOpen && (
        <Certificates setCetificatesOpen={setCetificatesOpen} />
      )}
    </section>
  )
}

export default EducationSection
