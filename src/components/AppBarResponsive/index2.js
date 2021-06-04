
import {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import SwipeableDrawer  from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const AppBarResponsive = () => {

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
        if(window.innerWidth <=600)
          setDrawerActivate(true);
        else
          setDrawerActivate(false);
      }
      window.addEventListener('resize',handleResize);

      return ()=>window.removeEventListener('resize',handleResize);
    })

    return(
      <div>
        <AppBar position='fixed' color='inherit'>
          <Toolbar>
              {drawerActivate && <IconButton onClick={()=>setDrawer(true)}><MenuIcon/></IconButton>}
                <CustomLogo variant="headline" src='https://www.nu.edu/wp-content/uploads/2018/12/national-univeristy-full-logo1.jpg?fit=1200%2C630' height={100} />

                <div style={{flex:1}}/>
                {drawerActivate===false && <div>
                      {/* Menu Options for Larger Displays*/}
                      {MenuItemOptions.map((item,index)=><Button key={index} id={index}>{item.toLowerCase()}</Button>)}
                </div>}
          </Toolbar>
        </AppBar>

        <SwipeableDrawer open={drawer} onClose={() => {setDrawer(false)}} onOpen={()=>{setDrawer(true)}} >
          <List style={{ width: 200 }}>
            {MenuItemOptions.map((item,index)=><ListItem key={index} id={index}>{item}</ListItem>)}
          </List>
      </SwipeableDrawer>

      </div>
    );
}

export default AppBarResponsive;

const CustomLogo = styled.img`
  height: ${props => props.height}px;
  display: flex;
  justify-content: "space-between";
`;
