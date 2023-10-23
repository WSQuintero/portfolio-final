import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import { useEffect } from 'react'
import { projects } from '../../db/projects'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import './Projects.css'

function Projects ({ setCetificatesOpen }) {
  useEffect(() => {
    const wrapper = document.querySelector('.swiper-wrapper')
    wrapper.classList.add('my-wrapper')

    wrapper.addEventListener('mouseout', () => {
      wrapper.classList.remove('my-wrapper')
    })
  }, [])
  return (
    <div className=' w-full h-[100vh] p-3 bg-gradient-radial relative '>
      <div className=' border border-titlecolordark flex justify-center items-center w-full h-full relative overflow-hidden'>
        <img
          src='/img/ai_Mesa de trabajo 1.png'
          alt='fondo ai'
          className='absolute mix-blend-lighten opacity-10'
        />

        <h3 className=' font-bold text-5xl  absolute top-7 bg-bghometwo/60  w-full  text-gray-200 p-5 bg-blend-multiply text-center'>
          PROYECTOS
        </h3>
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
          className='mySwiper mt-10'>
          {projects.map((project) => (
            <SwiperSlide key={project.project}>
              <img src={project.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export { Projects }
