import { imagesStudies } from '../../db/studies'
import ImageGallery from 'react-image-gallery'
import { useEffect, useState } from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'
import './certificates.css'

function Certificates ({ setCetificatesOpen }) {
  const [isMobileVersion, setIsMobileVersion] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1200) {
      setIsMobileVersion(true)
    }
  }, [])

  return (
    <div className="dark:bg-bghome bg-bghomelight w-full h-[100vh] p-5 z-50 fixed top-0">
      <button
        onClick={() => setCetificatesOpen(false)}
        className="text-2xl w-[50px] h-[50px] flex justify-center items-center dark:text-titlecolordark hover:text-gray-200 z-50 absolute right-5 xl:right-20 border-2 border-titlecolor rounded-full bg-white dark:bg-gray-800 top-10 font-bold font-sans"
      >
        X
      </button>
      <ImageGallery
        items={imagesStudies}
        additionalClass="image-gallery"
        thumbnailPosition={isMobileVersion ? 'bottom' : 'left'}
        className="rounded-3xl"
      />
    </div>
  )
}

export { Certificates }
