import React from 'react';
import '../styles/socialMediaCard.css';
import twitter from '../TwitterIcon.svg';
import like from '../heartIcon.svg';
import comment from '../comment.svg';
import insta from '../instaIcon.svg';
import tiktok from '../tikTokIcon.svg';

function SocialMediaCard({transparent}) {
    const cls = `social-media-container ${transparent}`
  return (
    <>
        <div className={cls}>
            <div className="target-container">
                <p className='target-count'>2423/<span className='light'>3000</span></p>
                <p className="target-text">Target</p>
            </div>
            <div>
            <div className="social-count">
                <div className='twitter'>
                    <div className='twitter-main'>
                        <div className='icon-container'>
                            <img src={twitter}></img><p>1430#s</p>
                        </div>
                        <div className='progress-bar'>
                            <div className='filled'>
                            </div>
                        </div>
                    </div>
                    <div className='socialCounts'>
                        <div className="likes">
                            <img src={like} alt="" /><span>3000</span>
                        </div>
                        <div className="comments">
                            <img src={comment} alt="" /><span>3000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='twitter'>
                    <div className='twitter-main'>
                        <div className='icon-container'>
                            <img src={insta}></img><p>1430#s</p>
                        </div>
                        <div className='progress-bar'>
                            <div className='filled'>
                            </div>
                        </div>
                    </div>
                    <div className='socialCounts'>
                        <div className="likes">
                            <img src={like} alt="" /><span>3000</span>
                        </div>
                        <div className="comments">
                            <img src={comment} alt="" /><span>3000</span>
                        </div>
                    </div>
                </div>
                <div className='twitter'>
                    <div className='twitter-main'>
                        <div className='icon-container'>
                            <img src={tiktok}></img><p>1430#s</p>
                        </div>
                        <div className='progress-bar'>
                            <div className='filled'>
                            </div>
                        </div>
                    </div>
                    <div className='socialCounts'>
                        <div className="likes">
                            <img src={like} alt="" /><span>3000</span>
                        </div>
                        <div className="comments">
                            <img src={comment} alt="" /><span>3000</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default SocialMediaCard