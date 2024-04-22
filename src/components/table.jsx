import React from 'react'
import '../styles/table.css'
import tick from '../tick.svg'
function Table() {
    return (
        <>
        <div className="main-container">
            <div className="row1 row">
                <div className="col1 org box"></div>
                <div className="col2 org box">Stake amount</div>
                <div className="col3 org box">Voting</div>
                <div className="col4 org box">Gamefied NFT Player</div>
                <div className="col5 org box">Chance at IGO</div>
                <div className="col6 org box">Maximum investment in IGO</div>
            </div>
            <div className="row2 row">
                <div className="col1 org box">Tier 1</div>
                <div className="col2 box">1,000,000</div>
                <div className="col3 box"><img src = {tick} alt="" /></div>
                <div className="col4 box"></div>
                <div className="col5 box"></div>
                <div className="col6 box">1.000.000</div>
            </div>
            <div className="row3 row">
                <div className="col1 org box">Tier 2</div>
                <div className="col2 box">2,000,000</div>
                <div className="col3 box"><img src = {tick} alt="" /></div>
                <div className="col4 box"><img src = {tick} alt="" /></div>
                <div className="col5 box"></div>
                <div className="col6 box">2.000.000</div>
            </div>
            <div className="row4 row">
                <div className="col1 org box">Tier 3</div>
                <div className="col2 box">3.000.000</div>
                <div className="col3 box"><img src = {tick} alt="" /></div>
                <div className="col4 box"><img src = {tick} alt="" /></div>
                <div className="col5 box"></div>
                <div className="col6 box">3.000.000</div>
            </div>
            <div className="row5 row">
                <div className="col1 box org">Tier 4</div>
                <div className="col2 box">4.000.000</div>
                <div className="col3 box"><img src = {tick} alt="" /></div>
                <div className="col4 box"><img src = {tick} alt="" /></div>
                <div className="col5 box"><img src = {tick} alt="" /></div>
                <div className="col6 box">4.000.000</div>
            </div>
            <div className="row6 row">
                <div className="col1 box org">Tier 5</div>
                <div className="col2 box">5.000.000</div>
                <div className="col3 box"><img src = {tick} alt="" /></div>
                <div className="col4 box"><img src = {tick} alt="" /></div>
                <div className="col5 box"><img src = {tick} alt="" /></div>
                <div className="col6 box">5.000.000</div>
            </div>
        </div>
        </>
    )
}

export default Table