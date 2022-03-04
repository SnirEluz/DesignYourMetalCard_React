import React from 'react'
import { useState } from 'react';
import './PreCard.scss';

import Categories from './Categories';
import CategorySection from './CategorySection';

import { Helmet } from 'react-helmet';


export default function PreCard({CategoriesArr, setCategoriesArr}) {

    return (
        <div className="PreCard">
            <Helmet>
                <title>Pre Card</title>
            </Helmet>
            <div className="TopSection">
                <h1>הנמכרים ביותר</h1>
                <h5>! בחר את אחד מהמוכרים שלנו הוסף את שמך ושלם</h5>
            </div>
            <div className="CategoriesSection">
                <div className="CategoriesSectionTop">
                    <h1>חקור לפי קטגוריות</h1>
                </div>
                <div className="CategoriesSectionMiddle">
                    {CategoriesArr.map((CategoriesItem, index, hrefIndex) => <Categories
                        key={index}
                        hrefIndex={index}
                        CategoriesItem={CategoriesItem}
                        CategoriesArr={CategoriesArr}
                    />)}

                </div>
                <div className="CategoriesSectionBottom">
                    <button>שמאלה</button>
                    <button>ימינה</button>
                </div>
            </div>
            <CategorySection
                setCategoriesArr={setCategoriesArr}
                categoriesArr={CategoriesArr}
            />
        </div>
    )
}
