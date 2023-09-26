import React from 'react'
import reports from '../assets/reports.svg'
import extension from '../assets/extension.svg'
import quotation from '../assets/quotation.svg'
import ecommerce from '../assets/ecommerce.svg'

function Featues() {
  return (
    <>
     <div className="mt-16 lg:mt-32 text-[#000000]">
        {/* <!-- <h2 className="text-2xl text-center lg:text-4xl">
            Discover a range of essential features thoughtfully designed to elevate your poultry business. Our application empowers you to manage with ease and achieve more.
        </h2> --> */}
        <h2 className="text-2xl text-center lg:text-4xl font-bold">
            Our Features
        </h2>
    </div>
<div className="lg:mt-16 mt-8 text-[#000000]">
            <div className="lg:grid grid-cols-2 gap-10">
                <div className="lg:flex justify-between border border-[#328C13] boder-solid pl-6 pt-6 pb-6  rounded shadow-lg">
                    <div className="">
                        <h3 className="text-2xl font-semibold text-[#328C13] mb-2">Farm Reports</h3>
                        <p>Keep your farm organized and your operations transparent. Easily input, track, and manage vital farm 
                            records while generating insightful reports that provide a clear overview of your poultry business's performance.</p>
                    </div>
                    <img src={ reports } alt="" class="lg:-mr-2.5 hidden lg:block" />
                </div>
                <div className="lg:flex justify-between border border-[#328C13] boder-solid pl-6 pt-6 pb-6 rounded shadow-lg mt-4 lg:mt-0">
                    <div className="">
                        <h3 className="text-2xl font-semibold text-[#328C13] mb-2">Extension Services</h3>
                        <p> Access expert advice and guidance right at your fingertips. Our app connects you with agricultural extension services, 
                            enabling you to seek professional insights, solutions to challenges, and best practices to enhance your poultry farm's 
                            efficiency and profitability.</p>
                    </div>
                    <img src={ extension } alt="" class="hidden lg:block" />
                </div>
            </div>

            <div className="lg:grid grid-cols-2 gap-10 mt-4 lg:mt-10">
                <div className="lg:flex justify-between border border-[#328C13] boder-solid pl-6 pt-6 pb-6 rounded shadow-lg">
                    <div className="">
                        <h3 className="text-2xl font-semibold text-[#328C13] mb-2">Quotations</h3>
                        <p >Streamline your procurement process by effortlessly requesting and comparing quotations from suppliers. Simplify your
                             purchasing decisions, ensuring you get the best deals on essential supplies, feed, equipment, and more</p>
                    </div>
                    <img src={ quotation } alt="" className="hidden lg:block" />
                </div>
                <div className="lg:flex justify-between border border-[#328C13] boder-solid pl-6 pt-6 pb-6  rounded shadow-lg mt-4 lg:mt-0">
                    <div className="">
                        <h3 className="text-2xl font-semibold text-[#328C13] mb-2">Ecommerce</h3>
                        <p>Unlock new opportunities with seamless e-commerce integration. Easily buy and sell poultry products and supplies online,
                             expanding your market reach and maximizing revenue potential.</p>
                    </div>
                    <img src={ ecommerce } alt="" className="hidden lg:block" />
                </div>
            </div>
        </div>
</>
  )
}

export default Featues