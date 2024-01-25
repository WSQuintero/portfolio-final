import { IconContext } from 'react-icons'
import { IoIosCloseCircleOutline } from 'react-icons/io'

function Certificate ({ img, setOpenCertificate }) {
  return (
    <section className="w-full h-[100vh] dark:bg-bghometwo/80  bg-bghomelight overflow-hidden flex justify-center items-center left-0 z-50 fixed top-0">
      <button
        onClick={() => setOpenCertificate(null)}
        className="w-[50px] h-[50px] text-white font-bold text-5xl absolute top-5 right-5"
      >
        <IconContext.Provider
          value={{
            className: 'w-full h-full text-titlecolordark dark:text-white'
          }}
        >
          <IoIosCloseCircleOutline />
        </IconContext.Provider>
      </button>
      <img
        className="object-cover bg-no-repeat shadow-2xl  dark:shadow-bghomelight/50 shadow-bghometwo/50 lg:h-[90%] w-[80%] lg:w-auto rounded-2xl dark:filter dark:brightness-75"
        src={img}
        alt={img}
      />
    </section>
  )
}

export default Certificate
