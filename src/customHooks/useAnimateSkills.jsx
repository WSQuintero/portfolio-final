import { useEffect, useState } from 'react'
import { logos } from '../db/logos'

function useAnimateSkills ({
  elements,
  observerRight,
  observerLeft,
  skillSection
}) {
  const [circlesIsActive, setCirclesIsActive] = useState(false)
  const [actualSkillLeft, SetActualSkillLeft] = useState('')
  const [actualSkillRight, SetActualSkillRight] = useState('')
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [radio, setRadio] = useState(null)

  const numCircles = Object.values(logos).length
  const circleSize = 15.2
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
    const circles = elements.current.children

    const elementToCheck = observer.current.getBoundingClientRect()

    const overlappedCircle = Array.from(circles).find((circle) => {
      const targetRect = circle.getBoundingClientRect()

      // Verifica si los elementos se superponen en el eje horizontal
      const isOverlapX =
        elementToCheck.left < targetRect.right && elementToCheck.right > targetRect.left

      // Verifica si los elementos se superponen en el eje vertical
      const isOverlapY =
        elementToCheck.top < targetRect.bottom && elementToCheck.bottom > targetRect.top

      return isOverlapX && isOverlapY
    })

    if (overlappedCircle) {
      setActualSkill(overlappedCircle.querySelector('img').getAttribute('alt'))
    }
  }

  const animateCircles = () => {
    const circles = Array.from(elements.current.children)

    angulo += 0.005 // Movimiento más lento
    const angleIncrement = (2 * Math.PI) / numCircles

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

      setTimeout(() => {
        checkOverlap(observerLeft, SetActualSkillLeft)
        checkOverlap(observerRight, SetActualSkillRight)
      }, 100)
    }
  }

  useEffect(() => {
    setRadio(innerWidth < 1279 ? 120 : 200) // radio

    observer.observe(skillSection.current)
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)
    })

    animateCircles()

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', () => {
        setInnerWidth(window.innerWidth)
      })
    }
  }, [circlesIsActive, innerWidth])

  return { circlesIsActive, actualSkillLeft, actualSkillRight }
}

export { useAnimateSkills }
