import React from "react";
import CardWrapper from "./CardWrapper";
import radialfirst from "../../assets/radialtrianglefirst.svg";
import radialsecond from "../../assets/radialtrianglesecond.svg";
import radialthird from "../../assets/radialtrianglethird.svg";
import leftside from "../../assets/leftsidecut.svg";
import rightside from "../../assets/rightsidecut.svg";
import egg1 from "../../assets/Egg1-basket.svg";
import egg2 from "../../assets/Egg2-basket.svg";
import egg3 from "../../assets/Egg3-basket.svg";
import BackgroundPrize from "../../assets/./BackgroundPrize.svg";
import BackgroundPrizemb from "../../assets/./bgmb.svg";
import Cloud from "../../assets/./Cloudsbackground.svg";
import Cloudmb from "../../assets/./cloudmb.svg"
import TopCloud from "../../assets/TopCloud.svg"
import BottomCloud from "../../assets/BottomCloud.svg"

const Cards = () => {
  const cardProps = {
    cardProps: {
      secondPrize: {
        prize: "Second Prize",
        prizeLabel: "SECOND",
        amount: "50K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialsecond, leftside, rightside, egg: egg3 },
      },
      firstPrize: {
        prize: "First Prize",
        prizeLabel: "FIRST",
        amount: "125K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialfirst, leftside, rightside, egg: egg3 },
      },
      thirdPrize: {
        prize: "Third Prize",
        prizeLabel: "THIRD",
        amount: "30K",
        description:
          "Innerve Goodies and Merch. Fundings and Internship opportunities from our sponsors",
        images: { radial: radialthird, leftside, rightside, egg: egg3 },
      },
    },
  };
  return (
    <>
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div>
      <img src={TopCloud} style={{width: '100%'}}></img>
      </div>
      <div style={{ 
        minHeight: '100vh', 
        width: '100vw', 
        backgroundColor: '#109fa1', 
        padding: '20px',
        boxSizing: 'border-box',
        paddingBottom: '60px'
      }}>
      <p className="font-angrybirds  text-white text-6xl pt-10">
          PRIZE POOL OF Rs. 10,00,000+
        </p>
        <div className="flex justify-center gap-20 pt-14 items-center flex-wrap">
          <CardWrapper {...cardProps.cardProps.firstPrize} style={{maxWidth: '300px'}} />
          <CardWrapper {...cardProps.cardProps.secondPrize} style={{maxWidth: '300px'}} />
          <CardWrapper {...cardProps.cardProps.thirdPrize} style={{maxWidth: '300px'}} />
        </div>
      </div>
      <div>
      <img src={BottomCloud} style={{width: '100%'}}></img>
      </div>
    </div>
    </>
    {/* <div className="prize lg:h-auto md:h-[200vh] h-[220%] mt-[-10vh] z-[3]">
      
      <div className="relative flex flex-col items-center top-0 z-[-2] w-screen transform bg-[#109fa1]" >
        <p className="absolute text-4xl md:text-5xl lg:text-5xl xl:text-5xl xl:top-[30%] lg:top-[30%] top-[6%] font-angrybirds z-[5] text-white left-1/2 transform -translate-x-1/2 text-center w-full">
          PRIZE POOL OF Rs. 10,00,000+
        </p>
        <div className="absolute flex flex-col lg:flex-row justify-center items-center top-[12%] lg:top-[40%] md:top-[20vh] w-full h-screen gap-20 lg:gap-10 z-[5] px-4 bg-[#109fa1]">
          <CardWrapper {...cardProps.cardProps.firstPrize} className="order-1 md:order-2" />
          <CardWrapper {...cardProps.cardProps.secondPrize} className="order-2 md:order-1" />
          <CardWrapper {...cardProps.cardProps.thirdPrize} className="order-3" />
          
        </div>
        
      </div>
      
    </div> */}
    </>
  );
};

export default Cards;
