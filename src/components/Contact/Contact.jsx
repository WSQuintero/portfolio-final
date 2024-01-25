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
      className="w-full h-[100vh]  p-3 flex justify-center items-center dark:bg-dark-background"
      id="contact"
    >
      {!state.succeeded
        ? (
        <>
          <div className=" w-full xl:w-[80%] h-full flex justify-center items-center p-5 flex-col ">
          <h2 className="text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5 text-bghomelight  text-left dark:text-titlecolor bg-titlecolordarklight/50 mt-10">
              Contáctame
            </h2>
            <form
              action="https://formspree.io/f/xrgwpvgz"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 w-full h-[75%] justify-center items-center rounded-3xl dark:bg-bghome/50 border border-titlecolordark dark:border-bghomelight/30 bg-titlecolorlight/10 p-6 mt-10 dark:text-bghomelight text-bghometwo  font-open-san"
            >
              <input
                type="text"
                className="text-sm xl:text-md w-full p-2 h-[35px] pl-5 dark:bg-bghome/50 border border-titlecolordark/50 dark:border-bghomelight/30 bg-bghomelight placeholder:text-titlecolordark dark:placeholder:text-bghomelight"
                placeholder="Nombre"
                name="name"
                id="name"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <div className="flex justify-between h-[35px] mb-5 relative w-full dark:text-bghomelight text-bghometwo">
                <input
                  type="email"
                  className="border border-titlecolordark/50 dark:border-bghomelight/30 text-sm xl:text-md w-[60%] p-4 full dark:bg-bghome/50 bg-bghomelight placeholder:text-titlecolordark dark:placeholder:text-bghomelight"
                  placeholder="Correo electrónico"
                  name="email"
                  id="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  type="text"
                  className="border border-titlecolordark/50 dark:border-bghomelight/30 text-sm xl:text-md w-[35%] p-4 dark:bg-bghome/50 bg-bghomelight placeholder:text-titlecolordark dark:placeholder:text-bghomelight"
                  placeholder="Teléfono"
                  name="tel"
                  required
                />
                <ValidationError field="tel" errors={state.errors} />
              </div>
              <textarea
                className=" border border-titlecolordark/50 dark:border-bghomelight/30 w-full p-4 text-sm dark:text-bghomelight dark:bg-bghome/50 bg-bghomelight placeholder:text-titlecolordark dark:placeholder:text-bghomelight"
                placeholder="Deja tu mensaje aquí"
                name="message"
                id="message"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                className="border h-[40px] bg-titlecolordark dark:text-bghomelight text-bghomelight dark:border-titlecolordark border-titlecolordark px-10 py-3 rounded-xl  lg:mt-10  w-[140px]   hover:dark:bg-bghometwolight hover:bg-bghomelight hover:dark:text-titlecolordark hover:text-titlecolordark   font-bold grid place-content-center"
                type="submit"
                disabled={state.submitting}
              >
                Enviar
              </button>
            </form>
          </div>
        </>
          )
        : (
        <div className="relative flex flex-col items-center justify-center w-full gap-5 p-5 overflow-hidden">
          <p className="text-2xl text-center text-blue-400 sm:text-4xl font-open-san">
            Has enviado tu información correctamente, ¡muchas gracias!
          </p>
          <div className="absolute bottom-0 left-0 w-full h-[100vh] z-50">
            {showConfetti && <Confetti />}
          </div>
          <button
            className="z-50 p-3 text-gray-200 border border-gray-200 cursor-pointer bg-bghome dark:bg-dark-bghome rounded-2xl "
            onClick={() => location.reload()}
          >
            Recargar
          </button>
        </div>
          )}
    </section>
  )
}

export { Contact }
