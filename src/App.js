import {StoryboardEditPage} from "./pages/StoryboardEditPage";
import {Navbar} from "./components/Navbar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Box, Divider, Paper} from "@mui/material";
import {Home} from "./pages/Home";
import {CreateModal} from "./components/CreateModal";
import {StoryboardOverview} from "./pages/StoryboardOverview";


export const App = () => (
    <Box>
        <Paper square sx={{minHeight: '100vh'}}>
            <Router>
                <Navbar/>
                {/*<Divider />*/}
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/create">
                    <Home/>
                    <CreateModal/>
                </Route>
                <Route exact path="/storyboard">
                    <StoryboardOverview />
                </Route>
                <Route exact path="/edit/:id">
                    <StoryboardEditPage />
                </Route>
            </Router>
        </Paper>
    </Box>
)