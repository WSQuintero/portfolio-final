import { IconContext } from 'react-icons'
import { IoIosCloseCircleOutline } from 'react-icons/io'

function Certificate ({ img, setOpenCertificate }) {
  return (
    <section className='w-full h-[100vh] bg-black/80 overflow-hidden flex justify-center items-center left-0  z-50 fixed  top-0'>
      <button
        onClick={() => setOpenCertificate(null)}
        className='w-[50px] h-[50px] text-white font-bold text-5xl absolute top-5 right-5'>
        <IconContext.Provider value={{ className: 'w-full h-full' }}>
          <IoIosCloseCircleOutline />
        </IconContext.Provider>
      </button>
      <img
        className='object-cover bg-no-repeat lg:h-[90%] w-[80%] lg:w-auto rounded-2xl '
        src={img}
        alt={img}
      />
    </section>
  )
}

export default Certificate