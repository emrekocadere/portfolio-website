import React from 'react';
import BackgroundImage from "../../../Photos/CodeWallpaper.avif"
import Link from '@mui/joy/Link';
import emre from "../../../Photos/emre.png"
import { Button, Flex } from 'antd';
import { Radio, Typography } from 'antd';
import { motion } from "framer-motion"
import "../../.."
export default function HomeContent({ backgroundImage }) {
    return (


        <div className="homepage" style={{ paddingTop: "35px", backgroundImage: `url(${BackgroundImage})`, backgroundSize:"cover",height:"85vh"}}>
            <div style={{ display: "flex" }}>
                <div >
                    <motion.div
                        animate={{
                            x: 100,
                            y: 2,
                            scale: 1,
                            rotate: 0,
                        }} transition={{ duration: .7 }} >

                        <h1 style={{ color: "#A838D8", fontSize: "55px",fontFamily:" 'Press Start 2P', system-ui; ",fontSize:"35px" }}>Salih Emre Kocadere</h1>
                        <h2 style={{ color:  "#A838D8", opacity: ".8", fontSize: "30px", paddingLeft: "250px" }}>Software Engineer</h2>
                    </motion.div>
                </div>
                <div style={{ display: "flex", justifyContent: "right", paddingLeft: "400px" }}>    
                    <img src={emre} alt="Avatar" width="300" height="300" style={{ objectFit: "cover", borderRadius: "100%", borderColor: "#A838D8", borderWidth: "5px", borderStyle: "solid", }} />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "310px", }} className='buttons'>
                <a  href='/aboutme' style={{ paddingBlock:"10px",color: "#A838D8", marginLeft: "100px",marginBottom: "30px",paddingLeft:"30px", fontSize: "20px",borderStyle:"solid",borderColor:"#A838D8",borderWidth:"3px",fontFamily:" 'Press Start 2P', system-ui; "}}>
                    About Me
                </a>
                <a  href='/projects' style={{ paddingBlock:"10px",color: "#A838D8", marginLeft: "100px",marginBottom: "30px",paddingLeft:"30px", fontSize: "20px",borderStyle:"solid",borderColor:"#A838D8",borderWidth:"3px",fontFamily:" 'Press Start 2P', system-ui; "}}>
                    Projects
                </a>
                <a  href='/skills' style={{ paddingBlock:"10px",color: "#A838D8", marginLeft: "100px",paddingLeft:"30px", fontSize: "20px",borderStyle:"solid",borderColor:"#A838D8",borderWidth:"3px",fontFamily:" 'Press Start 2P', system-ui; "}}>
                    Skills
                </a>

            </div>
        </div>

    );
}


