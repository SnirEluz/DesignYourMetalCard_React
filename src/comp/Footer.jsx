import React from 'react'
import { useLocation } from "react-router-dom";

export default function Footer({ navigateTo }) {
    const { pathname } = useLocation();
    if (pathname === "/order") return null;
    return (
        <div className="Footer">
            <div className="FooterTop">
                <div className="LogoDiv">
                    <h1>North Metal Card</h1>
                    <h2>Make simplicity luxurious</h2>
                </div>
                <div className="SiteMapDiv">
                    <h1 onClick={() => navigateTo("")}>דף הבית</h1>
                    <h2 onClick={() => navigateTo("precard")}>עיצובים מוכנים מראש</h2>
                    <h2 onClick={() => navigateTo("contact")}>יצירת קשר</h2>
                    <h2 onClick={() => navigateTo("")}>שאלות מתבקשות</h2>
                </div>
                <div className="ContactUs">
                    <h1>הישארו בקשר</h1>
                    <a href="tel:+972555555555"><h2>+972-55-555-5555</h2></a>
                    <a href="info@northmetalcard.com"><h2>info@northmetalcard.com</h2></a>
                </div>
            </div>
            <div className="FooterBottom">
                <h4>© 2021 North Metal Card, כל הזכויות שמורות </h4>
            </div>
        </div>
    )
}
