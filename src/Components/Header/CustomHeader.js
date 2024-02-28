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

