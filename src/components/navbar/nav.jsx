import React from 'react'
import './nav.css'
import { IoMdMenu } from "react-icons/io";

function Nav() {
    return (
        <div className='navbar'>
            <div className="nav">
                <div className="menu-btn">
                    <button><IoMdMenu /></button>
                </div>
                <div className="name">
                    Adam Rifsal
                </div>
                <div className="gt-btn">
                    <button>Get in touch</button>
                </div>
            </div>
        </div>
    )
}

export default Nav