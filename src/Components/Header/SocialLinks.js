import { Button, Flex } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons"



function SocialLinks() {
    return ( 
        <div style={{ paddingLeft: "70px", display: "flex" }}>

            <div>
                {/* <Button type="text" href='/' block style={{ color: "white",fontSize:"23px",paddingBottom:"40px" }} >
                    salih emre kocadere
                </Button> */}

                <div style={{  display: "flex" }}>
                <Button type="text" block style={{ color: "#A838D8",fontSize:"23px",paddingBottom:"35px" }}><GithubOutlined /></Button>
                <Button type="text" block style={{ color: "#A838D8", fontSize:"23px",paddingBottom:"35px"}}><MailOutlined /></Button>
                <Button type="text" block style={{ color: "#A838D8",fontSize:"23px",paddingBottom:"35px" }}><LinkedinOutlined /></Button>
                </div >

            </div>


        </div>
    

    );
}

export default SocialLinks;
