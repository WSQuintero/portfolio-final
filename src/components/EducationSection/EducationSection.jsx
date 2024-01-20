import React, { useState } from 'react'
import { principalStudies } from '../../db/studies'
import Certificate from '../Certificate/Certificate'
import { Certificates } from '../Certificates/Certificates'

function EducationSection () {
  const [cetificatesOpen, setCetificatesOpen] = useState(false)
  const [openCertificate, setOpenCertificate] = useState(null)

  return (
    <section id="about-me" className=' text-white font-open-san relative flex flex-col justify-center items-center'>
      <div className=' py-8 sm:px-6 sm:py-12  lg:py-16 flex flex-col justify-center items-center w-[80%]'>
      <h2 className='text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5   text-left text-titlecolor mt-10'>
          Sobre mí
        </h2>
        <div className=' max-w-full  flex flex-col gap-5 lg:flex-row items-center justify-center xl:justify-between mt-5'>
          <div className='text-center lg:text-left text-pretty w-full xl:w-[70%] px-5'>
            <p className='mt-4 text-gray-300 w-full'>
              Soy Santiago Quintero. Mis primeros pasos en la programación
              fueron con Java y C++ durante mis estudios en 2014. Desde entonces,
              <strong className='text-titlecolordark'>
                {' '}he venido ampliando mi dominio en JavaScript, React y otras
                tecnologías afines.</strong> Este progreso ha sido fortalecido a través
                de mi formación continua, destacando mis estudios posteriores en
                tecnología en gestión de proyectos web y profesional en
                diseño visual.

            </p>
            <p className='mt-4 text-gray-300 w-full '>
              En mi trayectoria educativa<strong className='text-titlecolordark'> me he destacado por mi profundo
              interés en colaborar con mis compañeros.</strong> Siempre busco soluciones
              a las preguntas que surgen, ofreciendo apoyo continuo para
              garantizar una comprensión más profunda de los conceptos
              aprendidos.
            </p>
          </div>

          <img
            src='/img/foto.jpg'
            alt='photo'
            className='rounded-full w-[200px] h-[200px] '
          />
        </div>

        <h2 className='text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5   text-left text-white mt-10'>

          Estudios{' '}
        </h2>
        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 '>
          {principalStudies.map((studie, index) => (
            <React.Fragment key={studie.studie}>
              <button
                className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-titlecolordark/10 hover:shadow-titlecolordark/10 relative overflow-hidden'
                onClick={() =>
                  setOpenCertificate(principalStudies[index].diploma)
                }>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10 text-pink-500'
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

                <h2 className='mt-4 text-md font-bevan  text-white'>
                  {studie.studie}
                </h2>

                <p className='mt-1 text-sm text-gray-300'>{studie.school}</p>
                <p className='mt-1 text-sm text-gray-300'>
                  {studie.description}
                </p>
              </button>
            </React.Fragment>
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
            className='inline-block rounded bg-titlecolordark px-12 py-3 text-sm font-bold text-white transition hover:bg-titlecolor hover:text-bghometwo focus:outline-none focus:ring focus:ring-yellow-400'
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
