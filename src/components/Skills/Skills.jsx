import { AnimatedSkillSection } from '../AnimatedSkillSection/AnimatedSkillSection'
import './Skills.css'

function Skills () {
  return (
    <section
      className='h-auto sm:h-[100vh] flex flex-col w-[80%] xl:flex-col justify-center items-center  p-3  '
      id='skills'>
      <h2 className='text-xl py-2 px-5 font-bevan font-medium w-full dark:bg-titlecolor/5 bg-titlecolorlight/10  text-left dark:text-titlecolor text-titlecolordarklight/60 mt-10'>
        Habilidades
      </h2>
      <AnimatedSkillSection />
    </section>
  )
}

export { Skills }
