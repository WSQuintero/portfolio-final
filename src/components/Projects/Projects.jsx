import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { projects } from '../../db/projects'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import './Projects.css'

function Projects ({ setCetificatesOpen }) {
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [projectRepo, setProjectRepo] = useState('')
  const [isClickImg, setIsClickImg] = useState(false)

  useEffect(() => {
    const wrapper = document.querySelector('.swiper-wrapper')
    wrapper.classList.add('my-wrapper')
    if (isClickImg) {
      wrapper.classList.remove('my-wrapper')
    }
  }, [isClickImg])

  return (
    <section
      className=' w-full min-h-[100vh] h-full p-3 bg-gradient-radial relative  '
      id='projects'>
      <div className=' border border-titlecolordark flex xl:flex-row flex-col justify-center items-center w-full min-h-[100vh] relative overflow-hidden '>
        <img
          src='/img/ai_Mesa de trabajo 1.png'
          alt='fondo ai'
          className='absolute mix-blend-lighten opacity-10'
        />
        <h3 className=' font-bold text-5xl  xl:absolute top-7 bg-bghometwo/60  w-full  text-gray-200 p-5 bg-blend-multiply text-center'>
          PROYECTOS
        </h3>
        {!isClickImg && (
          <img
            src='/svg/click.svg'
            alt='click'
            className='w-[60px] absolute z-50 xl:hidden click cursor-pointer'
            onClick={() => {
              setIsClickImg(true)
            }}
          />
        )}
        <div className='flex w-full h-full justify-between items-center xl:flex-row flex-col'>
          <div className='flex justify-center items-center h-full xl:w-1/3 w-full'>
            {projectName && (
              <h3 className='text-4xl text-titlecolor h-[100px] flex justify-center items-center text-center bg-black/50 w-full'>
                {projectName}
              </h3>
            )}
          </div>
          <div className='relative xl:w-1/3 w-full h-full flex  justify-center items-center'>
            <Swiper
              effect={'cube'}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.01
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}
              className='mySwiper xl:mt-10 relative xl:absolute'>
              {projects.map((project) => (
                <SwiperSlide key={project.project}>
                  <img
                    src={project.img}
                    onMouseOver={() => {
                      setProjectName(project.project)
                      setProjectDescription(project.description)
                      setProjectLink(project.link)
                      setProjectRepo(project.repo)
                      setIsClickImg(true)
                    }}
                    onClick={() => {
                      setIsClickImg(true)
                    }}
                    data-name={project.project}
                    data-description={project.description}
                    data-link={project.link}
                    data-repo={project.repo}
                    alt='project'
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='flex flex-col justify-center items-center h-full w-full xl:w-1/3 p-3 pl-10 gap-3 bottom-5 xl:bottom-auto'>
            <p className='sm:text-md 2xl:text-xl text-white z-20  sm:w-[300px] 2xl:w-[400px] '>
              {projectDescription}
            </p>
            <div className='flex gap-3 w-full justify-around p-10'>
              {projectLink && (
                <a
                  href={projectLink}
                  target='about:blank'
                  className='border border-titlecolordark p-2 cursor-pointer z-20 rounded-xl text-titlecolordark w-2/4 text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                  Visitar
                </a>
              )}
              {projectRepo && (
                <a
                  href={projectRepo}
                  target='about:blank'
                  className='border border-titlecolordark p-2 w-2/4 cursor-pointer z-20 rounded-xl text-titlecolordark  text-center bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
                  ver repositorio
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Projects }
