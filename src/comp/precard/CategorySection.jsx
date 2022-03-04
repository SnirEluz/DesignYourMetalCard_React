import React from 'react'
import silverCard from './image/card/silverCard.png'
import blackCard from './image/card/blackCard.png'
import goldCard from './image/card/goldCard.png'
import { useState } from 'react';

export default function CategorySection({ categoriesArr, setCategoriesArr }) {
    const [state, setstate] = useState({border: '4px solid white'})

    return (
        <div >
            {categoriesArr.map((item, index) => (
                <div key={index} id={index} className="CategorySection">
                    <div className="CategorySectionTop">
                        <img src={item.image} alt={item.nameByCategories} />
                        <h1>{item.nameByCategories}</h1>
                        <h5>{item.allCard.length} פריטים</h5>
                    </div>
                    <div className="CategorySectionMiddle">
                        {item.allCard.map((c, i) => (
                            <img key={i} src={c} alt="" />
                        ))}
                    </div>
                    <div className="CategorySectionBottom">
                        <div className="silver"
                            onClick={() => {
                                setCategoriesArr((prevValue) => {
                                    return prevValue.map((item, itemIndex) => {
                                        if (itemIndex === index) {
                                            return { ...item, allCard: [silverCard, silverCard, silverCard, silverCard, silverCard, silverCard] };
                                        } else {
                                            return item;
                                        }
                                    });
                                });
                            }}>
                        </div>
                        <div className="black"
                            onClick={() => {
                                setCategoriesArr((prevValue) => {
                                    return prevValue.map((item, itemIndex) => {
                                        if (itemIndex === index) {
                                            return { ...item, allCard: [blackCard, blackCard, blackCard, blackCard, blackCard, blackCard] };
                                        } else {
                                            return item;
                                        }
                                    });
                                });
                            }}></div>
                        <div className="gold"
                            onClick={() => {
                                setCategoriesArr((prevValue) => {
                                    return prevValue.map((item, itemIndex) => {
                                        if (itemIndex === index) {
                                            return { ...item, allCard: [goldCard, goldCard, goldCard, goldCard, goldCard, goldCard] };
                                        } else {
                                            return item;
                                        }
                                    });
                                });
                            }}></div>
                        <div className="colourful"
                            onClick={() => {
                                setCategoriesArr((prevValue) => {
                                    return prevValue.map((item, itemIndex) => {
                                        if (itemIndex === index) {
                                            return { ...item, allCard: [silverCard, blackCard, goldCard, silverCard, blackCard, goldCard] };
                                        } else {
                                            return item;
                                        }
                                    });
                                });
                            }}></div>
                        <div className="rosegold"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
