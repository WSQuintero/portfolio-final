import React, { useEffect, useRef, useState } from 'react'
import { logos } from '../../db/logos'
import './Skills.css'
import { Certificates } from '../Certificates/Certificates'
// import { Projects } from '../Projects/Projects'

function Skills () {
  const [circlesIsActive, setCirclesIsActive] = useState(false)
  const [actualSkillLeft, SetActualSkillLeft] = useState('')
  const [actualSkillRight, SetActualSkillRight] = useState('')
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [radio, setRadio] = useState(null)

  const [cetificatesOpen, setCetificatesOpen] = useState(false)
  const elements = useRef(null)
  const observerRight = useRef(null)
  const observerLeft = useRef(null)
  const skillSection = useRef(null)
  const n = Object.values(logos).length // número de círculos
  useEffect(() => {
    setRadio(innerWidth < 1279 ? 120 : 220) // radio
  }, [innerWidth])
  const circleSize = 10 // Tamaño de los círculos
  let angulo = 0

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setCirclesIsActive(true)
      } else {
        setCirclesIsActive(false)
      }
    })
  })

  const checkOverlap = (observer, setActualSkill) => {
    const circles = Array(...elements.current.children)

    circles.forEach((circle) => {
      const elementToCheck = observer.current
      const targetElement = circle

      const elementRect = elementToCheck.getBoundingClientRect()
      const targetRect = targetElement.getBoundingClientRect()

      // Verifica si los elementos se superponen en el eje horizontal
      const isOverlapX =
        elementRect.left < targetRect.right &&
        elementRect.right > targetRect.left

      // Verifica si los elementos se superponen en el eje vertical
      const isOverlapY =
        elementRect.top < targetRect.bottom &&
        elementRect.bottom > targetRect.top

      if (isOverlapX && isOverlapY) {
        setActualSkill(circle.querySelector('img').getAttribute('alt'))
      }
    })
  }

  const animateCircles = () => {
    const circles = Array(...elements.current.children)

    angulo += 0.005 // Movimiento más lento
    const angleIncrement = (2 * Math.PI) / n

    // Obtiene el centro del contenedor
    const containerWidth = elements.current.offsetWidth
    const containerHeight = elements.current.offsetHeight

    circles.forEach((element, i) => {
      const angleOffset = angleIncrement * i

      // Calcula las coordenadas en relación al centro del contenedor
      const x =
        containerWidth / 2 +
        radio * Math.cos(angulo + angleOffset) -
        circleSize / 2
      const y =
        containerHeight / 2 +
        radio * Math.sin(angulo + angleOffset) -
        circleSize / 2

      element.style.transform = `translate(${x}px, ${y}px)`
    })

    if (circlesIsActive) {
      requestAnimationFrame(animateCircles)
      setInterval(() => {
        checkOverlap(observerLeft, SetActualSkillLeft, circles)
        checkOverlap(observerRight, SetActualSkillRight, circles)
      }, 100)
    }
  }

  useEffect(() => {
    observer.observe(skillSection.current)
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)
    })
  }, [])

  useEffect(() => {
    animateCircles()
  }, [circlesIsActive, innerWidth])

  const openCertificates = () => {
    setCetificatesOpen(true)
  }
  return (
    <section
      className='min-h-[100vh] sm:h-[100vh] flex w-full  justify-center items-center bg-bghome p-3 mt-1 '
      ref={skillSection}
      id='skills'>
      <div className='relative border border-titlecolordark flex xl:flex-row flex-col justify-center items-center w-full min-h-[100vh] xl:h-[100vh] overflow-hidden background-js'>
        <p className='border-b border-titlecolordark text-titlecolordark mb-5  xl:pb-10 w-[300px] xl:h-[50px] font-bevan text-center text-xl xl:text-3xl p-5 xl:mt-0'>
          {actualSkillLeft.toUpperCase()}
        </p>
        <div className='relative  flex justify-center items-center w-full h-[300px] xl:h-full xl:w-[600px] overflow-hidden '>
          <div
            className='absolute xl:left-0 top-0 xl:top-auto w-[47px] h-[26px] '
            ref={observerLeft}></div>
          <figure className='absolute rotate w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] border-2 hover:scale-125 ease-in-out duration-1000 transition-transform border-titlecolordark rounded-full p-5 flex justify-center items-center'>
            <img src='/svg/react.svg' alt='logo react' />
          </figure>
          <div
            className='absolute xl:right-0 bottom-0 xl:bottom-auto w-[47px] h-[26px] '
            ref={observerRight}></div>
          <div
            className='relative flex  justify-center items-center mt-[20px] ml-[10px]'
            ref={elements}>
            {Object.values(logos).map((ur, index) => (
              <React.Fragment key={index}>
                {circlesIsActive && (
                  <figure className='absolute w-[50px] h-[50px] xl:w-[100px] xl:h-[100px] rounded-[50%]  flex justify-center items-center bg-gray-300 object-cover '>
                    <img
                      src={ur}
                      alt={Object.keys(logos)[index]}
                      className='w-[60%]'
                    />
                  </figure>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <p className='xl:border-b border-t xl:border-t-transparent border-titlecolordark text-titlecolordark  w-[300px] p-5 xl:h-[50px]  xl:pb-10 font-bevan text-center text-xl xl:text-3xl'>
            {actualSkillRight.toUpperCase()}
          </p>
          <button
            className='bg-white h-[30px] rounded-2xl font-semibold mb-5 xl:mb-0 text-bghometwo hidden xl:block'
            onClick={openCertificates}>
            Certificados
          </button>
        </div>
      </div>
      {cetificatesOpen && (
        <Certificates setCetificatesOpen={setCetificatesOpen} />
      )}
    </section>
  )
}

export { Skills }
