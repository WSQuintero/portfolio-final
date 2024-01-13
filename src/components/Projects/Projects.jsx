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

  const galleryContainer = 'relative flex items-center justify-center xl:w-[70%] w-full   xl:h-[430px] mt-3  xl:ml-5 rounded-2xl font-open-san '

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
      className='w-full h-[100vh]  bg-gradient-radial relative p-3'
      onMouseOver={handleMouseLeave}
      id='projects'>
      <div className='relative flex flex-col items-center justify-center w-full h-full  border border-titlecolordark xl:flex-row'>
        <h3 className='w-full p-2 text-xl text-center font-bevan mt-7 xl:absolute top-7 bg-bghometwo/60 text-titlecolor bg-blend-multiply'>
          PROYECTOS
        </h3>
        <div
          className='flex flex-col items-center justify-center xl:mt-5 w-full h-full xl:flex-row  '
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
      </div>
    </section>
  )
}

export { Projects }
