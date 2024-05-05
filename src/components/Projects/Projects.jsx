import { useEffect, useRef, useState } from 'react'
import { useListenVideo } from '../../customHooks/useListenVideo'
import { useShowVideo } from '../../customHooks/useShowVideo'
import { ProjectGallery } from './ProjectGallery/ProjectGallery'
import ProjectInformation from './ProjectInformation/ProjectInformation'

import './Projects.css'
import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/navigation'
import clsx from 'clsx'
import { backProjects, mobileProjects, webProjects } from '../../db/projects'
import CardSelectCategory from '../CardSelectCategory/CardSelectCategory'

function Projects({ skillSection }) {
  const [projectName, setProjectName] = useState('')
  const [projectDescription, setProjectDescription] = useState('')
  const [projectLink, setProjectLink] = useState('')
  const [projectRepo, setProjectRepo] = useState('')
  const [projectTec, setProjectTec] = useState(null)
  const [projectVid, setProjectVid] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [showHand, setShowHand] = useState(true)
  const swiperRef = useRef(null)
  const [category, setCategory] = useState(null)
  const [projects, setProjects] = useState([])

  const galleryContainer = clsx(
    'relative flex items-center justify-center xl:w-[60%] w-full   xl:h-full  xl:ml-5 rounded-2xl font-open-san '
  )

  const reset = () => {
    setShowVideo(true)

    setProjectName(null)
    setProjectDescription(null)
    setProjectLink(null)
    setProjectRepo(null)
    setProjectTec(null)
    setProjectVid(null)
  }

  useListenVideo({ setShowVideo, setShowHand })
  useShowVideo({
    setShowVideo,
    setProjectName,
    setProjectDescription,
    setProjectLink,
    setProjectRepo,
    setProjectTec,
    swiperRef,
    category,
    reset
  })

  const handleMouseLeave = (event) => {
    event.stopPropagation()
    if (showVideo) {
      setShowVideo(false)
    }
  }

  const handleHoverImg = (event) => {
    event.stopPropagation()
    const swiperInstance = swiperRef?.current?.swiper
    const activeSlide = swiperInstance.slides[swiperInstance.activeIndex]
    const img = activeSlide.querySelector('img')

    if (img) {
      reset()
      setShowVideo(true)

      setProjectName(img.dataset.name || '')
      setProjectDescription(img.dataset.description || '')
      setProjectLink(img.dataset.link || '')
      setProjectRepo(img.dataset.repo || '')
      setProjectTec(img.dataset.tec || [])
      setProjectVid(img.dataset.vid || '')
    }
  }

  useEffect(() => {
    reset()
    if (category === 'web') {
      setProjects(webProjects)
    } else if (category === 'mobile') {
      setProjects(mobileProjects)
    } else {
      setProjects(backProjects)
    }

    if (swiperRef?.current) {
      swiperRef.current.swiper.slideTo(0)
    }
  }, [category, webProjects, mobileProjects, backProjects])

  return (
    <section
      className='w-[80%] min-h-[50vh]  relative  flex flex-col justify-start items-center'
      onMouseOver={handleMouseLeave}
      id='projects'>
      <h2 className='text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5 text-bghomelight  text-left dark:text-titlecolor bg-titlecolordarklight/50 mt-10'>
        Proyectos
      </h2>
      <div className=' w-full  lg:h-full'>
        {category && (
          <div className='w-full flex justify-end'>
            <select
              name='projects'
              id='projects'
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className='px-4 py-2 mt-2 border border-titlecolordark bg-transparent rounded-xl text-titlecolordark'>
              <option value='' disabled selected>
                Seleccione
              </option>
              <option value='web' className='text-black'>
                Aplicaciones web
              </option>
              <option value='mobile' className='text-black'>
                Aplicaciones móviles
              </option>
              <option value='back' className='text-black'>
                Aplicaciones Backend
              </option>
              //{' '}
            </select>
          </div>
        )}
        <div
          className={`flex flex-col mt-3 items-center ${projectName ? 'justify-center' : 'justify-start lg:justify-center mt-10'}  xl:flex-row  w-full  lg:h-full`}
          ref={skillSection}>
          {category && (
            <>
              <div className={galleryContainer}>
                <ProjectGallery
                  swiperRef={swiperRef}
                  showVideo={showVideo}
                  handleMouseLeave={handleMouseLeave}
                  handleHoverImg={handleHoverImg}
                  showHand={showHand}
                  projects={projects}
                />
              </div>
              <ProjectInformation
                projectName={projectName}
                projectDescription={projectDescription}
                projectTec={projectTec}
                projectRepo={projectRepo}
                projectLink={projectLink}
                projectVid={projectVid}
              />
            </>
          )}
        </div>
        <div className='w-full flex  mt-10 justify-around flex-wrap gap-5'>
          <CardSelectCategory
            title={'Aplicaciones móviles'}
            img={'/img/mobile.png'}
            description={['/img/react-native.png', '/img/expo.png']}
            footer={'Proyetos móviles'}
            setCategory={setCategory}
            open={'mobile'}
            reset={reset}
          />
          <CardSelectCategory
            title={'Aplicaciones web'}
            img={'/img/pc.png'}
            description={[
              '/svg/react.svg',
              '/svg/tailwind.svg',
              '/svg/typescript.svg',
              '/svg/redux.svg',
              '/svg/sass.svg'
            ]}
            setCategory={setCategory}
            open={'web'}
            footer={'Proyectos web'}
            reset={reset}
          />

          <CardSelectCategory
            title={'Backend'}
            img={'/img/back.png'}
            description={['/img/node.png', '/svg/firebase.svg']}
            footer={'Proyectos backend'}
            setCategory={setCategory}
            open={'back'}
            reset={reset}
          />
        </div>
      </div>
    </section>
  )
}

export { Projects }
