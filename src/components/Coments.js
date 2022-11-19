import {useContext} from "react";
import {SceneContext} from "../App";
import * as THREE from "three";
import {Box, Button, Divider, FormControl, Paper, Slider, TextField, Tooltip, Typography} from "@mui/material";
import {faker} from "@faker-js/faker";

const UserImage = ({user = 'profile'}) => (
    <img style={{borderRadius: '9999px', height: 40, aspectRatio: '1/1'}} src={`${process.env.PUBLIC_URL}/images/${user}.jpeg`} />
)


export const Comments = () => {
    return (
        <Paper elevation={1} sx={{ width: '100%', maxWidth: 360, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{fontWeight: 500,fontSize: 20, px: 3, py: 2}}>
                    Comments
                </Typography>
                <Divider/>
                <Box sx={{px: 3, py: 2, display: 'flex', gap: 2, flexDirection: 'column'}}>
                    <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                        <UserImage/>
                        <Typography sx={{fontWeight: 500}}>
                            Dan Jackson
                        </Typography>
                    </Box>
                    <TextField/>
                    <Button sx={{alignSelf: 'end'}}>Send</Button>
                </Box>
                    <Divider/>
                    <Box sx={{px: 3, py: 2, display: 'flex', gap: 2, flexDirection: 'column'}}>
                        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                            <UserImage/>
                            <Box>
                                <Typography sx={{fontWeight: 500}}>
                                    Dan Jackson
                                </Typography>
                                <Typography sx={{opacity: 0.5, fontSize: 14}}>
                                    9:32
                                </Typography>
                            </Box>

                        </Box>
                        <Typography>
                            Just added a few 👌
                        </Typography>
                    </Box>
                    <Divider/>
                    <Box sx={{px: 3, py: 2, display: 'flex', gap: 2, flexDirection: 'column'}}>
                        <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
                            <UserImage user="holly"/>
                            <Box>
                                <Typography sx={{fontWeight: 500}}>
                                    Holly Allen
                                </Typography>
                                <Typography sx={{opacity: 0.5, fontSize: 14}}>
                                    8:53
                                </Typography>
                            </Box>

                        </Box>
                        <Typography>
                            Hey - could you add some references? 😊
                        </Typography>
                    </Box>
                    <Divider/>
            </Box>
        </Paper>
    )
}