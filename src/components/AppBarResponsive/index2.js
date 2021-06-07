
import {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import HomeIcon from '@material-ui/icons/Home';


const MenuItemOptions = [
  {
    title: 'Home',
    icon: <HomeIcon/>,
    path: '#'
  },
  {
    title: 'Activities',
    icon: null,
    path: '#',
    submenu: [
      {
        title: 'Football',
        icon: <HomeIcon/>,
        path: '#'
      },
      {
        title: 'Wrestling',
        icon: <HomeIcon/>,
        path: '#'
      }
    ]
  },
  {
    title: 'Blogs',
    icon: <HomeIcon/>,
    path: '#',
    submenu:[
      {
        title: 'Amazing Blog',
        icon: <ExpandLess/>,
        path: '#'
      },
      {
        title: 'This is so amazing',
        icon: <ExpandMore/>,
        path: '#'
      }
    ]
  },
  {
    title: 'About',
    icon: <HomeIcon/>,
    path: '#'
  },
  {
    title: null
  },
  {
    title: 'Contact Us',
    icon: <HomeIcon/>,
    path:'#'
  }

];

const AppBarResponsive = ({logo}) => {

    const [subMenuBoolean,setSubMenuBoolen] = useState(Array(MenuItemOptions.length).fill(false));

    const [drawerActivate, setDrawerActivate] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [subMenuIndex, setSubMenuIndex] = useState(0);

    useEffect(()=>{
      if(window.innerWidth<=780)
        setDrawerActivate(true);
      else
        setDrawerActivate(false);
    },[])

    useEffect(()=>{
      const handleResize = () =>{
        if(window.innerWidth <=780){
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

    const popSubMenu = (isPopType,index) =>{
      if(isPopType){
        const clone = [...subMenuBoolean];
        clone[index] = !clone[index];
        setSubMenuBoolen(clone);
        // setSubMenuBoolen(...subMenuBoolean[index],!subMenuBoolean[index]);
      }
    }
    
    const handleDropMenuOpen = (index)=>(e) =>{
      setSubMenuIndex(index);
      setAnchorEl(e.currentTarget);
    }

    const handleDropMenuClose = () =>{
      setAnchorEl(null);
    }

    return(
      <div>
        <AppBar position='fixed' color='inherit'>
          <Toolbar>
              {drawerActivate && <IconButton onClick={()=>setDrawer(true)}><MenuIcon/></IconButton>}
                <CustomLogo variant="headline" src={logo} height={100} centerLogo={drawerActivate}/>

                <div style={{flex:1}}/>
                    {drawerActivate===false && <div style={{display:'flex'}}>
                        {
                          MenuItemOptions.map((item,index)=>{
                            return(
                              <div key={index} id={index}>
                                {
                                  item.title && 
                                  <CustomMenuButton aria-controls='menu' onClick={handleDropMenuOpen(index)}>{item.title.toUpperCase()}</CustomMenuButton>
                                }
                              </div>
                            );
                          })
                        }
                  </div>}
                
          </Toolbar>
        </AppBar>
        
        {
          MenuItemOptions[subMenuIndex].submenu && 
          <Menu style={{marginTop:'40px'}} id='menu' onClose={handleDropMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
          {
            MenuItemOptions[subMenuIndex].submenu.map((item,index)=>{
              return (
                <div key={index} id={index}>
                  <MenuItem onClick={handleDropMenuClose}>
                    {item.icon} 
                    <Typography style={{marginLeft:'30px'}}>{item.title.toUpperCase()}</Typography>
                  </MenuItem>
                </div>
              );
            })
          }
          </Menu>
        }

        <Drawer open={drawer} onClose={() => {setDrawer(false)}}>
          <List style={{ width: 250}}>
            {
              MenuItemOptions.map((item,index)=>{
                return (
                  <div key={index} id={index}>
                  {
                  item.title ?
                    <>
                        <CListItem button onClick={()=>popSubMenu(item.submenu,index)}>
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <CListItemText primary={
                            <CMenuTypography>{item.title.toUpperCase()}</CMenuTypography>
                          }/>
                          {item.submenu && (subMenuBoolean[index] ? <ExpandLess/> : <ExpandMore/>)}
                        </CListItem>
                        {
                          item.submenu &&
                          <>
                            <Collapse in={subMenuBoolean[index]} timeout='auto' unmountOnExit>
                              <Divider/>
                              <List>
                                  {
                                    item.submenu.map((subitem,subindex)=>{
                                      return (
                                        <div key={index+subindex} id={index+subindex} >
                                          <CListItem button>
                                          <ListItemIcon>{subitem.icon}</ListItemIcon>
                                          <CListItemText primary={
                                            <Typography>{subitem.title.toUpperCase()}</Typography>
                                          }/>
                                          </CListItem>
                                        </div>
                                      );
                                    })
                                  }
                              </List>
                              <Divider/>
                            </Collapse>
                          </>
                        }
                    </> :
                    <>
                       <Divider/>
                    </>
                  }
                  </div>
                );
              })
            }
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
  justify-content: "space-between";
  position: relative;
  ${props=>props.centerLogo && "left:50%;transform:translate(-50%,0);"};
  /* left: 50%; */
`;

const CustomMenuButton = styled(Typography)`
  &&&{
    font-size: 18px;
    font-weight:bold;
    cursor: pointer;
    margin:10px;
  }
  &:hover{
    color: red;
  }
`;