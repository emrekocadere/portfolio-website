import React from "react";
import CustomHeader from "../../../Components/Header/CustomHeader"
import HomeContent from "./HomeContent";
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"

export default function HomePage() {
    return (

        <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", width: "100vw",height:"100vh" }}>
        
            <HomeContent />
        </div>


    );
}