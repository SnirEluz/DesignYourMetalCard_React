import React from 'react'
import $ from 'jquery';
import { useState } from 'react';

export default function EditCardInfo({
    inpNameCard,
    setinpNameCard,
    cardNameBack,
    setBackSelected,
    backSelected,
    setCardNameFront,
    setCardNameBack,
    setCardNumberFront,
    setCardNumberBack,
    cardNumber }) {
    const btnFront = (Front, Back) => {
        $(Front).css("background-color", "black")
        $(Front).css("color", "white")
        $(Back).css("background-color", "white")
        $(Back).css("color", "gray")
    }
    const btnBack = (Front, Back) => {
        $(Front).css("background-color", "white")
        $(Front).css("color", "gray")
        $(Back).css("background-color", "black")
        $(Back).css("color", "white")
    }
    return (
        <div className="EditCardInfo">
            <div className="CardHolderName" >
                <h1>שם בעל הכרטיס <p>({inpNameCard.length}/20)</p></h1>
                <input
                    value={inpNameCard}
                    onChange={(e) => {
                        setinpNameCard(e.target.value)
                        if (backSelected) {
                            setCardNameBack(e.target.value)
                        } else if (backSelected === false) {
                            setCardNameFront(e.target.value)
                        }
                    }}
                    type="text"
                    placeholder="השם שלך"
                    maxLength="20" />
            </div>
            <div className="CardNameSide">
                <h1>שם הכרטיס בצד</h1>
                <div>
                    <button
                        className="BtnFrontCardNameSide"
                        onClick={() => {
                            setCardNameFront(inpNameCard)
                            setBackSelected(false)
                            setCardNameBack("")
                            btnFront(".BtnFrontCardNameSide", ".BtnBackCardNameSide")
                        }}>חזית
                    </button>
                    <button
                        className="BtnBackCardNameSide"
                        onClick={() => {
                            setCardNameBack(inpNameCard)
                            setBackSelected(true)
                            setCardNameFront("")
                            btnBack(".BtnFrontCardNameSide", ".BtnBackCardNameSide")
                        }}>גב
                    </button>
                </div>
            </div>
            <div className="CardNumberSide">
                <h1>מספר הכרטיס בצד</h1>
                <div>
                    <button
                        className="BtnFrontCardNumberSide"
                        onClick={() => {
                            setCardNumberFront(cardNumber)
                            setCardNumberBack([])
                            btnFront(".BtnFrontCardNumberSide", ".BtnBackCardNumberSide")
                        }}>חזית</button>
                    <button
                        className="BtnBackCardNumberSide"
                        onClick={() => {
                            setCardNumberFront([])
                            setCardNumberBack(cardNumber)
                            btnBack(".BtnFrontCardNumberSide", ".BtnBackCardNumberSide")
                        }}>גב</button>
                </div>
            </div>
        </div>
    )
}
