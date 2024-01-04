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
    <section
      className='w-full h-[100vh] bg-bghome p-3 flex justify-center items-center  '
      id='contact'>
      <div className=' border border-titlecolordark flex justify-center items-center w-full h-full relative '>
        {!state.succeeded
          ? (
          <>
            <div className=' hidden xl:flex w-6/12 h-full '>
              <figure className='object-cover h-full xl:flex items-end hidden'>
                <img
                  src='/img/traje.png'
                  alt='imagen personal'
                  className='h-[90%]'
                />
              </figure>
            </div>
            <div className=' w-full xl:w-9/12 h-full flex justify-center items-center p-5 flex-col '>
              <h3 className='text-titlecolordark font-bold text-2xl mb-10 w-full text-center bg-bghometwo/60 '>
                CONTÁCTAME
              </h3>
              <form
                action='https://formspree.io/f/xrgwpvgz'
                method='POST'
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 w-full h-[70%] justify-center items-center  rounded-3xl bg-gray-800/50 p-6 text-white'>
                <input
                  type='text'
                  className='text-sm xl:text-lg w-full p-2 h-[35px] bg-gray-800/50'
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
                <div className='flex justify-between h-[35px] mb-5 relative w-full text-white'>
                  <input
                    type='email'
                    className='text-sm xl:text-lg  w-[60%] p-4 full bg-gray-800/50'
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
                    className='text-sm xl:text-lg w-[35%] p-4 bg-gray-800/50'
                    placeholder='Telefono'
                    name='tel'
                    required
                  />
                  <ValidationError field='tel' errors={state.errors} />
                </div>
                <textarea
                  className='text-sm xl:text-lg   h-2/5 p-4 w-full bg-gray-800/50 text-white'
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
                  className='w-[100px] h-[30px] inline  bg-[#5B5B5B] hover:bg-titlecolordark text-[#CECECE] text-xl bg-gray-300/50 rounded-2xl'
                  type='submit'
                  disabled={state.submitting}>
                  Enviar
                </button>
              </form>
            </div>
          </>
            )
          : (
          <div className='flex flex-col justify-center items-center gap-5 w-full p-5 relative overflow-hidden'>
            <p className='text-blue-400 sm:text-4xl text-2xl text-center'>
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
