import { Header } from 'antd/es/layout/layout';
import React from 'react';
import SocialLinks from './SocialLinks';
import CustomNavigation from "./CustomNavigation"
export default function CustomHeader() {
    const [value, setValue] = React.useState('horizontal');
    return (
     
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <SocialLinks />

                <CustomNavigation></CustomNavigation>

            </div>
       



    );
}




{/* <Header style={{ backgroundColor: '#209761', height: "100px" }}>
<div style={{ flexDirection: "row", display: "flex" }}>
    <NavigationLinks></NavigationLinks>
    <div style={{ display: "flex", justifyContent: "right", display: "flex", width: "70%" }}>
        <CustomNavigation></CustomNavigation>
    </div>
</div>
</Header> */}
