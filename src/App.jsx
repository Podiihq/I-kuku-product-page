import { useState } from 'react'
import './App.css'
import googleplay from './assets/icons/googleplay.png'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Header from './Components/Header'
import More from './Components/More'

function App() {
 
  return (
 <>
    <Header />
    {/*  Hero  */}
    <Hero />
     {/*  Features */}
   <Features />
    <div className='text-[#000000]' >
        <div className="text-center text-xl lg:text-3xl mt-16">
            <p className="font-bold">To discover more features!!!</p>
        </div>
        <div className="flex justify-center gap-8">
            <a href="" className="flex justify-center gap-2 items-center border border-[#328C13] px-4 py-2 rounded mt-6 shadow-lg bg-white  hover:bg-gray-100 ">
                <img src={ googleplay } alt="" />
                <div className="text-[#328C13]">
                    <p className="">Google Play</p>
                    <p className="text-xl font-semibold">Download App</p>
                </div>
            </a>
            {/* <!-- <a href="" className="flex justify-center gap-2 items-center border border-[#328C13] hover:bg-gray-100 px-4 py-2 rounded mt-6 hidden lg:flex shadow-lg">
                <i className="fa-brands fa-apple text-4xl"></i>
                <div className="text-[#328C13]">
                    <p className="">App Store</p>
                    <p className="text-xl font-semibold">Coming Soon</p>
                </div>
            </a> --> */}
        </div>
    </div>
    <More />
<Footer />
    </>
    
  )
}

export default App
