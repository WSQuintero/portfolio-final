import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import { EffectCube, Navigation, Pagination } from 'swiper/modules'
import { projects } from '../../db/projects'
import { TecProjects } from '../TecProjects/TecProjects'
import { TbHandClick } from 'react-icons/tb'

import './Projects.css'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'
import { IconContext } from 'react-icons'

function Projects ({ skillSection }) {
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [projectRepo, setProjectRepo] = useState('')
  const [projectTec, setProjectTec] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [showHand, setShowHand] = useState(true)
  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperButtonNext = document.querySelector('.swiper-button-next')
    const swiperButtonPrev = document.querySelector('.swiper-button-prev')

    swiperButtonNext.addEventListener('mouseover', () => setShowVideo(false))
    swiperButtonNext.addEventListener('mouseover', () => setShowVideo(false))

    swiperButtonPrev.addEventListener('click', () => setShowHand(false))
    swiperButtonNext.addEventListener('click', () => setShowHand(false))
  }, [])
  const handleMouseLeave = (event) => {
    event.stopPropagation() // Actualizar showVideo solo si estamos en el modo de imagen (no en el modo de video)
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
  const swiperParams = {
    spaceBetween: 40,
    effect: 'cube',
    navigation: true,
    pagination: {
      clickable: true
    },
    speed: 1200,
    easing: 'easeInOutQuart',
    modules: [EffectCube, Navigation, Pagination],
    loading: 'lazy',
    className: 'h-auto mySwiper'
  }
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper

    const handleSlideChange = () => {
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex]
      const img = activeSlide.querySelector('img')
      const video = activeSlide.querySelector('video')

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

    swiperInstance.on('slideChange', handleSlideChange)

    return () => {
      swiperInstance.off('slideChange', handleSlideChange)
    }
  }, [])

  return (
    <section
      className='w-full h-[100vh]  bg-gradient-radial relative p-3'
      onMouseOver={handleMouseLeave}
      id='projects'>
      <div className='relative flex flex-col items-center justify-center w-full h-full overflow-hidden border border-titlecolordark xl:flex-row'>
        <h3 className='w-full p-2 text-xl text-center font-bevan mt-7 xl:absolute top-7 bg-bghometwo/60 text-titlecolor bg-blend-multiply'>
          PROYECTOS
        </h3>
        <div
          className='flex flex-col items-center justify-center w-full h-full xl:flex-row xl:mt-10 '
          ref={skillSection}>
          <div
            className={`relative flex items-center justify-center object-cover w-full ${
              window.innerHeight >= 1024 &&
              window.innerHeight > window.innerWidth
                ? 'h-full'
                : 'h-[300px]'
            } xl:h-full overflow-hidden xl:w-2/3 xl:ml-5 rounded-2xl font-open-san `}>
            <Swiper
              ref={swiperRef}
              {...swiperParams}
              className='h-[88%] xl:h-[400px] mySwiper overflow-hidden'>
              {projects.map((project) => (
                <SwiperSlide key={project.project} onMouseLeave={handleMouseLeave} onClick={handleHoverImg} onMouseOver={handleHoverImg} className='overflow-hidden'>
                  {!showVideo
                    ? (
                      <div className='relative flex justify-center items-center'>

                        <img
                          src={
                            window.innerWidth < 1024
                              ? project.imgMobile
                              : project.imgDesktop
                          }
                          data-name={project.project}
                          data-description={project.description}
                          data-link={project.link}
                          data-repo={project.repo}
                          data-tec={project.tec}
                          alt='project'
                          className='object-contain w-full rounded-2xl animate-fade-in-once z-0 '
                          loading='lazy'
                        />
                        {window.innerWidth < 1040 && showHand &&
                        (

                        <IconContext.Provider value={{ className: 'w-[40px] h-[40px] absolute   z-full animate-pulse  opacity-80', color: '#001A21' }} >
                        <TbHandClick />
                        </IconContext.Provider>
                        )}
                      </div>
                      )
                    : (
                    <video
                      width='100%'
                      height='100%'
                      loading='lazy'
                      muted
                      autoPlay
                      controls={false}
                      data-name={project.project}
                      data-description={project.description}
                      data-link={project.link}
                      data-repo={project.repo}
                      data-tec={project.tec}
                      alt='project'
                      onMouseLeave={handleMouseLeave}
                      className='object-contain w-full h-full rounded-2xl animate-fade-in-once'
                    >
                      <source src={project.video} type='video/mp4' />
                      Tu navegador no soporta el tag de video.
                    </video>
                      )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {projectName && projectDescription && projectTec && (
            <div className='flex flex-col justify-center items-center h-[50%] w-full xl:w-1/3 gap-3  xl:mt-10 '>
              <>
                <h3 className='flex items-center justify-center w-full text-xl text-center text-titlecolor xl:text-xl bg-black/50 font-bevan '>
                  {projectName}
                </h3>
                <p className='text-sm sm:text-lg 2xl:text-xl text-parraf z-20 xl:w-full px-3 xl:px-6  h-full font-open-san'>
                  {projectDescription}
                  <TecProjects tecs={projectTec} />
                </p>
              </>

              <div className='flex justify-around w-full xl:gap-3 xl:p-5 font-open-san'>
                {projectLink && (
                  <a
                    href={projectLink}
                    target='about:blank'
                    className='z-20 w-2/4 p-2 text-center border cursor-pointer border-titlecolordark xl:rounded-xl text-titlecolordark bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                    Visitar
                  </a>
                )}
                {projectRepo && (
                  <a
                    href={projectRepo}
                    target='about:blank'
                    className='z-20 w-2/4 p-2 text-center border cursor-pointer border-titlecolordark xl:rounded-xl text-titlecolordark bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                    ver repositorio
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { Projects }
