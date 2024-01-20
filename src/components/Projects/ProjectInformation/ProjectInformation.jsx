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
          <h3 className='flex items-center justify-center w-full text-xl text-center text-titlecolor xl:text-xl bg-black/50 font-bevan '>
            {projectName}
          </h3>
          <p className='text-parraf z-20 xl:w-full px-3 xl:px-6  h-full font-open-san'>
            {projectDescription}
            <TecProjects tecs={projectTec} />
          </p>
        <div className='flex justify-around w-full xl:gap-3 xl:p-5 font-open-san'>
          {projectLink && (
            <a
              href={projectLink}
              target='about:blank'
              className='z-20 w-2/4 p-2 text-center border cursor-pointer border-titlecolordark xl:rounded-xl text-titlecolordark bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              Visitar
            </a>
          )}
          {projectRepo && (
            <a
              href={projectRepo}
              target='about:blank'
              className='z-20 w-2/4 p-2 text-center border cursor-pointer border-titlecolordark xl:rounded-xl text-titlecolordark bg-bghome hover:bg-gray-200 hover:text-bghometwo hover:font-bold'>
              ver repositorio
            </a>
          )}
        </div>
      </aside>
    )}</>
  )
}

export default ProjectInformation
