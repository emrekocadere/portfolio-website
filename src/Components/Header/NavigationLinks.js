import Typography from '@mui/joy/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@mui/material';


function NavigationLinks() {
    return (
        <div style={{paddingLeft:"70px",paddingTop:"15px"}}>
            <Typography sx={{ color: "white" }} level="h3">
                Salih Emre Kocadere
            </Typography>

                {/* GAP BAK */}{/* GAP BAK */}

                {/* GAP BAK */}{/* GAP BAK */}

            <div style={{display:"flex",gap:"60px"}}>  
                <Link href="https://www.linkedin.com/in/salih-emre-kocadere-7a61b0203/" sx={{color:"white"}}><LinkedInIcon /></Link>
                <Link href="https://github.com/emrekocadere" sx={{color:"white"}}><GitHubIcon /></Link>
                <Link href="http://www.google.com" sx={{color:"white"}}><EmailIcon /></Link>
            </div>

        </div>


    );
}

export default NavigationLinks;
