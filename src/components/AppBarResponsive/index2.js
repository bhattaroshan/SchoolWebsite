
import {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import SwipeableDrawer  from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';

const AppBarResponsive = ({logo}) => {

    const MenuItemOptions = ['Home','Activities','Blogs','About'];

    const [drawerActivate, setDrawerActivate] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=>{
      if(window.innerWidth<=600)
        setDrawerActivate(true);
      else
        setDrawerActivate(false);
    },[])

    useEffect(()=>{
      const handleResize = () =>{
        if(window.innerWidth <=600){
          setDrawerActivate(true);
        }
        else{
          setDrawerActivate(false);
          setDrawer(false);
        }
      }
      window.addEventListener('resize',handleResize);

      return ()=>window.removeEventListener('resize',handleResize);
    })

    return(
      <div>
        <AppBar position='fixed' color='inherit'>
          <Toolbar>
              {drawerActivate && <IconButton onClick={()=>setDrawer(true)}><MenuIcon/></IconButton>}
                <CustomLogo variant="headline" src={logo} height={100} />

                <div style={{flex:1}}/>
                {drawerActivate===false && <div>
                      {/* Menu Options for Larger Displays*/}
                      {MenuItemOptions.map((item,index)=><CustomMenuButton key={index} id={index}>{item.toUpperCase()}</CustomMenuButton>)}
                </div>}
          </Toolbar>
        </AppBar>

        <Drawer open={drawer} onClose={() => {setDrawer(false)}}>
          <List style={{ width: 200}} >
            {
              MenuItemOptions.map((item,index)=>{
                return <>
                      <CListItem key={index} id={index}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <CListItemText primary={
                          <CMenuTypography>{item.toUpperCase()}</CMenuTypography>
                        }/>
                      </CListItem>
                      </>
              })
            }
              <Divider/>
          </List>
      </Drawer>

      </div>
    );
}

export default AppBarResponsive;

const CMenuTypography = styled(Typography)`
  &&&{
    font-weight:bold;
  }
`;

const CListItemText =styled(ListItemText)`
  &&&{
  }
`;

const CListItem = styled(ListItem)`
  &&&{
    cursor: pointer;
  }
  &:hover{
    background: rgba(128,128,128,0.5);
  }
`;

const CustomLogo = styled.img`
  height: ${props => props.height}px;
  display: flex;
  justify-content: "space-between";
`;

const CustomMenuButton = styled(Button)`
  &&&{
    font-size: 18px;
    font-weight:bold;
  }
  &:hover{
    color: red;
  }
`;