import {Box, Paper, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";

export const Navbar = () => (
    <Paper square sx={{bgcolor: 'grey.900', height: 60, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'uppercase'}}>
        <Link style={{height: '100%', display: 'flex'}} to={'/'}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} />
        </Link>
        <AccountCircleIcon/>
    </Paper>
)