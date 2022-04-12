import * as React from 'react';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import state from "./redux/State";
import {AppBar, createTheme, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import {blue, blueGrey, grey, lightBlue, orange, purple} from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";



const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[700],
            light: blueGrey[600],
            dark: blueGrey[800]
        },
        secondary: {
            main: orange[500],
        },
    },
    typography: {
        fontFamily: "merriweather"
    },
});

const App = () => {
    return (
        // <Provider >
            <ThemeProvider theme={theme}>
                <div className="app-wrapper" >
                    <Header />
                    <Content state={state}/>
                    <Footer />
                </div>
            </ThemeProvider>
        // </Provider>
    );
}

export default App;
