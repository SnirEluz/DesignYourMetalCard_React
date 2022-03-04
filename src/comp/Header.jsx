import React from 'react'
import leftMenu from './image/leftMenu.png'
import $ from 'jquery';
import { useLocation } from "react-router-dom";

export default function Header({ setShowMenu }) {
    
    return (
        <div className="Header">
            <h1>North Metal Card</h1>
            <img onClick={() => {
                setShowMenu(true)
                $(".Header").css("backdrop-filter", "none")
            }} src={leftMenu} alt="" />
        </div>
    )
}
