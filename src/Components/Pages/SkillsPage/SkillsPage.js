import React from "react";
import CustomHeader from "../../Header/CustomHeader"
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
import react from "../../../Photos/react.png"
import SkillsContent from "./SkillsContent";



export default function SkillsPage() {
    return (
        <div style={{  backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", height: "100vh" }}>
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.4)", height: "100vh"}}>
            <div style={{ paddingBlock: "5vh" }}>
                <CustomHeader />
            </div>
            <SkillsContent/>
            </div>

        </div>
    );
}