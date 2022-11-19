import {Button, Divider, Paper, ToggleButton, ToggleButtonGroup} from "@mui/material";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import {useContext} from "react";
import {RightPanelContext} from "../App";

export const ExtraControls = () => {
    const { setIsCommentsVisible, isCommentsVisible } = useContext(RightPanelContext);
    return (
        <ToggleButtonGroup
            value={isCommentsVisible ? 'comments' : 'assets'}
            orientation="vertical"
            exclusive
            onChange={(_,name) => setIsCommentsVisible(name === 'comments')}
            aria-label="text alignment"
        >
            <ToggleButton value="comments" aria-label="left aligned">
                <QuestionAnswerIcon />
            </ToggleButton>
            <ToggleButton value="assets" aria-label="centered">
                <ManageSearchIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}