import Link from '@mui/joy/Link';

function CustomNavigation() {
    return (
        <div style={{paddingBottom:"15px",display:"flex",gap:"35px"}}>
            <Link textColor={"white"}>About Me</Link>
            <Link textColor={"white"}>Skills</Link>
            <Link textColor={"white"}>Projects</Link>
        </div>
    );
}

export default CustomNavigation;
