import React from 'react'
import closeMenu from './image/closeMenu.png'
import tiktok from './image/tiktok.png';
import facebook from './image/facebook.png';
import instagram from './image/instagram.png';
import $ from 'jquery';

export default function Menu({ navigateTo, setShowMenu }) {
    const headerDesing = () => {
        $(".Header").css("backdrop-filter", "blur(40px)")
    }
    return (
        <div className="Menu">
            <div className="MenuHeader">
                <img onClick={() => {
                    headerDesing()
                    setShowMenu(false)
                }} src={closeMenu} alt="" />
            </div>
            <div className="MenuMain">
                <h1 onClick={() => {
                    headerDesing()
                    navigateTo("")
                }}>בית</h1>
                <h1 onClick={() => {
                    headerDesing()
                    navigateTo("order")
                }}>עצב את שלך</h1>
                <h1 onClick={() => {
                    headerDesing()
                    navigateTo("precard")
                }}>עיצובים מוכנים מראש</h1>
                <h1 onClick={() => {
                    headerDesing()
                    navigateTo("contact")
                }}>יצירת קשר</h1>
                <h1 onClick={() => {
                    headerDesing()
                    navigateTo("contact")
                }}>שאלות ותשובות</h1>
            </div>
            <div className="MenuSocialMedia">
                <img src={tiktok} alt="" />
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
            </div>
            <div className="MenuFooter">
                <h5>© 2021 North, Inc. All Rights Reserved</h5>
            </div>
        </div>
    )
}
