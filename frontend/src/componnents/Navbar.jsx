import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const {user}=useAuthContext()
  const {logout}=useLogout()
  const sign_out = () => {
    logout()
  };

    
  const active = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="text-[#000] bg-[#ffffff] sticky top-0 z-[100] border-gray-200 px-2 sm:px-4 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="w-24">
        <a className="flex items-center">
            <img src="/pics/logoCDM.png" alt="ss" />
        </a>
        </div>
        <button
          onClick={() => active()}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu </span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={
            navbar ? "block w-full md:block md:w-auto " : "hidden md:block"
          }
          id="navbar-default"
        >
          <ul className="flex flex-col justify-center items-center text-white-200 p-2 mt-4 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link to={'/up'}
                className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:text-blue- hover:text-primary md:p-0 dark:text-white"
                aria-current="page"
              >
                Acceuil
              </Link>
            </li>
            <li>
              <Link to={'/contact-us'}
                className="block py-2 pl-3 pr-4  rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </Link>
            </li>
            {
              user?          
              <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white-200 rounded  md:hover:bg-transparent md:border-0 hover:text-primary md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {user.firstname}
              </a>
            </li>:
            null
            }
            {
                user?
                <li onClick={()=>sign_out()}>
                <div
                  className="block py-3 px-4 border-none bg-primary cursor-pointer rounded-2xl  md:border-0  md:py-3 md:px-4  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  sign out
                </div>
              </li>
              :            
              <li onClick={()=>setOpenAuthModal(true)}>
              <div
                className="block py-3 px-4 bg-primary cursor-pointer rounded-2xl  md:border-0  md:py-3 md:px-4 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                sign in
              </div>
            </li>
            }
          </ul>
        </div>
      </div>
      <AuthModal Open={openAuthModal} Close={()=>setOpenAuthModal(false)}/>
    </nav>
    // 
  );
}

export default NavBar;
