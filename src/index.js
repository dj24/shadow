import { createRoot } from "react-dom/client"
import "./styles.css"
import { StoryboardEditPage } from './pages/StoryboardEditPage';

import * as React from 'react';
import { red} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {App} from "./App";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        // divider: 'rgba(255,255,255,0.25)',
        text: {
            primary: 'rgba(255,255,255,1)',
            secondary: 'rgba(255,255,255,0.75)',
        }
    },
});

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={darkTheme}>
        <App/>
    </ThemeProvider>
)
