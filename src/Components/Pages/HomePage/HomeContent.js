import React from 'react';
import BackgroundImage from "../../../Photos/Background.jpg"
import Link from '@mui/joy/Link';
import emre from "../../../Photos/emre.png"
import { Button, Flex } from 'antd';
import { Radio, Typography } from 'antd';
import { motion } from "framer-motion"
export default function HomeContent() {
    return (


        <div style={{ paddingTop: "35px", backgroundImage: `url(${BackgroundImage})`, backgroundSize: "cover" }}>
            <div style={{ display: "flex" }}>
                <div >
                    <motion.div
                        animate={{
                            x: 100,
                            y: 2,
                            scale: 1,
                            rotate: 0,
                        }} transition={{ duration: .7 }} >

                        <h1 style={{ color: "#209761", fontSize: "55px" }}>Salih Emre Kocadere</h1>
                        <h2 style={{ color: "#209761", opacity: ".5", fontSize: "45px", paddingLeft: "280px" }}>Software Engineer</h2>
                    </motion.div>
                </div>
                <div style={{ display: "flex", justifyContent: "right", paddingLeft: "400px" }}>
                    <img src={emre} alt="Avatar" width="300" height="300" style={{ objectFit: "cover", borderRadius: "25%", borderColor: "#209761", borderWidth: "5px", borderStyle: "solid", }} />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "250px" }}>
                <Button type="link" block="true" href='/aboutme' style={{ color: "white", backgroundColor: "#209761", paddingLeft: "100px", marginBottom: "30px", fontSize: "20px",height:"40px"}}>
                    About Me
                </Button>
                <Button type="link"  block="true" href='/projects' style={{ color: "white", backgroundColor: "#209761", paddingLeft: "100px", marginBottom: "30px", fontSize: "20px", height: "40px" }}>
                    Projects
                </Button>
                <Button type="link" block="true" href='/skills' style={{ color: "white", backgroundColor: "#209761", paddingLeft: "100px", marginBottom: "30px", fontSize: "20px", height: "40px" }}>
                    Skills
                </Button>

            </div>





        </div>

    );
}


