import React, { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Confetti from 'react-confetti'

function Contact () {
  const [state, handleSubmit] = useForm('xrgwpvgz')
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (state.succeeded) {
      setShowConfetti(true)
    }
  }, [state.succeeded])

  return (
    <section className='w-full h-[100vh] bg-bghome p-3 flex justify-center items-center  '>
      <div className=' border border-titlecolordark flex justify-center items-center w-full h-full relative '>
        {!state.succeeded
          ? (
          <>
            <div className='w-6/12 h-full '>
              <figure className='object-cover h-full flex items-end'>
                <img
                  src='/img/traje.png'
                  alt='imagen personal'
                  className='h-[98%]'
                />
              </figure>
            </div>
            <div className='w-9/12 h-full flex justify-center items-center p-10 flex-col background'>
              <h3 className='text-titlecolordark font-bold text-4xl mb-10 w-full text-center bg-bghometwo/60 '>
                CONTÁCTAME
              </h3>
              <form
                action='https://formspree.io/f/xrgwpvgz'
                method='POST'
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 w-full h-[70%] justify-center items-center  rounded-3xl bg-gray-800/50 p-6'>
                <input
                  type='text'
                  className='text-lg w-full p-4 h-1/5 bg-gray-800/50'
                  placeholder='Nombre'
                  name='name'
                  id='name'
                  required
                />
                <ValidationError
                  prefix='Name'
                  field='name'
                  errors={state.errors}
                />
                <div className='flex justify-between h-1/5 relative w-full'>
                  <input
                    type='email'
                    className='text-lg w-[60%] p-4 full bg-gray-800/50'
                    placeholder='Correo electrónico'
                    name='email'
                    id='email'
                    required
                  />
                  <ValidationError
                    prefix='Email'
                    field='email'
                    errors={state.errors}
                  />
                  <input
                    type='text'
                    className='text-lg w-[30%] p-4 bg-gray-800/50'
                    placeholder='telefono'
                    name='tel'
                    required
                  />
                  <ValidationError field='tel' errors={state.errors} />
                </div>
                <textarea
                  className='text-lg  h-2/5 p-4 w-full bg-gray-800/50'
                  placeholder='Deja tu mensaje aquí'
                  name='message'
                  id='message'
                  required
                />
                <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                />
                <button
                  className='w-[200px] h-1/5 inline  bg-[#5B5B5B] text-[#CECECE] text-xl bg-gray-300/50 rounded-2xl'
                  type='submit'
                  disabled={state.submitting}>
                  Enviar
                </button>
              </form>
            </div>
          </>
            )
          : (
          <div className='flex flex-col justify-center items-center gap-5'>
            <p className='text-blue-400 text-4xl w-[500px] text-center'>
              Has enviado tu información correctamente, ¡muchas gracias!
            </p>
            <div className='absolute bottom-0 left-0 w-full h-[100vh] z-50'>
              {showConfetti && <Confetti />}
            </div>
            <button
              className='cursor-pointer z-50 bg-bghome border border-gray-200 text-gray-200 p-3 rounded-2xl '
              onClick={() => location.reload()}>
              Recargar
            </button>
          </div>
            )}
      </div>
    </section>
  )
}

export { Contact }
