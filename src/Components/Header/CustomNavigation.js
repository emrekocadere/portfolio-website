import { Link } from "react-router-dom";

function CustomNavigation() {
    return (
        <div style={{paddingRight:"70px",display:"flex",gap:"35px"}}>
            <Link to="/aboutme" style={{color:"#A838D8"}}>About Me</Link>
            <Link  style={{color:"#A838D8"}}>Skills</Link>
            <Link  style={{color:"#A838D8"}}>Projects</Link>
        </div>
    );
}

export default CustomNavigation;
