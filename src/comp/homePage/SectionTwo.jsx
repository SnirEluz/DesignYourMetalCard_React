import React from "react";
import { useState } from "react";

import blackCard from './image/blackCard.png'
import silverCard from './image/silverCard.png'
import goldCard from './image/goldCard.png'

export default function SectionTwo() {
  const [CategoriesArr, setCategoriesArr] = useState([
    {
      allCard: [
        silverCard
      ],
    },
    {
      allCard: [
        goldCard
      ],
    },
    {
      allCard: [
        blackCard
      ],
    },

  ])

  return (
    <div className="SectionTwo">
      <h1>להפוך את הפשטות ליוקרה</h1>
      <div className="images">
        {CategoriesArr.map((item, index) =>
          <div key={index}>
            <img src={item.allCard} alt="" />
          </div>)}
      </div>
    </div>
  )
}


