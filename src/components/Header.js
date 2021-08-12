import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import { LocationOnOutlined, ShoppingBasketRounded } from '@material-ui/icons';

function Header() {
    return (
        
            <div className="bg-black w-full h-16 flex items-center sticky top-0 z-50">
            {/* <Link to="/"> */}
            <img 
            className="object-contain w-24 mx-5 mt-3"
            alt="logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            /> {/*logo*/}
            {/* </Link> */}
            <div className="nav-option flex flex-col mx-3 text-white">
                <span className="text-xs font-light ">Deliver to</span>
                <span className="font-semibold text-lg -ml-4"><LocationOnOutlined/>Kenya</span>
            </div>
            <div className="flex items-center w-2/3 ml-3">
                <input
                className="outline-none rounded-l-sm h-10 !important p-3 w-full"
                type="text"
                placeholder="what are you looking for?"
                />
                <SearchIcon
                    className="h-10 !important w-10 p-1 bg-yellow-500 rounded-r-sm"
                />
            </div>
            <nav className="nav">
                <ul className="flex justify-evenly">
                {/* <Link to={!user && '/login'}> */}
                    <li 
                    className="nav-option flex flex-col mx-3 text-white"
                    // onClick={handleAuthorization}
                    >
                        <span className="text-xs font-light">Hello Guest {/*{!user ? 'Guest' : user.email}*/}</span> 
                    <span className="font-bold text-lg">Sign In{/*{user ? 'sign Out' : 'Sign In'}*/}</span>
                    </li>
                    {/* </Link> */}
                    <li className="nav-option flex flex-col mx-3 text-white">
                        <span className="text-xs font-light">Returns</span>
                        <span className="font-bold text-lg">& Orders</span>
                    </li>
                    <li className="nav-option flex flex-col mx-3 text-white">
                        <span className="text-xs font-light">Your</span>
                        <span className="font-bold text-lg">Prime</span>
                    </li>
                </ul>
            </nav>
            <div className="basket text-white flex items-center">
                {/* <Link to="/checkout"> */}
                    <ShoppingBasketRounded/>
                <span className="font-bold text-lg text-white mx-3"> 0 {/*{basket?.length}*/}</span>
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Header
