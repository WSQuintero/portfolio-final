import { TecProjects } from '../../TecProjects/TecProjects'

function ProjectInformation ({
  projectName,
  projectDescription,
  projectTec,
  projectRepo,
  projectLink
}) {
  return (
    <>
      {' '}
      {projectName && projectDescription && projectTec && (
        <aside className='flex flex-col justify-center items-center h-[300px] bg-bghomelight dark:bg-bghometwo rounded-2xl w-full xl:w-1/3 gap-3 mt-10 lg:mt-0   text-pretty z-50 '>
          <h3 className='flex items-center justify-center w-full text-xl  dark:text-titlecolor text-titlecolorlight xl:text-xl dark:bg-bghome/50 bg-titlecolordark/5  font-bevan mt-3'>
            {projectName}
          </h3>
          <p className='text-parraflight dark:text-parraf z-20 xl:w-full px-3 xl:px-6  h-full font-open-san'>
            {projectDescription}
            <TecProjects tecs={projectTec} />
          </p>
          <div className='flex gap-2 justify-center w-full xl:gap-3 xl:p-5 font-open-san'>
            {projectLink && (
              <a
                href={projectLink}
                target='about:blank'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'
                >
                Visitar
              </a>
            )}
            {projectRepo && (
              <a
                href={projectRepo}
                target='about:blank'
                className='border h-[40px] dark:border-titlecolordark border-titlecolordark p-2 rounded-xl mt-5 xl:mt-auto dark:text-titlecolordark text-titlecolordark w-[120px] text-center  hover:dark:bg-bghometwolight hover:bg-titlecolordark hover:dark:text-titlecolordark hover:text-bghometwolight hover:font-bold'>
                ver repositorio
              </a>
            )}
          </div>
        </aside>
      )}
    </>
  )
}

export default ProjectInformation
