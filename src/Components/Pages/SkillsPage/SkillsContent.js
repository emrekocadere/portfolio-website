import React from "react";
import CustomHeader from "../../Header/CustomHeader"
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
import react from "../../../Photos/react.png"
import dotnet from "../../../Photos/dotnet.png"
import docker from "../../../Photos/docker.png"
import antdesign from "../../../Photos/antdesign.png"


export default function SkillsContent() {
    return (
        <div>
                <div>
                    <img src={react} style={{ width: "7vw" }} />
                    <img src={dotnet} style={{ width: "7vw" }} />
                    <img src={docker} style={{ width: "7vw" }} />
                    <img src={antdesign} style={{ width: "7vw" }} />
                </div>

            
        </div>





    );
}