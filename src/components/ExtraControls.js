import {Button, Divider, Paper} from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export const ExtraControls = () => {
    return (
        <Paper sx={{border: 1, borderColor: 'divider'}}>
            <Button sx={{py: 2}} square>
                <QuestionAnswerIcon />
            </Button>

            <Divider/>
            <Button sx={{py: 2}} square>
                <ManageSearchIcon />
            </Button>
        </Paper>
    )
}