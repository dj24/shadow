import {Box, Button, Divider, IconButton, Paper, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Link, useLocation, useParams} from "react-router-dom";

export const Toolbar = () => {
    let { id } = useParams();
    const location = useLocation();
    console.log({location})
    return(
        <Paper sx={{px: 3, gap: 3, height: 60, display: 'flex', justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex',gap: 3, alignItems: 'center'}}>
                <Link to={'/storyboard'}>
                    <IconButton>
                        <ArrowBack/>
                    </IconButton>
                </Link>
                <Divider orientation="vertical" flexItem />
            </Box>
            <Typography sx={{fontWeight: 500, fontSize: 20, alignSelf:'center'}}>
                Scene {id}
            </Typography>
            <Box sx={{display: 'flex',gap: 3, alignItems: 'center'}}>
                <Divider orientation="vertical" flexItem />
                <Button sx={{display: 'flex', gap: 1}}>
                    <FileDownloadIcon/>
                    <span>Export</span>
                </Button>
            </Box>
        </Paper>
    )
}