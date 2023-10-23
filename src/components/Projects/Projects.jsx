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
    <div className=' w-full h-[100vh] p-3 bg-gradient-radial relative'>
      <div className=' border border-titlecolordark flex justify-center items-center w-full h-full  relative'>
        <h3 className='text-titlecolordark font-bold text-6xl  absolute top-7 border-b-2 border-titlecolordark pb-5'>
          Proyectos
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
