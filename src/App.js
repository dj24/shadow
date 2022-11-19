import {StoryboardEditPage} from "./pages/StoryboardEditPage";
import {Navbar} from "./components/Navbar";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {Box, Paper} from "@mui/material";
import {Home} from "./pages/Home";
import {CreateModal} from "./components/CreateModal";
import {StoryboardOverview} from "./pages/StoryboardOverview";
import React, {useState} from "react";

export const SceneContext = React.createContext({});

export const App = () => {
    const [sceneObjects, setSceneObjects] = useState([]);
    const [activeObjectIndex, setActiveObjectIndex] = useState();
    return (
        <SceneContext.Provider value={{sceneObjects, setSceneObjects, activeObjectIndex, setActiveObjectIndex}}>
            <Box>
                <Paper square sx={{minHeight: '100vh'}}>
                    <Router basename='/shadow'>
                        <Navbar/>
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
        </SceneContext.Provider>
    )
}