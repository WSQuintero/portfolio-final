import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'

function NavBar ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <nav className='h-full xl:h-[20px] xl:w-[50%] w-full  xl:mr-5 z-50 flex flex-col justify-around items-center'>
      <button
        onClick={() => {
          setIsBurguerMenu(!isBurguerMenu)
        }}
        className='text-white flex sm:hidden'>
        <IconContext.Provider value={{ size: '30px' }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </button>
      <BurguerMenu isBurguerMenu={isBurguerMenu} setIsBurguerMenu={setIsBurguerMenu}/>
    </nav>
  )
}

export { NavBar }
