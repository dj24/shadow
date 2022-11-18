import {Box, Paper, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const StoryPreview = () => (
    <Paper
        sx={{
            width: '33vw',
            aspectRatio: '16/9',
            backgroundColor: 'grey.800', flexShrink: 0}}>
    </Paper>
)

const Heading = ({children}) => (
    <Typography variant={"h2"} sx={{fontWeight: 300, fontSize: 28, color: 'white'}}>
        {children}
    </Typography>
)

export const StoryboardOverview = () => {
    return (
        <Box sx={{display: 'flex', gap: 6, p: 6, height: 'calc(100vh - 60px)', alignItems: 'center', overflow: 'scroll'}}>
            {[1,2,3,4,5].map(i => (
                <Link style={{textDecoration: 'none'}} to={`/edit/${i}`}>
                    <Box key={i} sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                        <Heading>Scene {i}</Heading>
                        <StoryPreview />
                    </Box>
                </Link>
            ))}
        </Box>
    )
}