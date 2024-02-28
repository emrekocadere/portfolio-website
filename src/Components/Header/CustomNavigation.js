import { Link } from "react-router-dom";

function CustomNavigation() {
    return (
        <div className="homepage" style={{display:"flex",gap:"35px", fontSize:"1vw", justifyContent: "center", alignItems: "center",paddingRight:"10vh"}}>
            <Link to="/aboutme" style={{color:"#A838D8"}}>About Me</Link>
            <Link  style={{color:"#A838D8"}}>Skills</Link>
            <Link  style={{color:"#A838D8"}}>Projects</Link>
        </div>
    );
}

export default CustomNavigation;
