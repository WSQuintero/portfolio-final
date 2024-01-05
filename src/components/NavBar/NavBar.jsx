import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'

function NavBar ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <nav className={`h-full  relative border border-titlecolordark border-b xl:border-r-transparent xl:border-t-transparent xl:border-l-transparent object-cover  w-full  xl:mr-5 z-50 flex flex-col  xl:flex-row ${isBurguerMenu ? 'justify-between ' : 'justify-center'} xl:justify-between xl:px-10 items-center`}>
      <button
        onClick={() => {
          setIsBurguerMenu(!isBurguerMenu)
        }}
        className='text-white flex xl:hidden '>
        <IconContext.Provider value={{ size: '30px' }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </button>
{isBurguerMenu && (
      <div className=' h-[100px] w-[100px] xl:h-[50px] xl:w-[50px]  border border-titlecolordark rounded-full '>

      <img src="/img/logo.png" alt="logo" className='h-full object-contain'/>
      </div>
)}

      <BurguerMenu isBurguerMenu={isBurguerMenu} setIsBurguerMenu={setIsBurguerMenu}/>
    </nav>
  )
}

export { NavBar }
