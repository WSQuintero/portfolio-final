import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperParams } from '../../../swiperParams/swiperParams'
import { projects } from '../../../db/projects'
import { IconContext } from 'react-icons'
import { TbHandClick } from 'react-icons/tb'

function ProjectGallery ({ swiperRef, showVideo, handleMouseLeave, handleHoverImg, showHand }) {
  return (
    <Swiper
    ref={swiperRef}
    {...swiperParams}
    className='h-[88%] xl:h-full mySwiper  flex justify-center items-center w-full '>
    {projects.map((project) => (
      <SwiperSlide key={project.project} onMouseLeave={handleMouseLeave} onClick={handleHoverImg} onMouseOver={handleHoverImg}>
        {!showVideo
          ? (
            <div className=' flex justify-center items-center relative w-full h-full'>

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
                className='object-contain h-full rounded-2xl animate-fade-in-once z-0 object-center  '
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
            className='object-contain w-full h-full rounded-2xl animate-fade-in-once '
          >
            <source src={project.video} type='video/mp4' />
            Tu navegador no soporta el tag de video.
          </video>
            )}
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export { ProjectGallery }
