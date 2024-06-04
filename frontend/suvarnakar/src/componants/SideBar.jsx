import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
function SideBar() {

    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };



  return (
    <>

<nav id="sidebar" className="sidebar-wrapper">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <a href="/">
                        <img src="assets/images/logo-dark.png" height="24" alt=""/>
                    </a>
                </div>

                <ul className="sidebar-menu border-t border-white/10" data-simplebar style={{ height: 'calc(100% - 70px)' }}>
                    <li className="">
                        <Link to="/">
                            <i className="uil uil-estate me-2"></i>Home
                        </Link>
                    </li>
                   
                    <li className="sidebar-dropdown">
                        <a href="#" onClick={() => toggleDropdown('customer')}>
                            <i className="uil uil-users-alt me-2"></i>Customer
                        </a>
                        <div className={`sidebar-submenu ${activeDropdown === 'customer' ? 'block' : ''}`}>
                            <ul>
                                <li ><Link to='/customer' >Lead Form</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="sidebar-dropdown">
                        <a href="#" onClick={() => toggleDropdown('messaging')}>
                        <i class="uil uil-message me-2"></i>Messaging
                        </a>
                        <div className={`sidebar-submenu ${activeDropdown === 'messaging' ? 'block' : ''}`}>
                            <ul>
                                <li><Link to='/templates'>Templates</Link></li>
                                <li><Link to='/customer-listing'>Customer Listing</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="sidebar-dropdown">
                        <a href="#" onClick={() => toggleDropdown('masters')}>
                            <i className="uil uil-browser me-2"></i>Masters
                        </a>
                        <div className={`sidebar-submenu ${activeDropdown === 'masters' ? 'block' : ''}`}>
                            <ul>
                                <li><Link to='/customer-list'>Customer Type</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default SideBar
