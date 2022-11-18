import Canvas from "../SceneView";
import {
    Box,
    Divider, FormControl,
    Grid, InputLabel,
    List,
    ListItem,
    ListItemButton,
    ListItemText, MenuItem, Paper, TextField,
    Typography
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Select  from '@mui/material/Select';
import {Toolbar} from "../components/Toolbar";

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
    <Paper sx={{ width: '100%', maxWidth: 360, flexShrink: 0 }}>
        <Box sx={{display: 'flex', gap: 3, flexDirection: 'column', p: 3}}>
            <Typography sx={{fontWeight: 500,fontSize: 20}}>
                Assets
            </Typography>
            <FormControl>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select label="Category">
                <MenuItem value={0}>Actors</MenuItem>
                <MenuItem value={1}>Furniture</MenuItem>
                <MenuItem value={2}>Lighting</MenuItem>
            </Select>
            </FormControl>
            <TextField label="Search"/>
        </Box>

        <Divider/>
        <Box sx={{display: 'grid', gridTemplateColumns: 'auto auto', gap: 3, p:3}}>
            {[0,1,2,3,4,5].map(_ => (
                <Paper sx={{ aspectRatio: '1/1', backgroundColor: 'grey.800',}}/>
            ))}
        </Box>
    </Paper>
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

            <Box sx={{height: 'calc(100vh - 120px)', flex: 1, display: 'flex'}}>
                <Box sx={{flexGrow: 1}}>
                    <Toolbar/>
                    <Canvas/>
                </Box>
                <Divider orientation="vertical" flexItem/>
                <Assets />
            </Box>
        </Box>
    )
}