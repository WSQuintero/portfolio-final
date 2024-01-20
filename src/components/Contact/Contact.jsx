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
      className='w-full h-[100vh]  p-3 flex justify-center items-center  '
      id='contact'>
        {!state.succeeded
          ? (
          <>
            <div className=' w-full xl:w-[80%] h-full flex justify-center items-center p-5 flex-col '>
            <h2 className='text-xl py-2 px-5 font-bevan font-bold w-full dark:bg-titlecolor/5   text-left text-titlecolor'>
                Contáctame
              </h2>
              <form
                action='https://formspree.io/f/xrgwpvgz'
                method='POST'
                onSubmit={handleSubmit}
                className='flex flex-col gap-2 w-full h-[75%] justify-center items-center  rounded-3xl bg-gray-800/50 p-6 mt-10 text-white  font-open-san'>
                <input
                  type='text'
                  className='text-sm xl:text-md w-full p-2 h-[35px] bg-gray-800/50 pl-5'
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
                    className='text-sm xl:text-md  w-[60%] p-4 full bg-gray-800/50'
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
                    className='text-sm xl:text-md w-[35%] p-4 bg-gray-800/50'
                    placeholder='Telefono'
                    name='tel'
                    required
                  />
                  <ValidationError field='tel' errors={state.errors} />
                </div>
                <textarea
                  className='w-full p-4 text-sm text-white xl:text-md h-2/5 bg-gray-800/50'
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
                  className='w-[100px] h-[30px] inline  bg-[#5B5B5B] hover:bg-titlecolordark text-[#CECECE] text-lg mt-5 bg-gray-300/50 rounded-2xl font-open-san font-bold'
                  type='submit'
                  disabled={state.submitting}>
                  Enviar
                </button>
              </form>
            </div>
          </>
            )
          : (
          <div className='relative flex flex-col items-center justify-center w-full gap-5 p-5 overflow-hidden'>
            <p className='text-2xl text-center text-blue-400 sm:text-4xl font-open-san'>
              Has enviado tu información correctamente, ¡muchas gracias!
            </p>
            <div className='absolute bottom-0 left-0 w-full h-[100vh] z-50'>
              {showConfetti && <Confetti />}
            </div>
            <button
              className='z-50 p-3 text-gray-200 border border-gray-200 cursor-pointer bg-bghome rounded-2xl '
              onClick={() => location.reload()}>
              Recargar
            </button>
          </div>
            )}
    </section>
  )
}

export { Contact }
