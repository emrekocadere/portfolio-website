import React from 'react';
import AboutmeContent from './AboutMeContent';
import CustomHeader from '../../Header/CustomHeader';
export default function AboutmePage() {
    return (
        
        <div>
            <CustomHeader></CustomHeader>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <AboutmeContent />
            </div>

        </div>


    );
}