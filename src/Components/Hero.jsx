import React from 'react'
import Hero1 from '../assets/Hero1.png'
import googleplay from '../assets/icons/googleplay.png'

function Hero() {
  return (
    <div className="mt-16 lg:mt-32 text-[#000000]">
    <div className="lg:grid grid-cols-2 items-center">
        <div>
            <h1 className=" text-3xl md:text-6xl font-semibold text-center lg:text-left ">
                Revolutionize Your Poultry Business. <span className="font-bold text-[#328C13]">Streamline</span> Operations and <span className="font-bold text-[#328C13]">Boost</span> Productivity.
            </h1>
            <p className="mt-6 text-lg text-center lg:text-left">
                Experience a paradigm shift in poultry management. Our solution revolutionizes your business, streamlining operations and elevating productivity.
            </p>
            <div className="flex justify-start gap-6">
                <a href="" className="flex justify-center gap-2 items-center border border-[#328C13] hover:bg-gray-100 px-4 py-2 rounded mt-6 hidden lg:flex shadow-lg">
                    <img src={ googleplay } alt="" />
                    <div className="text-[#328C13]">
                        <p className="">Google Play</p>
                        <p className="text-xl font-semibold">Download App</p>
                    </div>
                </a>
                <a href="" className="flex justify-center gap-2 items-center border border-[#328C13] hover:bg-gray-100 px-4 py-2 rounded mt-6 hidden lg:flex shadow-lg">
                    <i className="fa-brands fa-apple text-4xl"></i>
                    <div className="text-[#328C13]">
                        <p className="">App Store</p>
                        <p className="text-xl font-semibold">Coming Soon</p>
                    </div>
                </a>
            </div>
            
        </div>
        
        <div>
            <img src={ Hero1 } alt="" className="object-cover mt-8" />
        </div>
        <div className="flex justify-center">
            <div className="flex justify-between gap-2">
                <a href="" className="flex justify-center gap-2 items-center border border-[#328C13] px-4 py-2 rounded mt-6 lg:hidden shadow-lg">
                    <img src={ googleplay } alt="" className="w-8" />
                    <div className="text-[#328C13]">
                        <p className="text-sm">Google Play</p>
                        <p className="text-md font-semibold">Download App</p>
                    </div>
                </a>
                <a href="" className="flex justify-center gap-2 items-center border border-[#328C13] hover:bg-gray-100 px-4 py-2 rounded mt-6 lg:hidden shadow-lg">
                    <i className="fa-brands fa-apple text-2xl"></i>
                    <div className="text-[#328C13]">
                        <p className="text-sm">App Store</p>
                        <p className="text-md font-semibold">Coming Soon</p>
                    </div>
                </a>
            </div>
        </div>
        
    </div>
</div>
  )
}

export default Hero