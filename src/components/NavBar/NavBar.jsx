import { GiHamburgerMenu } from 'react-icons/gi'
import { IconContext } from 'react-icons'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'

function NavBar ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <nav className={`h-full  relative border border-titlecolordark border-b lg:border-r-transparent lg:border-t-transparent lg:border-l-transparent object-cover  w-full  lg:mr-5 z-50 flex flex-col  lg:flex-row ${isBurguerMenu ? 'justify-between ' : 'justify-center'} lg:justify-between lg:px-10 items-center`}>
      <button
        onClick={() => {
          setIsBurguerMenu(!isBurguerMenu)
        }}
        className='text-white flex lg:hidden '>
        <IconContext.Provider value={{ size: '30px' }}>
          <GiHamburgerMenu />
        </IconContext.Provider>
      </button>
{isBurguerMenu && (
      <div className=' h-[100px] w-[100px] lg:h-[50px] lg:w-[50px]  border border-titlecolordark rounded-full '>

      <img src="/img/logo.png" alt="logo" className='h-full object-contain'/>
      </div>
)}

      <BurguerMenu isBurguerMenu={isBurguerMenu} setIsBurguerMenu={setIsBurguerMenu}/>
    </nav>
  )
}

export { NavBar }
