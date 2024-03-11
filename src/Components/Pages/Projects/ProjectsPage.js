import React from "react";
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
import ProjectsContent from "./ProjectsContent";
import CustomHeader from "../../Header/CustomHeader";

export default function ProjectsPage() {
    return (

        <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover", height: "100vh" }}>
            <div style={{backgroundColor:"rgba(0, 0, 0, 0.4)",height:"100vh"}}>
                <div style={{ paddingBlock: "5vh" }}>
                    <CustomHeader />
                </div>

                <div style={{display: "flex", justifyContent: "center" }}>
                    < ProjectsContent/>
                </div>
            </div>

        </div>

    );
}