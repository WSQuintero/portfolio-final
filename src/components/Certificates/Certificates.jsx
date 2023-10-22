import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import './Certificates.css'

function Certificates ({ setCetificatesOpen }) {
  return (
    <div className='absolute w-full h-[100vh] p-3 bg-bghometwo'>
      <button onClick={() => setCetificatesOpen(false)} className='bg-white text-bghome w-[30px]'>X</button>
      <div className=' border border-titlecolordark flex justify-center items-center w-full h-full relative '>
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className='mySwiper'>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export { Certificates }
