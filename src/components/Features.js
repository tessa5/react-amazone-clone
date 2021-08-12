import React from 'react'
import { Link } from '@material-ui/core'

function Features() {
    return (
        <div>
            <section className="text-white bg-gray-800 mt-8">
    <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap -m-4 mb-12">
        <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-bold title-font tracking-tight text-white mb-4 text-lg text-center sm:text-left">Get to Know Us</h2>
        <nav className="flex flex-col sm:items-start sm:text-left text-sm text-center items-center space-y-1.5">
            <Link className="text-white">Careers</Link>
            <Link className="text-white">Blog</Link>
            <Link className="text-white">About Amazon</Link>
            <Link className="text-white">Investor Relations</Link>
            <Link className="text-white">Amazon Devices</Link>
        </nav>
        </div>
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-bold title-font tracking-tight text-white mb-4 text-lg text-center sm:text-left">Make Money with Us</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-sm text-center items-center  space-y-1.5">
        <Link className="text-white">Sell products on Amazon</Link>
        <Link className="text-white">Sell on Amazon Business</Link>
        <Link className="text-white">Sell apps on Amazon</Link>
        <Link className="text-white">Become an Affiliate</Link>
        <Link className="text-white">Advertise Your Products</Link>
        <Link className="text-white">Self-Publish with Us</Link>
        <Link className="text-white">Host an Amazon Hub</Link>
        <Link className="text-white"> ♦ See More Make Money <br/> with Us</Link>
        </nav>
        </div>
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-bold title-font tracking-tight text-white mb-4 text-lg text-center sm:text-left">Amazon Payment Products</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-sm text-center items-center  space-y-1.5">
        <Link className="text-white">Amazon Business Card</Link>
        <Link className="text-white">Shop with Points</Link>
        <Link className="text-white">Reload Your Balance</Link>
        <Link className="text-white">Amazon Currency Converter</Link>
        
        </nav>
        </div>
        <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-bold title-font tracking-tight text-white mb-4 text-lg text-center sm:text-left">Let Us Help You</h2>
        <nav class="flex flex-col sm:items-start sm:text-left text-sm text-center items-center  space-y-1.5">
        <Link className="text-white">Amazon and COVID-19</Link>
        <Link className="text-white">Your Account</Link>
        <Link className="text-white">Your Orders</Link>
        <Link className="text-white">Shipping Rates & <br/>Policies</Link>
        <Link className="text-white">Returns & <br/>Replacements</Link>
        <Link className="text-white">Manage Your <br/>Content and Devices</Link>
        <Link className="text-white">Amazon Assistant</Link>
        <Link className="text-white">Help</Link>
        </nav>
        </div>
    </div>
        <div className="flex flex-wrap -m-4 border-t border-gray-500">
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
            <img 
            className="object-contain w-24 mx-5 mt-5"
            alt="logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <button className="mt-5 text-white  border border-gray-500 rounded py-1 px-6">English</button>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <button className="mt-5 text-white  border border-gray-500 rounded py-1 px-6">KES Kenyan Shilling</button>
            </div>
            <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
                <button className=" mt-5 text-white  border border-gray-500 rounded py-1 px-6">United States</button>
            </div>
        </div>
</div>
</section>
        </div>
    )
}

export default Features
