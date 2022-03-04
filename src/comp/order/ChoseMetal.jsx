import React from 'react'

export default function ChoseMetal({
    setChoseMetal,
    CategoriesArr,
    setTotalPriceCutom,
}) {
    return (
        <div className="ChoseMetal">
            <h1 className="TitleChoseMetal">צבעים</h1>
            <div className="BtnColorToChose">
                <div className="ColorDiv"
                    onClick={() => {
                        setChoseMetal(CategoriesArr[0].allCard[0])
                        setTotalPriceCutom(0)
                    }}>
                    <h1>שחור</h1>
                    <div className="Black"></div>
                    <h2>40₪+</h2>
                </div>
                <div className="ColorDiv"
                    onClick={() => {
                        setChoseMetal(CategoriesArr[0].allCard[1])
                        setTotalPriceCutom(39)
                    }}>
                    <h1>כסף</h1>
                    <div className="Silver"></div>
                    <h2>0₪+</h2>
                </div>
                <div className="ColorDiv"
                    onClick={() => {
                        setChoseMetal(CategoriesArr[0].allCard[2])
                        setTotalPriceCutom(39)
                    }}>
                    <h1>זהב</h1>
                    <div className="Gold"></div>
                    <h2>40₪+</h2>
                </div>
                <div className="ColorDiv"
                    onClick={() => {
                        setChoseMetal(CategoriesArr[0].allCard[3])
                        setTotalPriceCutom(39)
                    }}>
                    <h1>רוזגולד</h1>
                    <div className="Rosegold"></div>
                    <h2>40₪+</h2>
                </div>
            </div >
        </div >
    )
}
