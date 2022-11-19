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
import {SceneContext} from "../App";
import { Box as BoxModel} from '../components/Box';
import Stacy from "../components/Stacy";
import Sofa from "../components/Sofa";
import Table from "../components/Table";
import {Wall} from "../components/Wall";
import * as THREE from "three";

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

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

const Inspector = () => {
    const {activeObjectMatrix, setActiveObjectMatrix, setActiveObjectPosition, activeObjectPosition} = useContext(SceneContext);
    const vec = new THREE.Vector3();
    // const currentPosition = vec.setFromMatrixPosition(activeObjectMatrix);
    console.log(activeObjectPosition.x);
    const handleSlide = (axis) => ({target}) => {
        const { value } = target;
        if(axis === 'x'){
            setActiveObjectPosition(current => (new THREE.Vector3(value, current.y, current.z)));
        }
        if(axis === 'y'){
            setActiveObjectPosition(current => (new THREE.Vector3(current.x, value, current.z)));
        }
        if(axis === 'z'){
            setActiveObjectPosition(current => (new THREE.Vector3(current.x, current.y, value)));
        }
    }
    return (
        <Paper elevation={1} sx={{ width: '100%', maxWidth: 360, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{fontWeight: 500,fontSize: 20, px: 3, py: 2}}>
                    Inspector
                </Typography>
                <Divider/>
                <Box sx={{px: 3, py: 2, display: 'flex', flexDirection: 'column', gap: 3}}>
                    <Typography sx={{fontWeight: 500,fontSize: 18}}>
                        Position
                    </Typography>
                    {['x', 'y', 'z'].map(axis => {
                        return(
                            <FormControl>
                                <Typography gutterBottom>
                                    {axis} Position
                                </Typography>
                                <Slider
                                    step={0.1}
                                    onChange={handleSlide(axis)}
                                    min={-5}
                                    max={5} value={activeObjectPosition[axis]} valueLabelDisplay="auto" slots={{
                                    valueLabel: ValueLabelComponent,
                                }}  />
                            </FormControl>
                        )
                    })}
                </Box>
                <Divider/>
                <Box sx={{px: 3, py: 2, display: 'flex', flexDirection: 'column', gap: 3}}>
                <Typography sx={{fontWeight: 500,fontSize: 18}}>
                    Rotation
                </Typography>
                {['X', 'Y', 'Z'].map(axis => (
                    <FormControl>
                        <Typography gutterBottom>
                            {axis} Rotation
                        </Typography>
                        <Slider valueLabelDisplay="auto" slots={{
                            valueLabel: ValueLabelComponent,
                        }}  />
                    </FormControl>
                ))}
                </Box>
            </Box>
        </Paper>
    )
}

export const StoryboardEditPage = () => {
    const {activeObjectIndex} = useContext(SceneContext);
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
                {activeObjectIndex === undefined ?  <Assets /> : <Inspector/>}
            </Box>
        </Box>
    )
}