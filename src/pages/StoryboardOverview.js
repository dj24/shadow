import {Box, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const StoryPreview = ({i}) => (
    <Paper
        sx={{
            overflow:'hidden',
            width: '33vw',
            aspectRatio: '16/9',
            backgroundColor: 'grey.800', flexShrink: 0,
        }}>
        <img style={{objectFit: 'cover', height: '100%', aspectRatio: '16/9', objectPosition:'top'}} src={`${process.env.PUBLIC_URL}/scene${i}.png`}/>
    </Paper>
)
const CreateNewStory = () => (
    <Paper
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '33vw',
            aspectRatio: '16/9',
            backgroundColor: 'grey.800', flexShrink: 0
        }}
    >
        <AddIcon color="grey.900"/>
    </Paper>
)

const Heading = ({children}) => (
    <Typography variant={"h2"} sx={{fontWeight: 300, fontSize: 28, color: 'white'}}>
        {children}
    </Typography>
)

const items = [1,2,3];

export const StoryboardOverview = () => {
    return (
        <Box sx={{display: 'flex', gap: 6, p: 6, height: 'calc(100vh - 60px)', alignItems: 'center', overflow: 'scroll'}}>
            {items.map(i => (
                <Link style={{textDecoration: 'none'}} to={`/edit/${i}`}>
                    <Box key={i} sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                        <Heading>Shot {i}</Heading>
                        <StoryPreview i={i}/>
                    </Box>
                </Link>
            ))}
            <Link style={{textDecoration: 'none'}} to={`/edit/${items.length + 1}`}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                    <Heading>New Shot</Heading>
                    <CreateNewStory />
                </Box>
            </Link>
        </Box>
    )
}