import React, { useRef } from 'react'
import { useAnimateSkills } from '../../customHooks/useAnimateSkills'
import { logos } from '../../db/logos'

function AnimatedSkillSection () {
  const elements = useRef(null)
  const observerRight = useRef(null)
  const observerLeft = useRef(null)
  const skillSectionTwo = useRef(null)
  const { circlesIsActive, actualSkillLeft, actualSkillRight } =
    useAnimateSkills({
      elements,
      observerRight,
      observerLeft,
      skillSectionTwo
    })

  return (
    <div
      className="relative flex xl:flex-row flex-col justify-center items-center w-full h-full background-js mt-20"
      ref={skillSectionTwo}
    >
      <p className="border-b border-titlecolordark text-titlecolordark mb-5 xl:pb-10 w-[300px] xl:h-[50px] font-bevan text-center text-md xl:text-xl p-5 xl:mt-0">
        {actualSkillLeft.toUpperCase()}
      </p>
      <div className="relative mb-5 flex justify-center items-center w-full h-[300px] xl:h-full xl:w-[600px]">
        <div
          className="absolute xl:left-0 top-0 xl:top-auto w-[50px] sm:w-[200px] h-[26px]"
          ref={observerLeft}
        ></div>
        <figure className="absolute rotate w-[150px] h-[150px] xl:w-[300px] xl:h-[300px] border-2 hover:scale-125 ease-in-out duration-1000 transition-transform border-titlecolordark rounded-full p-5 flex justify-center items-center">
          <img src="/svg/react.svg" alt="logo react" />
        </figure>
        <div
          className="absolute xl:right-20 bottom-0 xl:bottom-auto w-[50px] sm:w-[200px] h-[26px]"
          ref={observerRight}
        ></div>
        <div
          className="relative flex h-auto justify-center items-center mt-[16px] ml-[15px]"
          ref={elements}
        >
          {Object.values(logos).map((url, index) => (
            <React.Fragment key={index}>
              {circlesIsActive && (
                <figure className="absolute w-[50px] h-[50px] xl:w-[80px] xl:h-[80px] rounded-[50%] flex justify-center items-center bg-gray-300 object-cover">
                  <img
                    src={url}
                    alt={Object.keys(logos)[index]}
                    className="w-[60%]"
                  />
                </figure>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <p className="xl:border-b border-t xl:border-t-transparent border-titlecolordark dark:text-white text-titlecolordark w-[300px] p-5 xl:h-[50px] xl:pb-10 font-bevan text-center text-md xl:text-xl">
          {actualSkillRight.toUpperCase()}
        </p>
      </div>
    </div>
  )
}

export { AnimatedSkillSection }
