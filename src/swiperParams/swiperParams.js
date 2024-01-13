import { EffectCube, Navigation, Pagination } from 'swiper/modules'

const swiperParams = {
  spaceBetween: 40,
  effect: 'cube',
  navigation: true,
  pagination: {
    clickable: true
  },
  speed: 1200,
  easing: 'easeInOutQuart',
  modules: [EffectCube, Navigation, Pagination],
  loading: 'lazy',
  className: 'h-auto mySwiper'
}

export { swiperParams }
