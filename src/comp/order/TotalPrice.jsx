import React from 'react'

export default function TotalPrice({ totalPrice, totalPriceCutom }) {
    return (
        <div className="TotalPrice" >
            {totalPriceCutom > 0 ? <div className="CardPrice">
                <h1> כרטיס מראה</h1>
                <h2>{totalPriceCutom}₪ שקל +</h2>
            </div> : null}
            <div className="CardPrice">
                <h1>כרטיס</h1>
                <h2>{totalPrice}₪ שקל</h2>
            </div>
            <div className="TotalCardPrice">
                <h1><p>(שקל)</p>סה"כ</h1>
                <h2>{totalPrice + totalPriceCutom}₪ שקל</h2>
            </div>
        </div>
    )
}
