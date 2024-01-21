import { TecProjects } from '../../TecProjects/TecProjects'

function ProjectInformation ({
  projectName,
  projectDescription,
  projectTec,
  projectRepo,
  projectLink
}) {
  return (
    <>  {projectName && projectDescription && projectTec && (
      <aside className='flex flex-col justify-center items-center h-[50%] w-full xl:w-1/3 gap-3  mt-20 text-pretty z-50 '>
          <h3 className='flex items-center justify-center w-full text-xl text-center dark:text-titlecolor text-titlecolorlight xl:text-xl dark:bg-bghome/50 bg-titlecolordarklight/5 text-titlecolordarklight/60 font-bevan '>
            {projectName}
          </h3>
          <p className='text-parraflight dark:text-parraf z-20 xl:w-full px-3 xl:px-6  h-full font-open-san'>
            {projectDescription}
            <TecProjects tecs={projectTec} />
          </p>
        <div className='flex justify-around w-full xl:gap-3 xl:p-5 font-open-san'>
          {projectLink && (
            <a
              href={projectLink}
              target='about:blank'
              className='z-20 w-2/4 p-2 text-center border cursor-pointer dark:border-titlecolordark border-titlecolordarklight xl:rounded-xl dark:text-titlecolordark text-titlecolordarklight dark:bg-bghome bg-bghomelight hover:bg-titlecolordarklight  dark:hover:text-bghometwo hover:text-bghometwolight hover:font-bold'>
              Visitar
            </a>
          )}
          {projectRepo && (
            <a
              href={projectRepo}
              target='about:blank'
              className='z-20 w-2/4 p-2 text-center border cursor-pointer dark:border-titlecolordark border-titlecolordarklight xl:rounded-xl dark:text-titlecolordark text-titlecolordarklight dark:bg-bghome bg-bghomelight hover:bg-titlecolordarklight  dark:hover:text-bghometwo hover:text-bghometwolight hover:font-bold'>

              ver repositorio
            </a>
          )}
        </div>
      </aside>
    )}</>
  )
}

export default ProjectInformation
