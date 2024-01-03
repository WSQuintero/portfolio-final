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

  const n = Object.values(logos).length // número de círculos

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [radio, setRadio] = useState(null)

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
    const circles = [...elements.current.children]

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
    const circles = [...elements.current.children]

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

  return { circlesIsActive, actualSkillLeft, actualSkillRight, skillSection, observerLeft }
}

export { useAnimateSkills }
