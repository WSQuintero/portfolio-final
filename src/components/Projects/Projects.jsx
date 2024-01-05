import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { projects } from '../../db/projects'

import './Projects.css'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

function Projects () {
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [projectRepo, setProjectRepo] = useState('')

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
      <div className='border border-titlecolordark flex xl:flex-row flex-col justify-center items-center w-full  relative overflow-hidden h-full'>
        <h3 className='font-bevan  text-xl  mt-7 xl:absolute top-7 bg-bghometwo/60 w-full  text-titlecolor p-2 bg-blend-multiply text-center'>
          PROYECTOS
        </h3>
        <div className='flex w-full h-full justify-center items-center xl:flex-row flex-col xl:mt-10 '>
          <div className='relative xl:w-2/3 w-full h-full flex  xl:ml-5 justify-center items-center rounded-2xl overflow-hidden object-cover'>
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              effect={'fade'}
              navigation={true}
              pagination={{
                clickable: true
              }}
              autoplay={true}
              modules={[EffectFade, Navigation, Pagination, Autoplay]}
              loading='lazy'
              className='mySwiper h-auto'>
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
                    alt='project'
                    className='object-cover w-[450px] max-h-[400px] rounded-2xl'
                    loading='lazy'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {projectName && projectDescription && (
            <div className='flex flex-col justify-center items-center h-[50%] w-full xl:w-1/3 gap-3  xl:mt-10 '>
              <>
                <h3 className='text-xl text-titlecolor xl:text-2xl flex justify-center items-center text-center bg-black/50 w-full font-bevan '>
                  {projectName}
                </h3>
                <p className='sm:text-sm 2xl:text-xl text-white z-20 xl:w-full px-6  h-[70%] '>
                  {projectDescription}
                </p>
              </>

              <div className='flex  w-full justify-around xl:gap-3 xl:p-5'>
                {projectLink && (
                  <a
                    href={projectLink}
                    target='about:blank'
                    className='border border-titlecolordark p-2 cursor-pointer z-20 xl:rounded-xl text-titlecolordark w-2/4 text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                    Visitar
                  </a>
                )}
                {projectRepo && (
                  <a
                    href={projectRepo}
                    target='about:blank'
                    className='border border-titlecolordark p-2 w-2/4 cursor-pointer z-20 xl:rounded-xl text-titlecolordark text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
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
