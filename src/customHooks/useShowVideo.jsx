import { useEffect } from 'react'

function useShowVideo({
  setShowVideo,
  setProjectName,
  setProjectDescription,
  setProjectLink,
  setProjectRepo,
  setProjectTec,
  swiperRef,
  category
}) {
  useEffect(() => {
    const swiperInstance = swiperRef?.current?.swiper

    const handleSlideChange = () => {
      const activeSlide = swiperInstance?.slides[swiperInstance.activeIndex]
      const img = activeSlide?.querySelector('img')
      const video = activeSlide?.querySelector('video')

      setShowVideo(false)
      if (img) {
        setProjectName(img.dataset.name || '')
        setProjectDescription(img.dataset.description || '')
        setProjectLink(img.dataset.link || '')
        setProjectRepo(img.dataset.repo || '')
        setProjectTec(img.dataset.tec || [])
      } else {
        setProjectName(video.dataset.name || '')
        setProjectDescription(video.dataset.description || '')
        setProjectLink(video.dataset.link || '')
        setProjectRepo(video.dataset.repo || '')
        setProjectTec(video.dataset.tec || [])
      }
    }
    swiperInstance?.on('slideChange', handleSlideChange)

    return () => {
      if (swiperRef) {
        swiperInstance?.off('slideChange', handleSlideChange)
      }
    }
  }, [swiperRef, category])
}

export { useShowVideo }
