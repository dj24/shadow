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
import {useContext} from "react";
import {SceneContext} from "../App";
import { Box as BoxModel} from '../components/Box';
import Stacy from "../components/Stacy";


const Assets = () => {
    const {setSceneObjects} = useContext(SceneContext);

    const handleThumbClick =(Model) => () => {
        setSceneObjects(current => ([...current, Model]))
    }
    return (
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
            <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, p:3, overflowY: 'auto'}}>
                <img onClick={handleThumbClick(Stacy)} style={{objectFit: 'cover', aspectRatio: '1/1', maxHeight: '100%', maxWidth: '100%'}} src={`${process.env.PUBLIC_URL}/images/stacy_thumb.png`}/>
                <img onClick={handleThumbClick(BoxModel)} style={{objectFit: 'cover', aspectRatio: '1/1', maxHeight: '100%', maxWidth: '100%'}} src={`${process.env.PUBLIC_URL}/images/cube_thumb.png`}/>
                {[0,1,2,3,4,5,6,7,8].map(i => (
                    <Paper key={{i}} sx={{ aspectRatio: '1/1', backgroundColor: 'grey.800'}}/>
                ))}

            </Box>
        </Paper>
    )
}

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