import { Toogle } from '../Toogle/Toogle'
import './BurguerMenu.css'

function BurguerMenu ({ isBurguerMenu, setIsBurguerMenu }) {
  return (
    <>
      {' '}
      {isBurguerMenu && (
        <div className='flow-root fixed h-[100vh] w-full top-0 dark:bg-bghome bg-bghomelight mt-14 font-open-sans '>
          <ul className='-my-2 divide-y divide-gray-100 dark:divide-gray-800'>
            <li className='py-2'>
              <ul className='space-y-1'>
                <li>
                  <a
                    href='#home'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href='#projects'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    Proyectos
                  </a>
                </li>

                <li>
                  <a
                    href='#about-me'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    sobre mí
                  </a>
                </li>

                <li>
                  <a
                    href='#skills'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    Habilidades
                  </a>
                </li>

                <li>
                  <a
                    href='#contact'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    Contáctame
                  </a>
                </li>
              </ul>
            </li>

            <li className='py-2'>
              <ul className='space-y-1'>
                <li>
                  <a
                    href='https://github.com/WSQuintero'
                    target='_about:blank'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href='https://www.linkedin.com/in/webdevsantiagoquintero/'
                    target='_about:blank'
                    className='block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    onClick={(event) => { setIsBurguerMenu(false); event.stopPropagation() }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export { BurguerMenu }
