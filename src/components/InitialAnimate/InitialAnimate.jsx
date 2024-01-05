import './InitialAnimate.css'

function InitialAnimate () {
  return (
    <div className='h-[100vh] bg-bghome transition-all ease-out duration-500 flex items-center justify-center opacity-0 animate-fade-in '>
      <img
        src='/img/logo.png'
        alt='logo'
        className=' w-4/5 sm:w-1/4 2xl:w-2/5   '
      />
    </div>
  )
}

export { InitialAnimate }
