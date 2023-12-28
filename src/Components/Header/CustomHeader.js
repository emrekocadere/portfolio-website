import { Header } from 'antd/es/layout/layout';
import React from 'react';

export default function CustomHeader() {
    const [value, setValue] = React.useState('horizontal');
    return (

        <Header style={{ backgroundColor: '#209761', height: "100px" }}>

        </Header>
    );
}