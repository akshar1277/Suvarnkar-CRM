import React from 'react'
import { useEffect } from 'react';
import SideBar from './SideBar';
const Home = () => {
   
   
  return (

  <>
   <div className="page-wrapper toggled">
    <SideBar/>

            <main className="page-content bg-gray-50 dark:bg-slate-800">
              
                <div className="top-header">
                    <div className="header-bar flex justify-between">
                        <div className="flex items-center space-x-1">
                      
                            <a href="#" className="xl:hidden block me-2">
                                <img src="assets/images/logo-icon-32.png" className="md:hidden block" alt=""/>
                                <span className="md:block hidden">
                                    <img src="assets/images/logo-dark.png" className="inline-block dark:hidden" alt=""/>
                                    <img src="assets/images/logo-light.png" className="hidden dark:inline-block" alt=""/>
                                </span>
                            </a>
                        

                          
                            <a id="close-sidebar" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" href="javascript:void(0)">
                                <i data-feather="menu" className="h-4 w-4"></i>
                            </a>
                         
                            <div className="ps-1.5">
                                <div className="form-icon relative sm:block hidden">
                                    <i className="uil uil-search absolute top-1/2 -translate-y-1/2 start-3"></i>
                                    <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-3xl outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..."/>
                                </div>
                            </div>
                          
                        </div>

                        <ul className="list-none mb-0 space-x-1">
                          
                            <li className="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                    <img src="assets/images/flags/usa.png" alt=""/>
                                </button>
                              
                                <div className="dropdown-menu absolute start-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                    <ul className="list-none py-2 text-start">
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/germany.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> German</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/italy.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt=""  /> Italian</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/russia.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> Russian</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-semibold py-1.5 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><img src="assets/images/flags/spain.png" className="h-6 w-6 rounded-full me-2 shadow dark:shadow-gray-700" alt="" /> Spanish</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            
                            <li className="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full" type="button">
                                    <i data-feather="shopping-cart" className="h-4 w-4"></i>
                                    <span className="absolute top-0 end-0 flex items-center justify-center bg-emerald-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-emerald-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                </button>
                               
                                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-60 rounded-md bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                    <ul className="py-3 text-start" aria-labelledby="dropdownDefault">
                                        <li>
                                            <a href="#" className="flex items-center justify-between py-1.5 px-4">
                                                <span className="flex items-center">
                                                    <img src="assets/images/shop/items/s1.jpg" className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
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
                                                    <img src="assets/images/shop/items/s2.jpg" className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
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
                                                    <img src="assets/images/shop/items/s3.jpg" className="rounded shadow dark:shadow-gray-700 w-9" alt=""/>
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
                            </li>
                           
                            <li className="dropdown inline-block relative">
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
                                                    <img src="assets/images/client/04.jpg" className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
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
                                                    <img src="assets/images/client/05.jpg" className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""/>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-semibold block"><span className="font-bold">Cally</span> started following you</span>
                                                        <small className="text-slate-400">2 days ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button">
                                    <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><img src="assets/images/client/05.jpg" className="rounded-full" alt=""/></span>
                                    <span className="font-semibold text-[16px] ms-1 sm:inline-block hidden">Cristina Murfy</span>
                                </button>
                             
                                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                    <ul className="py-2 text-start">
                                        <li>
                                            <a href="profile.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i className="uil uil-user me-2"></i>Profile</a>
                                        </li>
                                        <li>
                                            <a href="chat.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i className="uil uil-comment me-2"></i>Chat</a>
                                        </li>
                                        <li>
                                            <a href="email.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i className="uil uil-envelope me-2"></i>Email</a>
                                        </li>
                                        <li>
                                            <a href="profile-setting.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i className="uil uil-setting me-2"></i>Settings</a>
                                        </li>
                                        <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                        <li>
                                            <a href="lock-screen.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i className="uil uil-lock me-2"></i>Lockscreen</a>
                                        </li>
                                        <li>
                                            <a href="login.html" className="block font-medium py-1 px-4 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white"><i className="uil uil-sign-out-alt me-2"></i>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
           

                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                      
                        <div className="flex justify-between items-center">
                            <div>
                                <h5 className="text-xl font-bold">Hello, Cristina</h5>
                                <h6 className="text-slate-400 font-semibold">Welcome!</h6>
                            </div>

                            <div className="flex items-center">
                                <div className="position-relative">
                                    <select className="form-select form-input w-full py-2 h-10 bg-white dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                        <option value="Y" selected>Yearly</option>
                                        <option value="M">Monthly</option>
                                        <option value="W">Weekly</option>
                                        <option value="T">Today</option>
                                    </select>
                                </div>

                                <a href="" className="ms-1">
                                    <span className="py-[7px] px-6 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md sm:inline-block hidden"><i className="uil uil-export"></i> Export</span>

                                    <span className="h-10 w-10 items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-md border bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white sm:hidden inline-flex"><i className="uil uil-export"></i></span>
                                </a>
                            </div>
                        </div>

                        <div className="grid xl:grid-cols-5 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="p-5 flex items-center">
                                    <span className="flex justify-center items-center rounded-md size-14 min-w-[56px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                        <i data-feather="users" className="h-5 w-5"></i>
                                    </span>

                                    <span className="ms-3">
                                        <span className="text-slate-400 font-semibold block">Total Visitors</span>
                                        <span className="flex items-center justify-between mt-1">
                                            <span className="text-xl font-semibold"><span className="counter-value" data-target="45890">42205</span></span>
                                            <span className="text-red-600 text-sm ms-1 font-semibold"><i className="uil uil-chart-down"></i> 0.5%</span>
                                        </span>
                                    </span>
                                </div>

                                <div className="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                    <a href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">View data <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="p-5 flex items-center">
                                    <span className="flex justify-center items-center rounded-md size-14 min-w-[56px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                        <i data-feather="dollar-sign" className="h-5 w-5"></i>
                                    </span>

                                    <span className="ms-3">
                                        <span className="text-slate-400 font-semibold block">Revenue</span>
                                        <span className="flex items-center justify-between mt-1">
                                            <span className="text-xl font-semibold">$<span className="counter-value" data-target="48575">35214</span></span>
                                            <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 3.84%</span>
                                        </span>
                                    </span>
                                </div>

                                <div className="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                    <a href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">View data <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="p-5 flex items-center">
                                    <span className="flex justify-center items-center rounded-md size-14 min-w-[56px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                        <i data-feather="shopping-cart" className="h-5 w-5"></i>
                                    </span>

                                    <span className="ms-3">
                                        <span className="text-slate-400 font-semibold block">Orders</span>
                                        <span className="flex items-center justify-between mt-1">
                                            <span className="text-xl font-semibold"><span className="counter-value" data-target="4800">3402</span>+</span>
                                            <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 1.46%</span>
                                        </span>
                                    </span>
                                </div>

                                <div className="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                    <a href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">View data <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="p-5 flex items-center">
                                    <span className="flex justify-center items-center rounded-md size-14 min-w-[56px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                        <i data-feather="shopping-bag" className="h-5 w-5"></i>
                                    </span>

                                    <span className="ms-3">
                                        <span className="text-slate-400 font-semibold block">Items</span>
                                        <span className="flex items-center justify-between mt-1">
                                            <span className="text-xl font-semibold"><span className="counter-value" data-target="145">23</span></span>
                                            <span className="text-slate-400 text-sm ms-1 font-semibold"><i className="uil uil-analysis"></i> 0.0%</span>
                                        </span>
                                    </span>
                                </div>

                                <div className="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                    <a href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">View data <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                <div className="p-5 flex items-center">
                                    <span className="flex justify-center items-center rounded-md size-14 min-w-[56px] bg-indigo-600/5 dark:bg-indigo-600/10 shadow shadow-indigo-600/5 dark:shadow-indigo-600/10 text-indigo-600">
                                        <i data-feather="dollar-sign" className="h-5 w-5"></i>
                                    </span>

                                    <span className="ms-3">
                                        <span className="text-slate-400 font-semibold block">Expenses</span>
                                        <span className="flex items-center justify-between mt-1">
                                            <span className="text-xl font-semibold">$<span className="counter-value" data-target="24351">22135</span></span>
                                            <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 1.6%</span>
                                        </span>
                                    </span>
                                </div>

                                <div className="px-5 py-4 bg-gray-50 dark:bg-slate-800">
                                    <a href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">View data <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div className="lg:col-span-8">
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <h6 className="text-lg font-semibold">Profit / Expenses Analytics</h6>
                                        
                                        <div className="position-relative">
                                            <select className="form-select form-input w-full py-2 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 focus:border-gray-200 dark:border-gray-800 dark:focus:border-gray-700 focus:ring-0" id="yearchart">
                                                <option value="Y" selected>Yearly</option>
                                                <option value="M">Monthly</option>
                                                <option value="W">Weekly</option>
                                                <option value="T">Today</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div id="mainchart" className="apex-chart px-4 pb-6"></div>
                                </div>
                            </div>

                            <div className="lg:col-span-4">
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <h6 className="text-lg font-semibold">Customers by Country</h6>

                                        <div className="dropdown relative">
                                            <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button">
                                                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><i className="mdi mdi-dots-vertical"></i></span>
                                            </button>
                                         
                                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                                <ul className="py-2 text-start">
                                                    <li>
                                                        <a href="" className="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white">Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white">Profile Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white">Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                                        <div id="map" className="w-full h-[236px]"></div>
                                    </div>

                                    <div className="p-6">
                                        <ul className="list-none flex">
                                            <li className="inline-block w-1/2"><span className="text-indigo-600 font-semibold">Canada</span>:<span className="text-slate-400 ms-2">12468</span></li>
                                            <li className="inline-block w-1/2"><span className="text-indigo-600 font-semibold">Greenland</span>:<span className="text-slate-400 ms-2">12468</span></li>
                                        </ul>
                                        <ul className="list-none flex">
                                            <li className="inline-block w-1/2"><span className="text-indigo-600 font-semibold">Russia</span>:<span className="text-slate-400 ms-2">12468</span></li>
                                            <li className="inline-block w-1/2"><span className="text-indigo-600 font-semibold">Palestine</span>:<span className="text-slate-400 ms-2">12468</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-6">
                            <div className="xl:col-span-5 lg:col-span-12">
                                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <h6 className="text-lg font-semibold">Orders</h6>
                                        
                                        <a href="" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-slate-400 dark:text-white/70 hover:text-indigo-600 dark:hover:text-white after:bg-indigo-600 dark:after:bg-white duration-500">View orders <i className="uil uil-arrow-right"></i></a>
                                    </div>

                                    <div className="relative overflow-x-auto block w-full max-h-[400px]" data-simplebar>
                                        <table className="w-full text-start">
                                            <thead className="text-base">
                                                <tr>
                                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[100px]">No.</th>
                                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[128px]">ID</th>
                                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[128px]">Date</th>
                                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[128px]">Price</th>
                                                    <th className="text-end font-semibold text-[15px] p-4 min-w-[128px]">Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">01</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw001</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">10th Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$253</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Delivered</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">02</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw002</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">13th Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$123</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/10 dark:border-indigo-600/20 text-indigo-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New Order</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">03</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw003</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">18th Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$245</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-red-600/10 dark:bg-red-600/20 border border-red-600/10 dark:border-red-600/20 text-red-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Return</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">04</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw004</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">21st Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$157</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-gray-500/5 border border-gray-500/5 text-gray-500 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Cancel</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">05</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw005</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">22nd Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$62</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-indigo-600/10 dark:bg-indigo-600/20 border border-indigo-600/10 dark:border-indigo-600/20 text-indigo-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">New Order</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">06</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw006</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">23rd Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$456</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Delivered</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">07</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">#tw007</td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">24th Aug 2023</span>
                                                    </td>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-slate-400">$478</span>
                                                    </td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="bg-emerald-600/10 dark:bg-emerald-600/20 border border-emerald-600/10 dark:border-emerald-600/20 text-emerald-600 text-[12px] font-bold px-2.5 py-0.5 rounded h-5 ms-1">Delivered</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </div>

                            <div className="xl:col-span-4 lg:col-span-6">
                                <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-gray-800 p-4">
                                        <div className="flex">
                                            <img src="assets/images/client/01.jpg" className="h-11 w-11 rounded-full shadow dark:shadow-gray-700" alt=""/>
                                            <div className="overflow-hidden ms-3">
                                                <a href="javascript:void(0)" className="block font-semibold text-truncate">Calvin Carlo</a>
                                                <span className="text-slate-400 flex items-center text-sm"><span className="bg-green-600 text-white text-[10px] font-bold rounded-full size-2 me-1"></span> Online</span>
                                            </div>
                                        </div>

                                        <div className="dropdown relative">
                                            <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button">
                                                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"><i className="mdi mdi-dots-vertical"></i></span>
                                            </button>
                                          
                                            <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden" onClick="event.stopPropagation();">
                                                <ul className="py-2 text-start">
                                                    <li>
                                                        <a href="" className="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"><i className="mdi mdi-account-outline"></i> Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"><i className="mdi mdi-cog-outline"></i> Profile Settings</a>
                                                    </li>
                                                    <li>
                                                        <a href="" className="block font-medium py-1 px-4 text-slate-400 dark:text-white/70 hover:text-slate-900 dark:hover:text-white"><i className="mdi mdi-trash-can-outline"></i> Delete</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="p-4 list-none mb-0 max-h-[350px] bg-[url('../../assets/images/bg-chat.png')] bg-no-repeat bg-center bg-cover" data-simplebar>
                                        <li>
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative">
                                                        <img src="assets/images/client/01.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="ms-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hey Cristina</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>59 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="text-end">
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative order-2">
                                                        <img src="assets/images/client/05.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="me-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hello Calvin</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>45 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="text-end">
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative order-2">
                                                        <img src="assets/images/client/05.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="me-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">How can i help you?</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>44 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative">
                                                        <img src="assets/images/client/01.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="ms-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Nice to meet you</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>42 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative">
                                                        <img src="assets/images/client/01.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="ms-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Hope you are doing fine?</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>40 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="text-end">
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative order-2">
                                                        <img src="assets/images/client/05.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="me-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">I'm good thanks for asking</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>38 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative">
                                                        <img src="assets/images/client/01.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="ms-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>35 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="text-end">
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative order-2">
                                                        <img src="assets/images/client/05.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="me-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Sure please check below link to find more useful information <a href="https://shreethemes.in/techwind/" target="_blank" className="text-indigo-600">https://shreethemes.in/techwind/</a></p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>29 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative">
                                                        <img src="assets/images/client/01.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="ms-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Thank you 😊</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>26 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="text-end">
                                            <div className="inline-block">
                                                <div className="flex mb-3">
                                                    <div className="relative order-2">
                                                        <img src="assets/images/client/05.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 end-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="me-2 max-w-lg">
                                                        <p className="bg-white dark:bg-slate-900 text-slate-400 text-sm shadow dark:shadow-gray-700 px-3 py-2 rounded mb-1">Welcome</p>
                                                        <span className="text-slate-400 text-sm"><i className="mdi mdi-clock-outline me-1"></i>15 min ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="inline-block">
                                                <div className="flex items-center mb-3">
                                                    <div className="relative">
                                                        <img src="assets/images/client/01.jpg" className="size-9 min-w-[36px] rounded-full shadow dark:shadow-gray-700" alt=""/>
                                                        <span className="absolute top-0.5 start-0.5 flex items-center justify-center bg-green-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-green-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                                                    </div>
                                                        
                                                    <div className="ms-2 max-w-lg">
                                                        <p className="text-slate-400 text-sm rounded mb-1">Frank Williams is typing
                                                            <span className="animate-typing ms-1">
                                                                <span className="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                                <span className="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                                <span className="dot inline-block size-1 bg-slate-400 -mr-px opacity-60 rounded-full"></span>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="p-2 border-t border-gray-100 dark:border-gray-800">
                                        <div className="flex ">
                                            <input type="text" className="form-input w-full py-2 px-3 h-9 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Enter Message..."/>

                                            <div className="min-w-[125px] text-end">
                                                <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-send"></i></a>
                                                <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-emoticon-happy-outline"></i></a>
                                                <a href="#" className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[16px] text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"><i className="mdi mdi-paperclip"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="xl:col-span-3 lg:col-span-6">
                                <div className="rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                                        <h6 className="text-lg font-semibold">Top Products / Items</h6>

                                        <a href="" className="text-slate-400 hover:text-indigo-600 dark:text-white/70 dark:hover:text-white text-[20px]"><i className="mdi mdi-swap-vertical"></i></a>
                                    </div>

                                    <div className="relative overflow-x-auto block w-full max-h-[400px]" data-simplebar>
                                        <table className="w-full text-start">
                                            <thead className="text-base">
                                                <tr>
                                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[150px]">Products</th>
                                                    <th className="text-start font-semibold text-[15px] p-4 min-w-[100px]">Earnings</th>
                                                    <th className="text-end font-semibold text-[15px] p-4 min-w-[80px]">Progress</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Techwind</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$4120</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 5.5%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Landrick</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$5648</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-red-600 text-sm ms-1 font-semibold"><i className="uil uil-chart-down"></i> 15.8%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Hously</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$456</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 1.3%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Jobstack</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$546</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-red-600 text-sm ms-1 font-semibold"><i className="uil uil-chart-down"></i> 1.54%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Giglink</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$124</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-red-600 text-sm ms-1 font-semibold"><i className="uil uil-chart-down"></i> 8.5%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Upwind</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$1545</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 6.4%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Fronter</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$1215</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-red-600 text-sm ms-1 font-semibold"><i className="uil uil-chart-down"></i> 4.8%</span>
                                                    </td>
                                                </tr>
                                                
                                                <tr>
                                                    <th className="text-start border-t border-gray-100 dark:border-gray-800 p-4 font-semibold">Doctris</th>
                                                    <td className="text-start border-t border-gray-100 dark:border-gray-800 p-4">$2321</td>
                                                    <td className="text-end border-t border-gray-100 dark:border-gray-800 p-4">
                                                        <span className="text-emerald-600 text-sm ms-1 font-semibold"><i className="uil uil-arrow-growth"></i> 4.1%</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>

                <footer className="shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 px-6 py-4">
                    <div className="container-fluid">
                        <div className="grid grid-cols-1">
                            <div className="sm:text-start text-center mx-md-2">
                                <p className="mb-0 text-slate-400">© <script>document.write(new Date().getFullYear())</script> Techwind. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>
                    </div>
                </footer>
             
            </main>

   </div>
  </>
  )
}

export default Home