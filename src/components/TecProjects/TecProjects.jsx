function TecProjects ({ tecs }) {
  return (
    <span className="w-full mt-2 sm:mt-4 h-[40px] object-cover flex gap-2 justify-center items-center">
      {tecs.split(',')?.map((tec) => (
        <img className="object-cover w-[30px]" src={tec} key={tec} />
      ))}
    </span>
  )
}

export { TecProjects }
