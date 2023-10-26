import { imagesStudies } from '../../db/studies'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './certificates.css'

function Certificates ({ setCetificatesOpen }) {
  return (
    <div className='background absolute w-full h-full p-5 hidden xl:block'>
      <button
        onClick={() => setCetificatesOpen(false)}
        className='text-6xl text-titlecolordark  hover:text-gray-200 z-50 absolute right-20 border-2 border-titlecolor rounded-full p-5 top-10 font-bold font-sans'>
        X
      </button>
      <ImageGallery
        items={imagesStudies}
        additionalClass='image-gallery'
        thumbnailPosition='left'
      />
    </div>
  )
}

export { Certificates }
