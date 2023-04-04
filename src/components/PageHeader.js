import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid2 from '@mui/material/Unstable_Grid2';
import Select from '@mui/material/Select';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import '../stylesheets/PageHeader.css';
  
const PageHeader = (props) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (path) => {
        navigate(path);
    };


    return (
        <Grid2 className="Header">
            <header>
                <p>
                    Ryley's Portfolio
                </p>
            </header>
            <AppBar position="static">
            <Toolbar sx={{ 
                backgroundColor: '#fffcfa',
                color: '#000000',
                justifyContent: 'center',
                alignItems: 'center' }}>
                <Button
                    color="inherit"
                    onClick={() => handleClick('/')}
                >
                    Home
                </Button>
                <Button
                    color="inherit"
                    onClick={() => handleClick('/about')}
                >
                    About
                </Button>
                <Button
                    onMouseOver={(event) => setAnchorEl(event.currentTarget)}
                    color="inherit"
                >
                    Experience
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{ onMouseLeave: () => setAnchorEl(null) }}
                >
                    <MenuItem onClick={() => handleClick('/professional')}>Professional Breakdown</MenuItem>
                    <MenuItem onClick={() => handleClick('/projects')}>Side Projects</MenuItem>
                    <MenuItem onClick={() => handleClick('/astrophotography')}>Astrophotography</MenuItem>
                </Menu>
            </Toolbar>
            </AppBar>
            <p className='SubHeader'>
                {props.subHeader}
            </p>
        </Grid2>
    );
}
export default PageHeader;