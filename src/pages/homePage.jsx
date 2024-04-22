import React from 'react';
import "../styles/home.css";
import Navbar from '../components/navBar';
import heroHeading from "../heroHeading.svg";
import heroSub from "../heroSub.svg";
import Card from '../components/card';
import SocialMediaCard from '../components/socialMediaCard';
import OptButton from '../components/optButtons';
import section from '../section.svg';
import learn from '../learnText.svg';
import Table from '../components/table';
import LilCard from '../components/lilCard';
import divider from '../divider.svg';
import Partner from '../OurPartners.svg';
import imageCard from '../imageCard.svg';
import Chain from '../chain.svg';
import Cross from '../crossChain.svg';
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="hero-section">
        <img className='heroSub' src={heroSub} alt="" />
        <img className='heroHeading' src={heroHeading} alt="" />
      </div>
      <h5 className='latest'>Latest Games</h5>
      <div className="home-card-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className='socialCards'>
        <OptButton opt1="Social Media" opt2="IDO" size="medium"></OptButton>
        <br />
        <OptButton opt1="Hastags" opt2="Social Mentions" size='large'></OptButton>
        <div className='social-section'>
          <div className='hash'>
            <p className='bold'>#BlockchainXWeeWeetab</p>
            <p className='light'>#BlockchainXWeeWeetab</p>
            <p className='light'>#BlockchainXWeeWeetab</p>
            <p className='light'>#BlockchainXWeeWeetab</p>
            <p className='light'>#BlockchainXWeeWeetab</p>
          </div>
          <SocialMediaCard></SocialMediaCard>
          <SocialMediaCard transparent={"transparent"}></SocialMediaCard>
        </div>
        <div className='h-btn'>view all pools</div>
        <div className="section-container">
          <img src={section} alt="" />
        </div>
        <div className="learn-container">
          <img src={learn} alt="" />
          <div className='h-btn'>Tiers</div>
        </div>
        <div className="table-container">
          <Table></Table>
        </div>
        <div className="divider">
          <img src={divider} alt="" />
        </div>
        <div className="lilCard-container">
          <LilCard></LilCard>
          <LilCard></LilCard>
          <LilCard></LilCard>
          <LilCard></LilCard>
        </div>
        <div className="partners">
          <div className="heading">
            <img src={Partner} alt="" />
          </div>
          <div className='partner-container'>
            <div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
            </div>
            <div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
              <div>
                <img src={imageCard} alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className="cross-chain">
          <div><img src={Cross} alt="" /></div>
          <div className="chain-img-container">
            <div><img src={Chain} alt="" /></div>
            <div><img src={Chain} alt="" /></div>
            <div><img src={Chain} alt="" /></div>
          </div>
        </div>
        <div className="bottom-logo-container">
          <h3>Logo</h3>
        </div>
        <h1 className='rights'>All Rights reserved</h1>
      </div>
    </>

  )
}

export default Home