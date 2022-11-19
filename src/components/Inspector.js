import {useContext} from "react";
import {SceneContext} from "../App";
import * as THREE from "three";
import {Box, Divider, FormControl, Paper, Slider, Tooltip, Typography} from "@mui/material";

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

export const Inspector = () => {
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