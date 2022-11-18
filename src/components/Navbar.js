import {Box, Paper, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";

export const Navbar = () => (
    <Paper square sx={{bgcolor: 'grey.900', height: 60, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', textTransform: 'uppercase'}}>
        <Link to={'/'}>
            <Typography sx={{ fontSize: 24, fontWeight: 800, textDecoration: 'none', color: 'white' }} variant="h2">Shadow</Typography>
        </Link>
        <AccountCircleIcon/>
    </Paper>
)