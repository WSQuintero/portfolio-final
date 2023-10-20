import React, { useEffect, useRef, useState } from 'react'
import { logos } from '../../db/logos'

function Skills () {
  const [actualSkillLeft, SetActualSkillLeft] = useState('')
  const [actualSkillRight, SetActualSkillRight] = useState('')
  const elements = useRef(null)
  const observerRight = useRef(null)
  const observerLeft = useRef(null)

  useEffect(() => {
    const circles = Array(...elements.current.children)
    const n = 11 // número de círculos
    const r = 220 // radio
    const circleSize = 10 // Tamaño de los círculos

    let angulo = 0

    function checkOverlap (observer, setActualSkill) {
      circles.forEach((circle) => {
        const elementToCheck = observer.current // Puedes elegir el círculo que quieras comprobar
        const targetElement = circle // Puedes elegir el círculo de destino

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

    function animarCirculos () {
      angulo += 0.003 // Movimiento más lento
      const angleIncrement = (2 * Math.PI) / n

      // Obtiene el centro del contenedor
      const containerWidth = elements.current.offsetWidth
      const containerHeight = elements.current.offsetHeight

      circles.forEach((element, i) => {
        const angleOffset = angleIncrement * i

        // Calcula las coordenadas en relación al centro del contenedor
        const x =
          containerWidth / 2 +
          r * Math.cos(angulo + angleOffset) -
          circleSize / 2
        const y =
          containerHeight / 2 +
          r * Math.sin(angulo + angleOffset) -
          circleSize / 2

        element.style.transform = `translate(${x}px, ${y}px)`
      })

      requestAnimationFrame(animarCirculos)
    }

    animarCirculos()

    setInterval(() => {
      checkOverlap(observerLeft, SetActualSkillLeft)
      checkOverlap(observerRight, SetActualSkillRight)
    }, 2000)
  }, [])

  return (
    <section className='flex w-full h-full justify-center items-center bg-bghome p-3'>
      <div className='relative border border-titlecolordark flex justify-center items-center w-full h-full overflow-hidden '>
        <p className='border-b border-titlecolordark text-titlecolordark  w-[300px] h-[50px] font-bevan text-center text-3xl'>
          {actualSkillLeft.toUpperCase()}
        </p>
        <div className='relative  flex justify-center items-center  w-[600px] h-full overflow-hidden '>
          <div
            className='absolute left-0 w-[47px] h-[26px] '
            ref={observerLeft}></div>
          <figure className='absolute  w-[300px] h-[300px] border-2 hover:scale-125 ease-in-out duration-1000 transition-transform border-titlecolordark rounded-full p-5 flex justify-center items-center'>
            <img src='/svg/react.svg' alt='logo react' />
          </figure>
          <div
            className='absolute right-0 w-[47px] h-[26px] '
            ref={observerRight}></div>
          <div
            className='relative flex  justify-center items-center mt-[10px] ml-[10px]'
            ref={elements}>
            {Object.values(logos).map((ur, index) => (
              <figure
                className='absolute w-[100px] h-[100px] rounded-[50%]  flex justify-center items-center bg-gray-300 object-cover '
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
        <p className='border-b border-gray-300 text-gray-300  w-[300px] h-[50px] font-bevan text-center text-3xl'>
          {actualSkillRight.toUpperCase()}
        </p>
      </div>
    </section>
  )
}

export { Skills }
