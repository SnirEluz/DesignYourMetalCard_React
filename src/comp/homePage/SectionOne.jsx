import React from 'react'
import metalCard from "./image/metalCard.png"

export default function SectionOne({navigateTo}) {
    return (
        <div className="SectionOne">
            <img src={metalCard} alt="" />
            <h1>כרטיסי אשראי וחיוב מתכת מותאמים אישית</h1>
            <h5>צור עיצוב מותאם אישית משלך או בחר מתוך אחד מהעיצובים המוכנים מראש שלנו</h5>
            <div className="Btn">
                <button onClick={()=> navigateTo("precard")}>עצב את שלך</button>
                <button>עיצובים מוכנים מראש</button>
            </div>
            <div className="Fade">
            </div>
        </div>
    )
}
