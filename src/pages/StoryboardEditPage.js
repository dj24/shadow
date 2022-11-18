import Canvas from "../SceneView";
import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Sidebar = () => (
    <Box sx={{ width: '100%', maxWidth: 320, bgcolor: 'background.paper' }}>
        <List disablePadding>
            <ListItem disablePadding>
                <ListItemButton sx={{py: 1.75}}>
                    <ArrowBackIcon/>
                    <ListItemText primary="Storyboard View" />
                </ListItemButton>
            </ListItem>
            <Divider/>
            {['Object1','Object2'].map(item => (
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
)

const Assets = () => (
    <Box sx={{ width: '100%', maxWidth: 360, flexShrink: 0, bgcolor: 'background.paper' }}>
        <ListItem disablePadding>
            <Typography sx={{py: 1.75, px: 2}}>
                <ListItemText primary="Assets" />
            </Typography>
        </ListItem>
        <Divider/>
        <Grid container rowSpacing={2} columnSpacing={2}>
        {[0,1,2,3,4,5].map(_ => (
            <Grid item sx={{background: 'grey', width: '100%', height: '100%', aspectRatio: 1}}/>
        ))}
        </Grid>
    </Box>
)
const Frame = () => (
    <Box sx={{top: 0, pointerEvents: 'none', position: 'absolute', width: '100%', height: '100%', zIndex: 10, display: 'flex', alignItems: 'center'}}>
        <Box sx={{ m: 8, flex: 1, border: '5px solid red', aspectRatio: '16/9' }}>

        </Box>
    </Box>
)

export const StoryboardEditPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            {/*<Sidebar/>*/}
            <Divider orientation="vertical" flexItem/>
            <Box sx={{height: 'calc(100vh - 60.8px)', flex: 1, display: 'flex'}}>
                <Box sx={{flexGrow: 1}}>
                    <Box sx={{position: 'relative', height: '100%'}}>
                        <Canvas/>
                        {/*<Frame/>*/}
                    </Box>
                </Box>
                <Divider orientation="vertical" flexItem/>
                <Assets />
            </Box>
        </Box>
    )
}