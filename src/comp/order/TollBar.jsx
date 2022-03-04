import React from 'react'
import $ from 'jquery';
import { useState } from 'react';
import EditCardInfo from './EditCardInfo';
import ChoseMetal from './ChoseMetal';
import AddCustom from './AddCustom';
import { useEffect } from 'react';
import TotalPrice from './TotalPrice';

export default function TollBar({
    // EditCardInfo
    inpNameCard,
    setinpNameCard,
    setCardNameFront,
    cardNameBack,
    setCardNameBack,
    setCardNumberFront,
    setCardNumberBack,
    cardNumber,
    // ChoseMetal
    setChoseMetal,
    CategoriesArr,
    // TotalPrice
    totalPrice,
    totalPriceCutom,
    setTotalPriceCutom,
    showTotalPrice,
    setShowTotalPrice,
}) {
    const [showEditCardInfo, setShowEditCardInfo] = useState(false)
    const [showChoseMetal, setShowChoseMetal] = useState(false)
    const [showAddCustom, setShowAddCustom] = useState(false)
    const [backSelected, setBackSelected] = useState(false)
    const btnColors = (Selected, NonOne, NonTwo) => {
        $(Selected).css("background-color", "black")
        $(Selected).css("color", "white")
        $(NonOne).css("background-color", "white")
        $(NonOne).css("color", "gray")
        $(NonTwo).css("background-color", "white")
        $(NonTwo).css("color", "gray")
    }
    const btnBack = (Front, Back) => {
        $(Front).css("background-color", "white")
        $(Front).css("color", "gray")
        $(Back).css("background-color", "black")
        $(Back).css("color", "white")
    }
    return (
        <div className="TollBar">
            <div className="TollBarMenu">
                <div className="BtnTollBar">
                    <button className="left"
                        onClick={() => {
                            setShowTotalPrice(true)
                            setShowEditCardInfo(true)
                            setShowChoseMetal(false)
                            setShowAddCustom(false)
                            btnColors(".left", ".middle", ".right")
                            $(".TollBarApp").addClass("TollBarAppOpen")
                            $(".LightBox").css("display", "block")
                        }}>עריכת פירטי הכרטיס
                    </button>
                    <button className="middle"
                        onClick={() => {
                            setShowTotalPrice(true)
                            setShowChoseMetal(true)
                            setShowEditCardInfo(false)
                            setShowAddCustom(false)
                            btnColors(".middle", ".left", ".right")
                            $(".TollBarApp").addClass("TollBarAppOpen")
                            $(".LightBox").css("display", "block")
                        }}>בחירת מתכת
                    </button>
                    <button className="right"
                        onClick={() => {
                            setShowTotalPrice(true)
                            setShowAddCustom(true)
                            setShowEditCardInfo(false)
                            setShowChoseMetal(false)
                            btnColors(".right", ".middle", ".left")
                            $(".TollBarApp").addClass("TollBarAppOpen")
                            $(".LightBox").css("display", "block")
                        }}>אוסף לוגו / טקסט
                    </button>
                </div>
            </div>
            <div className="TollBarApp" dir="rtl" >
                {showEditCardInfo ? <EditCardInfo
                    backSelected={backSelected}
                    setBackSelected={setBackSelected}
                    inpNameCard={inpNameCard}
                    setinpNameCard={setinpNameCard}
                    setCardNameFront={setCardNameFront}
                    cardNameBack={cardNameBack}
                    setCardNameBack={setCardNameBack}
                    setCardNumberFront={setCardNumberFront}
                    setCardNumberBack={setCardNumberBack}
                    cardNumber={cardNumber}
                /> : null}
                {showChoseMetal ? <ChoseMetal
                    setChoseMetal={setChoseMetal}
                    CategoriesArr={CategoriesArr}
                    setTotalPriceCutom={setTotalPriceCutom}
                /> : null}
                {showAddCustom ? <AddCustom /> : null}
            </div>
            {showTotalPrice ? <TotalPrice
                totalPrice={totalPrice}
                totalPriceCutom={totalPriceCutom}
            /> : null}
        </div>
    )
}
