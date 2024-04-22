import React from 'react';
import '../styles/card.css';
import imageIcon from '../imageIcon.svg';
function Card() {
    return (
        <>
            <div className="card-container">
                <div className="image-container">
                    <img src={imageIcon} alt="" />
                </div>
                <div className="card-details-container">
                    <div className="text-details-container">
                        <h4 className="details-title">
                            Gametized
                        </h4>
                        <p>Statergy</p>
                    </div>
                    <div className="amount">
                        <p>0,4324</p>
                    </div>
                </div>
                <div className="card-btn ">
                    <p>Register</p>
                </div>
            </div>
        </>
    )
}

export default Card