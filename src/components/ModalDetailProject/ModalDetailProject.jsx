import React from 'react'

function ModalDetailProject({ actualProject, open, setOpen }) {
  return (
    <>
      {open && (
        <div className='w-full h-full fixed top-0 bg-black bg-opacity-65 z-50 flex justify-center items-center'>
          <div className='w-[70%] h-[80vh] overflow-auto bg-black shadow-lg shadow-gray-600 border-dashed p-10'>
            <div className='w-full flex justify-end'>
              <button
                onClick={() => setOpen(false)}
                className='w-[30px] h-[30px] text-white border border-white rounded-full'>
                X
              </button>
            </div>
            <div className='flex justify-center'>
              <iframe
                alt='project'
                className='object-contain  w-full rounded-3xl animate-fade-in-once z-0 '
                loading='lazy'
                muted
                controls={false}
                width='560'
                height='560'
                src={`${actualProject.projectVid}`}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
              />
            </div>
            <h2 className='w-full p-3 border-white border mt-5 border-dashed text-center text-xl lg:text-4xl text-titlecolordark'>
              {actualProject?.projectName}
            </h2>
            <p
              className='mt-5 text-white'
              dangerouslySetInnerHTML={{
                __html: actualProject && actualProject.projectDescription
              }}></p>

            <div className='flex gap-2 p-3 justify-center'>
              <a
                href={actualProject?.projectLink}
                target='about_blank'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                Visitar
              </a>
              <a
                href={actualProject?.projectRepo}
                target='about_blank'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                Ver repositorio
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalDetailProject
