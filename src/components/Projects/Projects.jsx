import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import { Autoplay, EffectCube, Navigation, Pagination } from 'swiper/modules'
import { projects } from '../../db/projects'
import { TecProjects } from '../TecProjects/TecProjects'

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

  const swiperRef = useRef(null)

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper

    const handleSlideChange = () => {
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex]
      const img = activeSlide.querySelector('img')

      if (img) {
        setProjectName(img.dataset.name || '')
        setProjectDescription(img.dataset.description || '')
        setProjectLink(img.dataset.link || '')
        setProjectRepo(img.dataset.repo || '')
        setProjectTec(img.dataset.tec || [])
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
      id='projects'>
      <div className='relative flex flex-col items-center justify-center w-full h-full overflow-hidden border border-titlecolordark xl:flex-row'>
        <h3 className='w-full p-2 text-xl text-center font-bevan mt-7 xl:absolute top-7 bg-bghometwo/60 text-titlecolor bg-blend-multiply'>
          PROYECTOS
        </h3>
        <div
          className='flex flex-col items-center justify-center w-full h-full xl:flex-row xl:mt-10 '
          ref={skillSection}>
          <div className='relative flex items-center justify-center object-cover w-full h-full overflow-hidden xl:w-2/3 xl:ml-5 rounded-2xl font-open-san'>
            <Swiper
              ref={swiperRef}
              spaceBetween={100}
              effect={'cube'}
              navigation={true}
              pagination={{
                clickable: true
              }}
              speed={1200}
              easing="easeInOutQuart"
              autoplay={true}
              modules={[EffectCube, Navigation, Pagination, Autoplay]}
              loading='lazy'
              className='h-auto mySwiper'>
              {projects.map((project) => (
                <SwiperSlide key={project.project}>
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
                    className='object-cover w-[450px] max-h-[400px] rounded-2xl'
                    loading='lazy'
                  />
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
                <p className='sm:text-sm 2xl:text-xl text-parraf z-20 xl:w-full px-6  h-[70%] font-open-san'>
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
