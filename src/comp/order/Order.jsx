import React from 'react'
import "./Order.scss"
import TollBar from './TollBar'
import chip from './image/chip.png'
import HeaderOrder from './HeaderOrder'
import { useState } from 'react'
import $ from 'jquery';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

export default function Order({ setShowMenu, CategoriesArr }) {
    // EditCardInfo
    const [inpNameCard, setinpNameCard] = useState("")
    const [cardNameFront, setCardNameFront] = useState("")
    const [cardNameBack, setCardNameBack] = useState("")
    const [cardNumber, setCardNumber] = useState([
        "0000 0000 0000 0000",
        "GOOD THRU",
        "05/25"
    ])
    const [cardNumberFront, setCardNumberFront] = useState(cardNumber)
    const [cardNumberBack, setCardNumberBack] = useState([])
    // ChoseMetal
    const [choseMetal, setChoseMetal] = useState(CategoriesArr[0].allCard[0])
    // TotalPrice
    const [totalPrice, setTotalPrice] = useState(400)
    const [totalPriceCutom, setTotalPriceCutom] = useState(0)
    const [showTotalPrice, setShowTotalPrice] = useState(false)
    return (
        <div className="Order">
            <HeaderOrder setShowMenu={setShowMenu} />
            <div className="LightBox"
                onClick={() => {
                    setShowTotalPrice(false)
                    $(".LightBox").css("display", "none")
                    $(".TollBarApp").removeClass("TollBarAppOpen")
                }}
            ></div>
            <div className="CardApp">
                <div className="CardAppFront">
                    <img className="Chip" src={chip} alt="" />
                    <div className="CardNumber">
                        <h4>{cardNumberFront[0]}</h4>
                        <h5>{cardNumberFront[1]}</h5>
                        <h6>{cardNumberFront[2]}</h6>
                    </div>
                    <h3 className="CardName">{cardNameFront}</h3>
                    <img src={choseMetal} alt="" />
                </div>
                <div className="CardAppBack">
                    <div className="ScanOne"></div>
                    <div className="ScanTwo"></div>
                    <div className="CardNumber">
                        <h4>{cardNumberBack[0]}</h4>
                        <h5>{cardNumberBack[1]}</h5>
                        <h6>{cardNumberBack[2]}</h6>
                    </div>
                    <h3 className="CardName">{cardNameBack}</h3>
                    <img src={choseMetal} alt="" />
                </div>
            </div>
            <TollBar
                // EditCardInfo
                inpNameCard={inpNameCard}
                setinpNameCard={setinpNameCard}
                setCardNameFront={setCardNameFront}
                cardNameBack={cardNameBack}
                setCardNameBack={setCardNameBack}
                setCardNumberFront={setCardNumberFront}
                setCardNumberBack={setCardNumberBack}
                cardNumber={cardNumber}
                // ChoseMetal
                setChoseMetal={setChoseMetal}
                CategoriesArr={CategoriesArr}
                // ChoseMetal
                totalPrice={totalPrice}
                totalPriceCutom={totalPriceCutom}
                setTotalPriceCutom={setTotalPriceCutom}
                showTotalPrice={showTotalPrice}
                setShowTotalPrice={setShowTotalPrice}
            />
        </div>
    )
}
