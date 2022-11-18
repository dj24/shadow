import Canvas from "../SceneView";
import {
    Box,
    Divider, FormControl,
    InputLabel,
     MenuItem, Paper, TextField,
    Typography
} from "@mui/material";
import Select  from '@mui/material/Select';
import {Toolbar} from "../components/Toolbar";


// Doorframes, Windows, Walls,

const Assets = () => (
    <Paper elevation={1} sx={{ width: '100%', maxWidth: 360, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
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
        <Box sx={{display: 'grid', gridTemplateColumns: 'auto auto', gap: 3, p:3, overflowY: 'auto'}}>
            {[0,1,2,3,4,5,6,7,8].map(_ => (
                <Paper sx={{ aspectRatio: '1/1', backgroundColor: 'grey.800',}}/>
            ))}
        </Box>
    </Paper>
)

export const StoryboardEditPage = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{height: 'calc(100vh - 60px)', flex: 1, display: 'flex'}}>
                <Box sx={{flexGrow: 1}}>
                    <Toolbar/>
                    <Divider/>
                    <Paper square elevation={0} sx={{display: 'flex', alignItems: 'center', height: 'calc(100vh - 121px)', flexDirection: 'column', gap: 6, p: 6 }}>
                        <Paper sx={{aspectRatio: '16/9', flex:1}}>
                            <Canvas/>
                        </Paper>

                        <TextField
                            sx={{alignSelf: 'stretch'}}
                            label="Notes"
                            multiline
                            rows={4}
                            defaultValue="Example Notes"
                            variant="outlined"
                        />
                    </Paper>
                </Box>
                <Divider orientation="vertical" flexItem/>
                <Assets />
            </Box>
        </Box>
    )
}