import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function CustomNavigation() {
    return (
        <div className="homepage" style={{ display: "flex", gap: "35px", fontSize: "1vw", justifyContent: "center", alignItems: "center", paddingRight: "10vh" }}>
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                <Link to="/" style={{ color: "#A838D8", textDecoration: "none" }}>Home</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                <Link to="/aboutme" style={{ color: "#A838D8", textDecoration: "none" }}>About Me</Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                <Link to="/skills" style={{ color: "#A838D8", textDecoration: "none" }}>Skills</Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
                <Link to="/projects" style={{ color: "#A838D8", textDecoration: "none" }}>Projects</Link>
            </motion.div>
        </div>
    );
}

export default CustomNavigation;
