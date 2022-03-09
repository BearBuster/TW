import {Box, Button, colors, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import React from "react";
import {cards} from "../Variables/Cards";


const pages = ['Lab_1', 'Lab_2', 'Lab_3'];

export const Header = () => {

    return (
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={()=> {return true}}
                    color="error"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton color="error" size={"large"}>
                    <HomeIcon/>
                </IconButton>
                {pages.map((page) => (
                    <Button color="error" size={"large"} >
                        {page}
                    </Button>
                ))}

            </Box>
        </Toolbar>
    )
}