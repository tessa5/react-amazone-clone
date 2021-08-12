import { Link } from '@material-ui/core'
import React from 'react'

function Main() {
    return (
        <>
            <div className="main flex justify-center mx-auto max-w-screen-2xl">
                <div className="main-container">
                    <img
                        className="main-image w-screen -mb-80 z-0"
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                        alt="main-banner"
                    />
                    <div className="main-row flex z-30 mx-3">
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info bg-white w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">AmazonBasics</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">see more</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info bg-white w-80 p-4 m-3">
                                <p className="font-bold text-xl mb-3 -mt-3">Computers & Accesories</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/I/41pk3KgbeRL.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">Shop now</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Get fit at home</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">Explore now</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end z-20 w-96">
                            <li className="info w-96 p-4 mt-3 ">
                                <div className="pt-4 pb-12 px-3 -mt-3 bg-white">
                                    <p className="font-bold text-xl mb-3">Sign in for the best experience</p>
                                    <botton className=" px-28 py-1 font-light text-sm bg-yellow-300 rounded-lg">Sign in securely</botton>
                                </div>
                                <img
                                    className="mt-16 mx-auto w-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_D2_45M_en_US_1x._CB418309979_.jpg"
                                    alt="basics"
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="main-row-2 flex z-30 mx-3">
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info bg-white w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Oculus</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Dash_Oculus_1x._SY304_CB667158353_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">Shop now</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info bg-white w-80 p-4 m-3">
                                <p className="font-bold text-xl mb-3 -mt-3">Shop by Categories</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">Shop now</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Gaming accesories</p>
                                <div className="mult-image grid grid-flow-col grid-cols-2 grid-rows-2 gap-6">
                                <div><img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
                                    alt="basics"
                                />
                                <small className="mb-8">Headsets</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg"
                                    alt="basics"
                                /><small className="mb-8">Keyboards</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
                                    alt="basics"
                                /><small className="mb-8">Computer mice</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
                                    alt="basics"
                                /><small className=" mb-8">Chairs</small>
                                </div>
                                </div>
                                <Link className="text-blue-400">See more</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Find your ideal TV</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">Explore now</Link>
                            </li>
                        </ul>
                        
                    </div>
                    <div className="main-row-full z-30 mx-3 bg-white shadow">
                    <div className="info w-full flex justify-right text-center m-3">
                                <p className="font-bold text-xl mb-3 -mt-3">Top Beauty & Personal Care products
                                <Link className="text-blue-400 font-normal ml-3">Shop now</Link></p>
                                </div>
                        <div className="product flex z-20">
                                <img
                                    className="h-48 m-3 "
                                    src="https://m.media-amazon.com/images/I/41+OcSh2YsL._AC_SY200_.jpg"
                                    alt="basics"
                                />  
                                <img
                                    className="h-48 m-3"
                                    src="https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
                                    alt="basics"
                                /> 
                                <img
                                    className="h-48 m-3"
                                    src="https://m.media-amazon.com/images/I/41yn8u3qJPL._AC_SY200_.jpg"
                                    alt="basics"
                                />  <img
                                className="h-48 m-3"
                                src="https://m.media-amazon.com/images/I/51+8z0H7zGL._AC_SY200_.jpg"
                                alt="basics"
                            /> 
                            <img
                                    className="h-48 m-3"
                                    src="https://m.media-amazon.com/images/I/31YWXtNkeKL._AC_SY200_.jpg"
                                    alt="basics"
                                /> 
                                <img
                                    className="h-48 m-3"
                                    src="https://m.media-amazon.com/images/I/51EnREs7ElL._AC_SY200_.jpg"
                                    alt="basics"
                                /> 
                                <img
                                    className="h-48 m-3"
                                    src="https://m.media-amazon.com/images/I/41RNHlao-eL._AC_SY200_.jpg"
                                    alt="basics"
                                /> 
                        </div>
                        
                    </div>
                    <div className="main-row-3 flex z-30 mx-3">
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Comfy styles for her</p>
                                <div className="mult-image grid grid-flow-col grid-cols-2 grid-rows-2 gap-6">
                                <div><img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Sweatshirt_Quad_Cat_1x._SY116_CB418609101_.jpg"
                                    alt="basics"
                                />
                                <small className="mb-8">Sweatshirts</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Joggers_Quad_Cat_1x._SY116_CB418608748_.jpg"
                                    alt="basics"
                                /><small className="mb-8">Joggers</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Cardigans_Quad_Cat_1x._SY116_CB418608722_.jpg"
                                    alt="basics"
                                /><small className="mb-8">Cardigans</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_WomenFashion_Tees_Quad_Cat_1x._SY116_CB418608878_.jpg"
                                    alt="basics"
                                /><small className=" mb-8">Easy tees</small>
                                </div>
                                </div>
                                <Link className="text-blue-400">See more</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Shop Laptops & Tablets</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">See more</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Explore home bedding</p>
                                <img
                                    className="h-72"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg"
                                    alt="basics"
                                />
                                <Link className="text-blue-400">See more</Link>
                            </li>
                        </ul>
                        <ul className="product flex-col items-center justify-end bg-white m-3 z-20 shadow">
                            <li className="info w-80 p-4 m-3 ">
                                <p className="font-bold text-xl mb-3 -mt-3">Gaming merchandise</p>
                                <div className="mult-image grid grid-flow-col grid-cols-2 grid-rows-2 gap-6">
                                <div><img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Apparel_1x._SY116_CB667159060_.jpg"
                                    alt="basics"
                                />
                                <small className="mb-8">Apparel</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Hat_1x._SY116_CB667159060_.jpg"
                                    alt="basics"
                                /><small className="mb-8">Hats</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Figure_1x._SY116_CB667159060_.jpg"
                                    alt="basics"
                                /><small className="mb-8">Action figures</small>
                                </div>
                                <div>
                                <img
                                    className="h-28"
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mug_1x._SY116_CB667159063_.jpg"
                                    alt="basics"
                                /><small className=" mb-8">Mugs</small>
                                </div>
                                </div>
                                <Link className="text-blue-400">See more</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Main
