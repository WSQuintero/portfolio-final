import { Swiper, SwiperSlide } from 'swiper/react'
import { swiperParams } from '../../../swiperParams/swiperParams'
import { IconContext } from 'react-icons'
import { TbHandClick } from 'react-icons/tb'

function ProjectGallery({
  swiperRef,
  showVideo,
  handleMouseLeave,
  handleHoverImg,
  showHand,
  projects
}) {
  return (
    <Swiper
      ref={swiperRef}
      {...swiperParams}
      className='h-[88%] xl:h-full mySwiper  flex justify-center items-center w-full rounded-3xl  '>
      {projects?.map((project, index) => (
        <SwiperSlide
          key={project.project + index}
          onMouseLeave={handleMouseLeave}
          onClick={handleHoverImg}
          onMouseOver={handleHoverImg}>
          <div className=' flex justify-center items-center relative w-full  h-[100vh] max-h-[400px]  rounded-3xl object-cover '>
            <img
              src={project.imgDesktop}
              data-name={project.project}
              data-description={project.description}
              data-link={project.link}
              data-repo={project.repo}
              data-tec={project.tec}
              alt='project'
              className='object-contain h-full w-full rounded-3xl animate-fade-in-once z-0   '
              loading='lazy'
            />
            {window.innerWidth < 1040 && showHand && (
              <IconContext.Provider
                value={{
                  className:
                    'w-[40px] h-[40px] absolute   z-full animate-pulse  opacity-80',
                  color: '#001A21'
                }}>
                <TbHandClick />
              </IconContext.Provider>
            )}
          </div>

          {showVideo && (
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
              className='object-contain h-full w-full rounded-3xl animate-fade-in-once z-0 absolute top-0  '>
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
