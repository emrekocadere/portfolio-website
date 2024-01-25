import React from 'react';
import AboutmeContent from './AboutMeContent';
import CustomHeader from '../../Header/CustomHeader';
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
export default function AboutmePage() {
    return (
        
        <div  style={{ backgroundImage: `url(${BackgroundImage})`,backgroundSize:"cover"}}>
            <CustomHeader></CustomHeader>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <AboutmeContent />
            </div>

        </div>


    );
}                   