import Canvas from "../SceneView";
import {
    Box,
    Divider, FormControl,
    InputLabel,
    MenuItem, Paper, Slider, TextField, Tooltip,
    Typography
} from "@mui/material";
import Select  from '@mui/material/Select';
import {Toolbar} from "../components/Toolbar";
import {useContext} from "react";
import {RightPanelContext, SceneContext} from "../App";
import { Box as BoxModel} from '../components/Box';
import Stacy from "../components/Stacy";
import Sofa from "../components/Sofa";
import Table from "../components/Table";
import {Wall} from "../components/Wall";
import { ExtraControls} from "../components/ExtraControls";
import {Inspector} from "../components/Inspector";
import {Comments} from "../components/Coments";
import AddIcon from "@mui/icons-material/Add";


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
                <img onClick={handleThumbClick(Sofa)} style={{objectFit: 'cover', aspectRatio: '1/1', maxHeight: '100%', maxWidth: '100%'}} src={`${process.env.PUBLIC_URL}/images/sofa_thumb.png`}/>
                <img onClick={handleThumbClick(Table)} style={{objectFit: 'cover', aspectRatio: '1/1', maxHeight: '100%', maxWidth: '100%'}} src={`${process.env.PUBLIC_URL}/images/table_thumb.png`}/>
                <img onClick={handleThumbClick(Wall)} style={{objectFit: 'cover', aspectRatio: '1/1', maxHeight: '100%', maxWidth: '100%'}} src={`${process.env.PUBLIC_URL}/images/wall_thumb.png`}/>

                {[0,1,2,3,4,5,6,7,8].map(i => (
                    <Paper key={{i}} sx={{ aspectRatio: '1/1', backgroundColor: 'grey.800'}}/>
                ))}

            </Box>
        </Paper>
    )
}



const References = () => {
    return(
        <Paper sx={{ flex:'1', display: 'flex', gap:2, p: 2}}>
            {[1,2,3].map(i => (
                <img  style={{borderRadius:4, objectFit: 'cover', aspectRatio: '1/1', width: 96}} src={`${process.env.PUBLIC_URL}/images/inspo${i}.jpeg`}/>
            ))}
            <Paper sx={{ backgroundColor: 'grey.800', aspectRatio: '1/1', width: 96, display: 'flex', alignItems:'center', justifyContent: 'center'}}>
                <AddIcon color="grey.900"/>
            </Paper>
        </Paper>
    )
}



export const StoryboardEditPage = () => {
    const {activeObjectIndex} = useContext(SceneContext);
    const { isCommentsVisible } = useContext(RightPanelContext);
    let RightPanel = Assets;

    if(activeObjectIndex !== undefined){
        RightPanel = Inspector;
    }
    if(isCommentsVisible){
        RightPanel = Comments;
    }
    return (
        <Box sx={{display: 'flex'}}>
            <Box sx={{height: 'calc(100vh - 60px)', flex: 1, display: 'flex'}}>
                <Box sx={{flexGrow: 1}}>
                    <Toolbar/>
                    <Divider/>
                    <Paper square elevation={0} sx={{display: 'flex', alignItems: 'center', height: 'calc(100vh - 121px)', flexDirection: 'column', gap: 3, p: 3 }}>
                        <Box sx={{flex:1, display: 'flex', justifyContent: 'space-between', gap: 3, alignSelf: 'stretch', alignItems: 'start'}}>
                            <ExtraControls/>
                            <Paper sx={{aspectRatio: '16/9', flex:1, overflow:'hidden'}}>
                                <Canvas/>
                            </Paper>
                        </Box>

                        <Box sx={{display: 'flex', gap:3, alignSelf: 'stretch', marginLeft: 9}}>
                            <TextField
                                sx={{ flex:'1'}}
                                label="Notes"
                                multiline
                                rows={4}
                                defaultValue="Example Notes"
                                variant="outlined"
                            />
                            <References/>
                        </Box>
                    </Paper>
                </Box>
                <Divider orientation="vertical" flexItem/>
                <RightPanel/>
            </Box>
        </Box>
    )
}