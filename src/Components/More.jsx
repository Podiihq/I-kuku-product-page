import React from 'react'
import impt from '../assets/icons/import.png'
import hero2 from '../assets/hero-2.svg'
import icons from '../assets/icons.svg'

function More() {
  return (
    <div className="mt-32 text-[#000000]">
    <div>
        <div className="lg:grid grid-cols-2 items-center">
            <img src={ hero2 } alt="" />
            <div>
            <div className="flex justify-center lg:justify-start mt-8 lg:mt-0">
                    <img src={ icons } alt="" className="" />
                </div>
                
                <p className="text-2xl lg:text-4xl mt-8 text-center lg:text-left">Uncover key performance indicators, spot trends, and make informed choices that drive efficiency, cut costs, and boost overall success.</p>
                <div className="flex justify-center lg:justify-start">
                    <a href="" className="flex justify-between mt-8">
                        <div className="flex justify-center gap-3 items-center bg-[#328C13] hover:bg-green-800 px-4 py-2 rounded-full md:mr-0 shadow-lg">
                            <p className="text-white text-sm md:text-base font-semibold">Download Now</p>
                            <img src={ impt } alt="" className="px-2 py-2 bg-white rounded-full" />
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default More