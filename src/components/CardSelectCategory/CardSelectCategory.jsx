function CardSelectCategory({
  open,
  setCategory,
  title,
  description,
  footer,
  img,
  reset
}) {
  return (
    <div>
      <article
        onClick={() => {
          window.location.href = '#projects'
          setCategory(null)
          reset()
          setCategory(open)
        }}
        className='flex flex-col text-center cursor-pointer hover:scale-105 transition-transform rounded-xl border dark:border-bghomelight/20 border-bghometwo p-3 shadow-xl  dark:hover:border-titlecolordark/10 h-[350px] border-titlecolordark/10 dark:hover:shadow-titlecolordark/20 dark:shadow-titlecolordark/5 hover:shadow-titlecolordark/40 relative  w-[300px] justify-center items-center'>
        <img src={img} alt='img project' className='h-[35%]  object-contain' />
        <div className=' mt-5 w-full'>
          <h2 className='mt-4 text-md font-bevan dark:text-bghomelight text-bghometwo/80'>
            {title}
          </h2>
          <p className='mt-1 text-sm dark:text-parraf text-parraflight'>
            {footer}
          </p>
        </div>
        <p className=' text-sm h-[50px] gap-2  dark:text-parraf text-parraflight flex  mt-5 w-full justify-center absolute bottom-2'>
          {description?.map((img) => (
            <span
              className='border border-dashed border-gray-100 w-[40px] h-[40px]  p-2 rounded-full bg-gray-300 bg-opacity-10 flex justify-center items-center hover:bg-white hover:scale-[2] transition-transform'
              key={img}>
              <img
                src={img}
                alt='thecnology'
                className='h-[80%] object-contain '
              />
            </span>
          ))}
        </p>
      </article>
    </div>
  )
}

export default CardSelectCategory
