import { createRoot } from "react-dom/client"
import "./styles.css"
import { App } from './App';

import * as React from 'react';
import { red} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        dark: '000',
        primary: {
            main: red[500],
        },
    },
});

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
)
