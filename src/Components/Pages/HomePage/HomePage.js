import React from "react";
import HomeContent from "./HomeContent";
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"

export default function HomePage() {
    return (

        <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", width: "100vw",height:"100vh" }}>
          
          <div style={{paddingTop:"10vh"}}>
          <HomeContent />
          </div>
        
          
        </div>


    );
}