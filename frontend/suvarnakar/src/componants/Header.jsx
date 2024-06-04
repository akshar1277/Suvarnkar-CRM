import React from 'react'
import { useState } from 'react';
function Header({ toggleSidebar} ) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        console.log("clicked")
        console.log(isDropdownOpen)
       
    };
    return (
        <>
            <div className="top-header">
                <div className="header-bar flex justify-between">
                    <div className="flex items-center space-x-1">

                        <a href="#" className="xl:hidden block me-2">
                            <img src="assets/images/logo-icon-32.png" className="md:hidden block" alt="" />
                            <span className="md:block hidden">
                                <img src="assets/images/logo-dark.png" className="inline-block dark:hidden" alt="" />
                                <img src="assets/images/logo-light.png" className="hidden dark:inline-block" alt="" />
                            </span>
                        </a>



                        <a id="close-sidebar" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" href="javascript:void(0)"
                        onClick={toggleSidebar}>   
                            <span className="mdi mdi-menu"></span>
                        </a>
                        <div className="ps-1.5">
                            <div className="form-icon relative sm:block hidden">
                                <i className="uil uil-search absolute top-1/2 -translate-y-1/2 start-3"></i>
                                <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..." />
                            </div>
                        </div>

                    </div>

                    <ul className="list-none mb-0 space-x-1">

                        {/* <li className="dropdown inline-block relative">
                            <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <img src="assets/images/flags/usa.png" alt="" />
                            </button>

                            <div className="dropdown-menu absolute start-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                <ul className="list-none py-2 text-start">
                                    <li className="my-1">
                                        <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/germany.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> German</a>
                                    </li>
                                    <li className="my-1">
                                        <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/italy.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> Italian</a>
                                    </li>
                                    <li className="my-1">
                                        <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/russia.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> Russian</a>
                                    </li>
                                    <li className="my-1">
                                        <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/spain.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> Spanish</a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}

                        {/* <li className="dropdown inline-block relative">
                            <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <i data-feather="shopping-cart" className="h-4 w-4"></i>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-emerald-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-emerald-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                            </button>

                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <img src="assets/images/shop/items/s1.jpg" className="rounded shadow dark:shadow-gray-700 w-9" alt="" />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">T-shirt (M)</span>
                                                    <span className="block text-sm text-slate-400">$320 X 2</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$640</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <img src="assets/images/shop/items/s2.jpg" className="rounded shadow dark:shadow-gray-700 w-9" alt="" />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Bag</span>
                                                    <span className="block text-sm text-slate-400">$50 X 5</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$250</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="flex items-center justify-between py-1.5 px-4">
                                            <span className="flex items-center">
                                                <img src="assets/images/shop/items/s3.jpg" className="rounded shadow dark:shadow-gray-700 w-9" alt="" />
                                                <span className="ms-3">
                                                    <span className="block font-semibold">Watch (Men)</span>
                                                    <span className="block text-sm text-slate-400">$800 X 1</span>
                                                </span>
                                            </span>

                                            <span className="font-semibold">$800</span>
                                        </a>
                                    </li>

                                    <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>

                                    <li className="flex items-center justify-between py-1.5 px-4">
                                        <h6 className="font-semibold mb-0">Total($):</h6>
                                        <h6 className="font-semibold mb-0">$1690</h6>
                                    </li>

                                    <li className="py-1.5 px-4">
                                        <a href="javascript:void(0)" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">View Cart</a>
                                        <a href="javascript:void(0)" className="py-[5px] px-4 inline-block font-semibold tracking-wide align-middle duration-500 text-sm text-center rounded-md bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white">Checkout</a>
                                        <p className="text-sm text-slate-400 mt-1">*T&C Apply</p>
                                    </li>

                                </ul>
                            </div>
                        </li> */}

                        {/* <li className="dropdown inline-block relative">
                            <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                <i data-feather="bell" className="h-4 w-4"></i>
                                <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                            </button>

                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                <span className="px-4 py-4 flex justify-between">
                                    <span className="font-semibold">Notifications</span>
                                    <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-full w-5 max-h-5 ms-1">3</span>
                                </span>
                                <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" data-simplebar>
                                    <li>
                                        <a href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                    <i data-feather="shopping-cart" className="h-4 w-4"></i>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-semibold block">Order Complete</span>
                                                    <small className="text-slate-400">15 min ago</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <img src="assets/images/client/04.jpg" className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt="" />
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-semibold block"><span className="font-bold">Message</span> from Luis</span>
                                                    <small className="text-slate-400">1 hour ago</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                    <i data-feather="dollar-sign" className="h-4 w-4"></i>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-semibold block"><span className="font-bold">One Refund Request</span></span>
                                                    <small className="text-slate-400">2 hour ago</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 rounded-md shadow shadow-indigo-600/10 dark:shadow-gray-700 bg-indigo-600/10 dark:bg-slate-800 text-indigo-600 dark:text-white flex items-center justify-center">
                                                    <i data-feather="truck" className="h-4 w-4"></i>
                                                </div>
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-semibold block">Deliverd your Order</span>
                                                    <small className="text-slate-400">Yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#!" className="block font-medium py-1.5 px-4">
                                            <div className="flex items-center">
                                                <img src="assets/images/client/05.jpg" className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt="" />
                                                <div className="ms-2">
                                                    <span className="text-[15px] font-semibold block"><span className="font-bold">Cally</span> started following you</span>
                                                    <small className="text-slate-400">2 days ago</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li> */}
                        <li className="dropdown inline-block relative m-0.5">
                                <button data-dropdown-toggle="dropdown" className=" items-center" type="button" onClick={toggleDropdown}>
                                    <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full">
                                        <img src="assets/images/client/05.jpg" className="rounded-full" alt=""/>
                                    </span>
                                    <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">Cristina Murfy</span>
                                </button>
                                
                                <div className={`absolute right-0 m-0 mt-5 z-10 w-44  rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 ${isDropdownOpen ? 'block' : 'hidden'}`} onclick="event.stopPropagation(); ">
                                    <ul className="py-2 text-start">
                                        <li>
                                            <a href="profile.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                                <i className="uil uil-user me-2"></i>
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="chat.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                                <i className="uil uil-comment me-2"></i>
                                                Chat
                                            </a>
                                        </li>
                                        <li>
                                            <a href="email.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                                <i className="uil uil-envelope me-2"></i>
                                                Email
                                            </a>
                                        </li>
                                        <li>
                                            <a href="profile-setting.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                                <i className="uil uil-setting me-2"></i>
                                                Settings
                                            </a>
                                        </li>
                                        <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                        <li>
                                            <a href="lock-screen.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                                <i className="uil uil-lock me-2"></i>
                                                Lockscreen
                                            </a>
                                        </li>
                                        <li>
                                            <a href="login.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white">
                                                <i className="uil uil-sign-out-alt me-2"></i>
                                                Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
