import './InitialAnimate.css'

function InitialAnimate () {
  return (
    <div className='h-[100vh] bg-bghome transition-all ease-out duration-1000 flex items-center justify-center opacity-0 animate-fade-in '>
      <img
        src='/svg/Logo_Mesa de trabajo.svg'
        alt='logo'
        className='w-4/5 sm:w-1/4 2xl:w-2/5 opacity-0 animate-fade-in  '
      />
    </div>
  )
}

export { InitialAnimate }
