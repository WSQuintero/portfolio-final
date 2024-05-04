import { useEffect } from 'react'

function useListenVideo({ setShowVideo, setShowHand }) {
  useEffect(() => {
    const swiperButtonNext = document?.querySelector('.swiper-button-next')
    const swiperButtonPrev = document?.querySelector('.swiper-button-prev')
    if (swiperButtonNext && swiperButtonPrev) {
      swiperButtonPrev.addEventListener('mouseover', () => setShowVideo(false))
      swiperButtonNext.addEventListener('mouseover', () => setShowVideo(false))

      swiperButtonPrev.addEventListener('click', () => setShowHand(false))
      swiperButtonNext.addEventListener('click', () => setShowHand(false))
    }
  }, [])
}

export { useListenVideo }
