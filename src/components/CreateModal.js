import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextField} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

export const CreateModal = () => (
    <Dialog open>
        <DialogTitle>
            <span>Create</span>
            <Link to={'/'}>
                <IconButton
                aria-label="close"
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                    <CloseIcon />
                </IconButton>
            </Link>


        </DialogTitle>
        <Divider/>
        <DialogContent sx={{display: 'flex', gap: 3, flexDirection: 'column', minWidth: 480, overflow: 'visible'}}>
            <TextField id="outlined-basic" label="Board Name" variant="outlined" />
            {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
        </DialogContent>
        <Divider/>
        <DialogActions>
            <Link  to={'/storyboard'}>
                <Button>
                    Create
                </Button>
            </Link>
        </DialogActions>
    </Dialog>
)