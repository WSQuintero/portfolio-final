import { useEffect } from 'react'

function useInitialAnimate ({ setIsOpenHeader, setInitialAnimate, skillSection, initialAnimate }) {
  useEffect(() => {
    setTimeout(() => {
      setInitialAnimate(true)
    }, 2000)

    if (window.innerWidth < 1024) {
      setIsOpenHeader(true)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (window.innerWidth > 1024) {
            setIsOpenHeader(false)
          }
        }
      })
    })
    if (skillSection.current) {
      observer.observe(skillSection.current)
    }
  }, [initialAnimate])
}

export { useInitialAnimate }
