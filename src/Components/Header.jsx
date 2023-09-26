import React from 'react'
import logo from '../assets/logo.png'
import impt from '../assets/icons/import.png'
function Header() {
  return (
    <div className="flex justify-between items-center">
        <img src={ logo } alt="" className="logo" />
        <a href="" className="">
            <div className="flex justify-center gap-3 items-center bg-[#328C13] hover:bg-green-800 px-4 py-2 rounded-full md:mr-0 shadow-lg">
                <p className="text-white text-sm md:text-base font-semibold">Download Now</p>
                <img src={ impt } alt="" className="px-2 py-2 bg-white rounded-full" />
            </div>
        </a>
    </div>
  )
}

export default Header