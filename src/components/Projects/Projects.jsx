import { useRef, useState } from 'react'
import { useListenVideo } from '../../customHooks/useListenVideo'
import { useShowVideo } from '../../customHooks/useShowVideo'
import { ProjectGallery } from './ProjectGallery/ProjectGallery'
import ProjectInformation from './ProjectInformation/ProjectInformation'

import './Projects.css'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'

function Projects ({ skillSection }) {
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [projectRepo, setProjectRepo] = useState('')
  const [projectTec, setProjectTec] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [showHand, setShowHand] = useState(true)
  const swiperRef = useRef(null)

  const galleryContainer = 'relative flex items-center justify-center xl:w-[60%] w-full   xl:h-full  xl:ml-5 rounded-2xl font-open-san '

  useListenVideo({ setShowVideo, setShowHand })
  useShowVideo({
    setShowVideo,
    setProjectName,
    setProjectDescription,
    setProjectLink,
    setProjectRepo,
    setProjectTec,
    swiperRef
  })

  const handleMouseLeave = (event) => {
    event.stopPropagation()
    if (showVideo) {
      setShowVideo(false)
    }
  }

  const handleHoverImg = (event) => {
    event.stopPropagation()
    const swiperInstance = swiperRef.current.swiper
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex]
    const img = activeSlide.querySelector('img')

    if (img) {
      setShowVideo(true)

      setProjectName(img.dataset.name || '')
      setProjectDescription(img.dataset.description || '')
      setProjectLink(img.dataset.link || '')
      setProjectRepo(img.dataset.repo || '')
      setProjectTec(img.dataset.tec || [])
    }
  }

  return (
    <section
      className='w-[80%] min-h-[50vh]  relative p-3 flex flex-col justify-start items-center'
      onMouseOver={handleMouseLeave}
      id='projects'>
            <h2 className='text-xl py-2 px-5 font-bevan font-bold w-full dark:bg-titlecolor/5   text-left text-titlecolor mt-10'>
          Proyectos
        </h2>
        <div
          className={`flex flex-col items-center ${projectName ? 'justify-center' : 'justify-start'} xl:flex-row  w-full overflow-hidden lg:h-full`}
          ref={skillSection}>
          <div className={galleryContainer}>
            <ProjectGallery
              swiperRef={swiperRef}
              showVideo={showVideo}
              handleMouseLeave={handleMouseLeave}
              handleHoverImg={handleHoverImg}
              showHand={showHand}
            />
          </div>
          <ProjectInformation
            projectName={projectName}
            projectDescription={projectDescription}
            projectTec={projectTec}
            projectRepo={projectRepo}
            projectLink={projectLink}
          />
        </div>
    </section>
  )
}

export { Projects }
