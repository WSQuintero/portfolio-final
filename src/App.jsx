import { useRef, useEffect } from 'react'
import './App.css'
import { logos } from './db/logos'

function App () {
  const elements = useRef(null)

  useEffect(() => {
    const circles = Array(...elements.current.children)
    const n = 11 // número de círculos
    const r = 200 // radio
    const circleSize = 60 // Tamaño de los círculos

    let angulo = 0
    const originX = circles[0].offsetLeft + circleSize / 2
    const originY = circles[0].offsetTop + circleSize / 2

    function animarCirculos () {
      angulo += 0.003 // Movimiento más lento
      circles.forEach((element, i) => {
        const angleOffset = ((2 * Math.PI) / n) * i
        element.style.left = `${
          originX + r * Math.cos(angulo + angleOffset) - circleSize / 2
        }px`
        element.style.top = `${
          originY + r * Math.sin(angulo + angleOffset) - circleSize / 2
        }px`
      })

      requestAnimationFrame(animarCirculos)
    }

    animarCirculos()
  }, [])
  return (
    <>
      <header></header>
      <main className='h-[100vh] w-full font-cambria'>
        <section className=' w-full h-full  bg-bghome p-3 '>
          <div className='p-10 border border-titlecolordark flex justify-center items-center  w-full h-full background '>
            <div className='flex justify-center items-center h-full p-5 border-t-2 border-b-2 border-gray-400'>
              <div className='w-1/3 flex flex-col items-start justify-center gap-3 h-full'>
                <h1 className='text-titlecolor text-5xl whitespace-break-spaces w-2/4 font-bevan test'>
                  Santiago <span className='text-6xl'>Quintero</span>
                </h1>
                <div className='w-[20%] bg-titlecolor h-[2px] ml-2 mt-2'></div>
                <ul className='w-[120px]'>
                  <li className='text-parraf flex w-full text-lg  justify-between items-center'>
                    <span>
                      <img src='/svg/github.svg' alt='logo github' />
                    </span>
                    <span></span>Git hub
                  </li>
                  <li className='text-parraf flex w-full text-lg  justify-between items-center'>
                    <span>
                      <img
                        src='/svg/linkedin.svg'
                        alt='logo likedin'
                        className='w-full h-full'
                      />
                    </span>
                    LinkedIn
                  </li>
                </ul>
                <button className='border border-titlecolordark p-2 text-titlecolordark w-[120px] bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                  Contactarme
                </button>
              </div>
              <div className='w-1/3 flex flex-col items-start justify-center gap-3'>
                <img
                  src='/img/rostro.png'
                  alt='rostro postulante'
                  className='w-5/6'
                />
              </div>
              <div className='w-1/3 flex flex-col items-start justify-center gap-3'>
                <h3 className='text-titlecolordark text-xl'>Sobre mí</h3>
                <ul>
                  <li className='text-title text-3xl font-bevan'>
                    Desarrollador web
                  </li>
                  <li className='text-title text-3xl font-bevan'>
                    Diseñador visual
                  </li>
                </ul>
                <p className='text-parraf'>
                  Conocimientos avanzados en desarrollo front-end como lo son el
                  diseño, programación y aspectos técnicos de sistemas en
                  general. Así como también experiencia en el trabajo en equipo
                  y el aprendizaje constante.
                </p>
                <button className='border border-titlecolordark p-2 text-titlecolordark w-[120px] bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                  Proyectos
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className='flex w-full h-full justify-center items-center bg-bghome p-3'>
          <div className='relative border border-titlecolordark flex justify-center items-center  w-full h-full overflow-hidden '>
            <div className='relative  flex justify-center items-center  w-[700px] h-full overflow-hidden '>
              <div className='absolute left-0 w-[47%] h-[20px]'></div>
              <figure className='absolute w-[200px] h-[200px]'>
                <img src='/svg/react.svg' alt='logo react' />
              </figure>
              <div className='absolute right-0  w-[47%] h-[20px]'></div>
              <div
                className='relative w-[500px] h-[440px] flex justify-center items-center  '
                ref={elements}>
                {Object.values(logos).map((ur, index) => (
                  <figure
                    className='absolute w-[100px] h-[100px] rounded-[50%] flex justify-center items-center bg-gray-100 object-cover'
                    key={index}>
                    <img
                      src={ur}
                      alt={Object.keys(logos)[index]}
                      className='w-[60%]'
                    />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghome '></section>
        <section className='flex w-full h-full justify-between bg-bghometwo  '></section>
      </main>
      <footer></footer>
    </>
  )
}

export default App
