import {Box, Paper, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";

const StoryPreview = ({i}) => (
    <Paper
        sx={{
        width: '33%',
        aspectRatio: '16/9',
        backgroundColor: 'grey.800', flexShrink: 0, display: 'flex', overflow: 'hidden'}}>
        <img style={{width: '100%', objectFit: 'cover'}} src={`${process.env.PUBLIC_URL}/images/project${i}.png`}/>
    </Paper>
)

const TutorialPreview = ({i}) => (
    <Paper
        sx={{
            width: '33%',
            aspectRatio: '16/9',
            backgroundColor: 'grey.800', flexShrink: 0,
            overflow: 'hidden',
            display: 'flex',
    }}
    >
        <img src={`${process.env.PUBLIC_URL}/images/tutorial${i}.jpg`}/>
    </Paper>
)

const CreateNewStory = () => (
    <Link to={'/create'}>
        <Paper
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '33%',
                aspectRatio: '16/9',
                backgroundColor: 'grey.800', flexShrink: 0
            }}
        >
            <AddIcon color="grey.900"/>
        </Paper>
    </Link>
)

const Heading = ({children}) => (
    <Typography variant={"h2"} sx={{fontWeight: 300, fontSize: 28}}>
        {children}
    </Typography>
)

export const Home = () => (
    <Box sx={{maxWidth: 960, mx:'auto', display: 'flex', flexDirection: 'column', gap: 6, p: 6}}>
        <Box sx={{display: 'flex', gap: 3, flexDirection: 'column'}}>
            <Heading>Create New Story</Heading>
            <CreateNewStory/>
        </Box>
        <Box sx={{display: 'flex', gap: 3, flexDirection: 'column'}}>
            <Heading>Recent Projects</Heading>
            <Box sx={{display: 'flex', gap: 8}}>
                {[1,2,3].map(i => <StoryPreview i={i} key={i}/>)}
            </Box>
        </Box>
        <Box sx={{display: 'flex', gap: 3, flexDirection: 'column'}}>
            <Heading>Tutorials</Heading>
            <Box sx={{display: 'flex', gap: 8}}>
                {[1,2,3].map(i => <TutorialPreview i={i} key={i}/>)}
            </Box>
        </Box>
    </Box>
)