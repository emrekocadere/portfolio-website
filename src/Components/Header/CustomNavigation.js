import { Link } from "react-router-dom";

function CustomNavigation() {
    return (
        <div style={{paddingBottom:"15px",display:"flex",gap:"35px"}}>
            <Link to="aboutme" style={{color:"white"}}>About Me</Link>
            <Link  style={{color:"white"}}>Skills</Link>
            <Link  style={{color:"white"}}>Projects</Link>
        </div>
    );
}

export default CustomNavigation;
