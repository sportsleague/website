import React, { useEffect } from "react";
import "./Home.css";

import HomeIcon from "../../components/home_icon/HomeIcon";
import HomeFootnote from "../../components/home_footnote/HomeFootnote";

import athletes from "../../assets/messi_mbappe_son.png";
import phone_models from "../../assets/phone_models_two.png";
import bets_icon from "../../assets/icons/BetsIcon.png";
import bracket_icon from "../../assets/icons/BracketIcon.png";
import fantasy_icon from "../../assets/icons/FantasyIcon.png";
import nft_icon from "../../assets/icons/NftIcon.png";
import pickem_icon from "../../assets/icons/PickemIcon.png";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <div className="header-content">
          <div className="compete-like-a-champion-container">
            <p className="compete-text">COMPETE LIKE </p>
            <p>
              A <span className="champion-text">CHAMPION</span>
            </p>
          </div>
          <img src={athletes} className="athletes" alt="athletes" />
        </div>
        <div className="triangle"></div>
        <div className="rectangle"></div>
      </header>

      <div className="home-features">
        <div className="icons-container">
          <HomeIcon src={pickem_icon} title="PICK'EM" />
          <HomeIcon src={bracket_icon} title="BRACKETS" />
          <HomeIcon src={fantasy_icon} title="FANTASY" />
          <HomeIcon src={bets_icon} title="BETS" />
          <HomeIcon src={nft_icon} title="NFTS" />    
        </div>
        <img className="phone-models" src={phone_models} alt="phone models" />
      </div>

      <HomeFootnote />
    </div>
  );
}
