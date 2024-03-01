import React from 'react';
import Link from '@mui/joy/Link';
import emre from "../../../Photos/emre.png"
import SocialLinks from '../../Header/SocialLinks';
import { motion } from "framer-motion"
import { render } from "react-dom";
import "../../.."
export default function HomeContent({ backgroundImage }) {
    return (


        <div className="homepage" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", height: "90vh" }}>
            <div style={{ display: "flex" }}>
                <div >
                    <motion.div
                        animate={{
                            x: 100,
                            y: 2,
                            scale: 1,
                            rotate: 0,
                        }} transition={{ duration: .7 }} >

                        <h1 style={{ color: "#A838D8", fontSize: "55px", fontFamily: " 'Press Start 2P', system-ui; ", fontSize: "35px" }}>Salih Emre Kocadere</h1>
                        <h2 style={{ color: "#A838D8", opacity: ".8", fontSize: "30px", paddingLeft: "250px" }}>Software Engineer</h2>
                    </motion.div>
                </div>
                <div style={{ marginLeft: "20vw" }}>
                    <img src={emre} alt="Avatar" width="300vw" height="300vh" style={{ objectFit: "cover", borderRadius: "100%", borderColor: "#A838D8", borderWidth: "5px", borderStyle: "solid", }} />
                </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", width: "310px", }} className='buttons'>


                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <a href='/aboutme' style={{ color: "#A838D8", paddingLeft: "30px", borderStyle: "solid", borderColor: "#A838D8", borderWidth: "3px", fontFamily: " 'Press Start 2P', system-ui; " }}>
                        About Me </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <a href='/projects' style={{ color: "#A838D8", paddingLeft: "30px", fontSize: "20px", borderStyle: "solid", borderColor: "#A838D8", borderWidth: "3px", fontFamily: " 'Press Start 2P', system-ui; " }}>
                        Projects
                    </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <a href='/skills' style={{ paddingBlock: "10px", color: "#A838D8", fontSize: "20px", borderStyle: "solid", borderColor: "#A838D8", borderWidth: "3px", fontFamily: " 'Press Start 2P', system-ui; " }}>
                        Skills
                    </a>
                </motion.div>




            </div>


        </div>

    );
}


