import React from "react";
import CustomHeader from "../../Header/CustomHeader"
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
import react from "../../../Photos/react.png"
import dotnet from "../../../Photos/dotnet.png"
import docker from "../../../Photos/docker.png"
import antdesign from "../../../Photos/antdesign.png"


export default function SkillsContent() {
    return (
        <div >
            <div style={{display:"flex",justifyContent:"space-around"}}>
                <div className='aboutme' style={{
                    justifyContent: "center", display: "flex",
                    borderStyle: "solid", borderWidth: ".2vw", borderColor: "#A838D8",
                    borderRadius: "2.5vw", width: "50vw",
                    backgroundSize: "cover", backgroundColor: "rgba(67, 22, 86, 0.4)"
                }}>

                    <a
                        style={{ color: "white", margin: "30px", fontFamily: "Source Code Pro', monospace" }}>
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipfsdf
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                        ve ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                        ben emre kocadere. awfaofşkwjnqeşfkjwqeişofıjweqoişıfjwpieıofjw eiopfjwe    ipf
                    </a>

                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                    <img src={react} style={{ width: "5.5vw" }} />
                    <img src={dotnet} style={{ width: "5.5vw" }} />
                    <img src={docker} style={{ width: "5.5vw" }} />
                    <img src={antdesign} style={{ width: "5.5vw" }} />
                </div>
            </div>


        </div>

    );
}