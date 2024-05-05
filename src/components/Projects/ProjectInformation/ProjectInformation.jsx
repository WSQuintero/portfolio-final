import React, { useEffect, useState } from 'react'
import { TecProjects } from '../../TecProjects/TecProjects'
import ModalDetailProject from '../../ModalDetailProject/ModalDetailProject'

function ProjectInformation({
  projectName,
  projectDescription,
  projectTec,
  projectRepo,
  projectLink,
  projectVid
}) {
  const [open, setOpen] = useState(false)

  const [actualProject, setActualProject] = useState({})

  useEffect(() => {
    setActualProject({
      projectName,
      projectDescription,
      projectTec,
      projectRepo,
      projectLink,
      projectVid
    })
  }, [
    projectVid,
    projectLink,
    projectRepo,
    projectTec,
    projectDescription,
    projectName,
    open
  ])
  return (
    <>
      {projectName && projectDescription && projectTec && (
        <aside className='flex flex-col justify-center items-center h-[300px] bg-bghomelight dark:bg-bghometwo rounded-2xl w-full xl:w-1/3 gap-3 mt-10 lg:mt-0 text-pretty z-40'>
          <h3 className='flex items-center justify-center w-full text-xl dark:text-titlecolor text-titlecolorlight xl:text-xl dark:bg-bghome/50 bg-titlecolordark/5 font-bevan mt-3'>
            {projectName}
          </h3>
          <div
            className='text-parraflight dark:text-parraf z-20 w-full px-3 xl:px-6 2xl:text-xl h-full font-open-san text-pretty'
            dangerouslySetInnerHTML={{
              __html: `${projectDescription.slice(0, 320)}...`
            }}
          />
          <TecProjects tecs={projectTec} />
          <div className='flex gap-2 justify-center w-full xl:gap-3 xl:p-5 font-open-san'>
            {projectLink && (
              <a
                href={projectLink}
                target='_blank'
                rel='noopener noreferrer'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                Visitar
              </a>
            )}
            {projectRepo && (
              <div className='flex gap-2'>
                <a
                  href={projectRepo}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                  Ver repositorio
                </a>
                <button
                  onClick={() => setOpen(true)}
                  className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[100px] text-center hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                  Ver detalle
                </button>
              </div>
            )}
          </div>
        </aside>
      )}
      {actualProject?.projectVid && (
        <ModalDetailProject
          actualProject={actualProject}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  )
}

export default ProjectInformation
