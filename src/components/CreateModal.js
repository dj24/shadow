import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, TextField} from "@mui/material";
import {Link} from "react-router-dom";

export const CreateModal = () => (
    <Dialog open>
        <DialogTitle>Create</DialogTitle>
        <Divider/>
        <DialogContent sx={{display: 'flex', gap: 3, flexDirection: 'column', minWidth: 480, overflow: 'visible'}}>
            <TextField id="outlined-basic" label="Board Name" variant="outlined" />
            {/*<TextField id="outlined-basic" label="Outlined" variant="outlined" />*/}
        </DialogContent>
        <Divider/>
        <DialogActions>
            <Link  to={'/edit'}>
                <Button>
                    Create
                </Button>
            </Link>
        </DialogActions>
    </Dialog>
)