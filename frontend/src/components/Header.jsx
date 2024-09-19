import { useState } from 'react'
import logo from '../assets/images/logo1.png'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <nav className="xl:w-full rounded-b-xl border-gray-200 dark:bg-black dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
          <a href="https://digiplusagency.com/" className="flex items-center px-5 space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-16 " alt="Logo" />
          </a>

          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
          </button>

          <div className="hidden md:block" id="navbar-dropdown">
            <ul className="flex flex-col font-semibold font-sans md:p-3  border-white-100  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-white-100 md:dark:bg-white-100 dark:border-green-700">
                <li>
                    <Link to='/' className={`block py-2 px-3 rounded md:border-0 md:p-0 ${location.pathname === '/' ? ' text-green-500 font-bold' : 'text-white dark:hover:text-green-500'}`}>Home</Link>
                </li>
                <li>
                    <Link to='/add' className={`block py-2 px-3 rounded md:border-0 md:p-0 ${location.pathname === '/add' ? ' text-green-500 font-bold' : 'text-white dark:hover:text-green-500'}`}>Add</Link>
                </li>
                <li>
                    <Link to='/log' className={`block py-2 px-3 rounded md:border-0 md:p-0 ${location.pathname === '/log' ? ' text-green-500 font-bold' : 'text-white dark:hover:text-green-500'}`}>Logs</Link>
                </li>
                <li>
                    <ul className="block py-2 px-3 text-white rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-black-100 md:p-0 dark:text-black md:dark:hover:text-green-500 dark:hover:bg-green-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent" aria-current="page" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Username
                        </button>
                    </ul>
                </li>
            </ul>
            {isOpen && (
              <ul role="menu" data-popover="menu" data-popover-placement="bottom"
                className="absolute z-10 w-62 py-6 px-2 ml-40  overflow-auto rounded-md border border-blue-gray-50 bg-white font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
                <Link to='/acc' role="menuitem"
                    className="block w-full cursor-pointer text-center select-none rounded-md hover:text-green-500 font-semibold leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    Account Settings
                </Link>
                <button role="menuitem"
                    className="block w-full cursor-pointer text-center select-none rounded-md px-3 pt-[9px] pb-2 font-semibold hover:text-green-500  leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    Log out
                </button>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
