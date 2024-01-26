import React from "react";
import CustomHeader from "../../../Components/Header/CustomHeader"
import HomeContent from "./HomeContent";

export default function HomePage() {
    return (

        <div > 
            <CustomHeader></CustomHeader>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <HomeContent />
            </div>

        </div>


    );
}