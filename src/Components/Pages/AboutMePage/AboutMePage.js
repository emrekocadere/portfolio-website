import React from 'react';
import AboutmeContent from './AboutMeContent';
import CustomHeader from '../../Header/CustomHeader';
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
export default function AboutmePage() {
    return (

        <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", height: "100vh" }}>
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.4)",height:"100vh"}}>
                <div style={{ paddingBlock: "5vh" }}>
                    <CustomHeader />
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                    <AboutmeContent />
                </div>
            </div>


        </div>


    );
}                   