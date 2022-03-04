import React from 'react'

export default function Categories({ CategoriesItem, hrefIndex ,CategoriesArr }) {
    return (
        <div>
            <a href={`#${hrefIndex}`}>
                <div className="CategoriesItem">
                    <h2>{CategoriesItem.allCard.length}</h2>
                    <img src={CategoriesItem.image} alt={CategoriesItem.nameByCategories} />
                    <h1>{CategoriesItem.nameByCategories}</h1>
                </div>
            </a>
        </div>
    )
}
