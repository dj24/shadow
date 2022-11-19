import {Paper} from "@mui/material";
import {Link} from "react-router-dom";

export const Navbar = () => (
    <Paper square sx={{bgcolor: 'grey.900', height: 60, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'uppercase'}}>
        <Link style={{height: '100%', display: 'flex'}} to={'/'}>
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
        </Link>
        <img style={{borderRadius: '9999px', height: 40, aspectRatio: '1/1'}} src={`${process.env.PUBLIC_URL}/images/profile.jpeg`} />
    </Paper>
)