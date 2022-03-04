import React from 'react'
import leftMenu from './image/leftMenu.png'
import $ from 'jquery';
export default function HeaderOrder({ setShowMenu }) {
    return (
        <div className="HeaderOrder">
            <h1>North Metal Card</h1>
            <img onClick={() => {
                setShowMenu(true)
                $(".Header").css("backdrop-filter", "none")
            }} src={leftMenu} alt="" />
        </div>
    )
}
