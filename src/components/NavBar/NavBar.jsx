import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'

function NavBar ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <nav className={`h-full  relative border border-titlecolordark border-b sm:border-r-transparent sm:border-t-transparent sm:border-l-transparent object-cover  w-full  xl:mr-5 z-50 flex flex-col  sm:flex-row ${isBurguerMenu ? 'justify-between ' : 'justify-center'} sm:justify-between sm:px-10 items-center`}>
      <button
        onClick={() => {
          setIsBurguerMenu(!isBurguerMenu)
        }}
        className='text-white flex sm:hidden '>
        <IconContext.Provider value={{ size: '30px' }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </button>
{isBurguerMenu && (
      <div className='sm:h-[70%] h-[100px] border border-titlecolordark rounded-full p-1'>

      <img src="/svg/Logo_Mesa de trabajo.svg" alt="logo" className='h-full object-cover'/>
      </div>
)}

      <BurguerMenu isBurguerMenu={isBurguerMenu} setIsBurguerMenu={setIsBurguerMenu}/>
    </nav>
  )
}

export { NavBar }
