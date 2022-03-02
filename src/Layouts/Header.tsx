import {Box, Button, colors, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import React from "react";


const pages = ['Lab_1', 'Lab_2', 'Lab_3'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="error"
                >
                    <MenuIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton color="error" >
                    <HomeIcon/>
                </IconButton>
                {pages.map((page) => (
                    <Button color="error" >
                        {page}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    )
}