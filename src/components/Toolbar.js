import {Box, Button, Divider, IconButton, Paper, Typography} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {Link, useLocation, useParams} from "react-router-dom";
import {useState} from "react";

export const Toolbar = () => {
    let { id } = useParams();
    const [dataUri, setDataUri] = useState('');
    const handleDownload = () => {
        setDataUri(document.querySelector('canvas').toDataURL('png'));
    }
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
            <Box sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center'}}>
                <Typography sx={{fontWeight: 500, fontSize: 20, alignSelf:'center'}}>
                    Shot {id}
                </Typography>
                <Typography sx={{fontWeight: 500, fontSize: 12, alignSelf:'center', opacity: 0.5}}>
                    Last edited by Dan at 11:53
                </Typography>
            </Box>
            <Box sx={{display: 'flex',gap: 3, alignItems: 'center'}}>
                <Divider orientation="vertical" flexItem />
                <a style={{textDecoration: 'none'}} href={dataUri} download>
                    <Button onClick={handleDownload} sx={{display: 'flex', gap: 1}}>
                        <FileDownloadIcon/>
                        <span>Export</span>
                    </Button>
                </a>
            </Box>
        </Paper>
    )
}