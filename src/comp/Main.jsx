import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './homePage/HomePage'
import Contact from './contact/Contact'
import PreCard from './precard/PreCard'
import ThanksPage from './contact/ThanksPage'
import Order from './order/Order'


export default function Main({ navigateTo, setShowMenu, CategoriesArr, setCategoriesArr }) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage navigateTo={navigateTo} />} />
                <Route path="/precard" element={<PreCard CategoriesArr={CategoriesArr} setCategoriesArr={setCategoriesArr} />} />
                <Route path="/order" element={<Order CategoriesArr={CategoriesArr} setShowMenu={setShowMenu} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thankspage" element={<ThanksPage navigateTo={navigateTo} />} />
                {/* להגיר דף 404 */}
                <Route path="/*" element={<HomePage />} />
            </Routes>
        </div>
    )
}
