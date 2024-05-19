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
              data-vid={project.video}
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
            <iframe
              alt='project'
              className='object-contain h-full w-full rounded-3xl animate-fade-in-once z-0 absolute top-0  '
              loading='lazy'
              muted
              controls={false}
              data-name={project.project}
              data-description={project.description}
              data-link={project.link}
              data-repo={project.repo}
              data-tec={project.tec}
              onMouseLeave={handleMouseLeave}
              width='560'
              height='315'
              src={`${project.video}?autoplay=1&loop=1&mute=1&controls=0`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { ProjectGallery }
