import { Button, Flex } from 'antd';
import { GithubOutlined, MailOutlined, LinkedinOutlined } from "@ant-design/icons"
import { motion } from "framer-motion"


function SocialLinks() {
    return (
        <div style={{ display: "flex", paddingLeft: "8vh", justifyContent: "center", alignItems: "center" }}>

            <div style={{ display: "flex" }}>

                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                    <Button type="text" block style={{ color: "#A838D8", fontSize: "1.9vw" }}><GithubOutlined /></Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                    <Button type="text" block style={{ color: "#A838D8", fontSize: "1.9vw" }}><MailOutlined /></Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                    <Button type="text" block style={{ color: "#A838D8", fontSize: "1.9vw" }}><LinkedinOutlined /></Button>
                </motion.div>

            </div >

        </div>


    );
}

export default SocialLinks;
