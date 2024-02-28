import { Button, Flex } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons"



function SocialLinks() {
    return ( 
        <div style={{  display: "flex" ,paddingLeft:"8vh", justifyContent: "center", alignItems: "center" }}>

                <div style={{  display: "flex"}}>
                <Button type="text" block style={{ color: "#A838D8",fontSize:"1.9vw" }}><GithubOutlined /></Button>
                <Button type="text" block style={{ color: "#A838D8",fontSize:"1.9vw" }}><MailOutlined /></Button>
                <Button type="text" block style={{ color: "#A838D8",fontSize:"1.9vw" }}><LinkedinOutlined /></Button>
                </div >

        </div>
    

    );
}

export default SocialLinks;
