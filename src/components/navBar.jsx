import React from 'react'
import '../styles/nav.css'
function Navbar() {
    return (
        <>
            <nav>
               <div className="logo"></div>
               <div className="menu-container">
                    <div className='dropdown'>defi <i className='material-icons'>expand_more</i></div>
                    <div>Stacking lots</div>
                    <div>Network Stats</div>
                    <div>Docs</div>
               </div>
               <div className="menu-buttons-container">
                    <div className='tsp-btn'>0.432 <i className='material-icons'>expand_more</i></div>
                    <div className='tsp-btn'>34kl...4342 <i className='material-icons'>expand_more</i></div>
                    <div className='submit-btn'>Submit your game</div>
               </div>
            </nav>
        </>
    )
}

export default Navbar