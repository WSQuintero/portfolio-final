import { useEffect, useState } from 'react'

function Toogle () {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = (event) => {
    event.stopPropagation()
    setIsChecked(!isChecked)
  }
  useEffect(() => {
    const html = document.querySelector('html')

    if (isChecked) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }, [isChecked])
  return (
    <label
      htmlFor="AcceptConditions"
      className="relative z-50 h-8 w-14 cursor-pointer flex items-center"
    >
      <input
        type="checkbox"
        id="AcceptConditions"
        className="peer sr-only w-full"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-titlecolordark"></span>
      <span className="absolute inset-y-0 left-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:left-6"></span>
    </label>
  )
}

export { Toogle }
