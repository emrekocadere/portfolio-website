import React from 'react';
import AboutmeContent from './AboutMeContent';
import CustomHeader from "../..//Header/CustomHeader"
import { Content } from 'antd/es/layout/layout';

export default function AboutmePage() {
    return (
        <div>
            <CustomHeader />
                <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                    <AboutmeContent />
                </div>
           

        </div>


    );
}