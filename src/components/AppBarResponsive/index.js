
import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <MenuIcon
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const CustomLogo = styled.img`
  height: ${props => props.height}px;
  display: "flex",
  justifyContent: "space-between"
  
`;
const styleSheet = {
    list: {
        width: 200,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "black",
        cursor: "pointer",
    }
}


function AppBarResponsive() {
    const [drawerActivate, setDrawerActivate] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        if (window.innerWidth <= 600) {
            setDrawerActivate(true);
        }
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                setDrawerActivate(true);
            }
            else {
                setDrawerActivate(false);
            }
        });

        // returned function will be called on component unmount 
        // return () => {
        //     window.removeEventListener('mousemove', () => { })
        // }
    }, []);

    //Small Screens
    const createDrawer = () => {
        return (
            <div>
                <AppBar color="#c2c2c2" >
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <MenuIcon
                                // className={ }
                                onClick={() => { setDrawer(true) }} />
                            <CustomLogo src='https://www.nu.edu/wp-content/uploads/2018/12/national-univeristy-full-logo1.jpg?fit=1200%2C630' height={100} />
                            <Typography color="inherit" variant="headline"></Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={drawer}
                    onClose={() => { setDrawer(false) }}
                    onOpen={() => { setDrawer(true) }}>

                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => { setDrawer(false) }}
                        onKeyDown={() => { setDrawer(false) }}>

                        <List style={{ width: 200 }}>
                            <ListItem key={1} button divider> Option 1 </ListItem>
                            <ListItem key={2} button divider> Option 2 </ListItem>
                            <ListItem key={3} button divider> Option 3 </ListItem>
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    const destroyDrawer = () => {
        const handleClick = (event) => {
            console.log("Clicked")
            console.log(anchorEl)
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            console.log("Closed")
            console.log(anchorEl)
            setAnchorEl(null);
        };

        // const { classes } = this.props
        return (
            <AppBar color="#c2c2c2">
                <Toolbar>
                    <CustomLogo variant="headline" src='https://www.nu.edu/wp-content/uploads/2018/12/national-univeristy-full-logo1.jpg?fit=1200%2C630' height={100} />
                    <div style={{ flexGrow: 1 }} ></div>
                    {/* <Typography variant="headline" style={{ flexGrow: 1 }} color="inherit" >Title</Typography> */}
                    <Button
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="inherit"
                        onClick={handleClick}
                    >
                        Open Menu
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem>
                            <ListItemIcon>
                                <SendIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <DraftsIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <InboxIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </StyledMenuItem>
                    </StyledMenu>
                    {/* <Typography variant="subheading" className={classes.padding} color="inherit" onClick={handleClick} onClose={handleClose}>OPTION 1</Typography> */}
                    <Typography variant="subheading" color="inherit" >OPTION 2</Typography>
                    <Typography variant="subheading" color="inherit" >OPTION 3</Typography>
                </Toolbar>
            </AppBar>
        )
    }


    return (
        <div>
            {drawerActivate ? createDrawer() : destroyDrawer()}
        </div>
    );


}

export default AppBarResponsive;