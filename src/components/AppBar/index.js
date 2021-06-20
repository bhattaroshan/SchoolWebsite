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

import {withRouter} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import PeopleIcon from '@material-ui/icons/People';

import {APPBAR_BG} from '../../constants';

const MenuItemOptions = [
  {
    title: 'Home',
    icon: <HomeIcon/>,
    path: '/'
  },
  {
    title: 'Communities',
    icon: null,
    submenu: [
      {
        title: 'sports',
        icon: <SportsHandballIcon/>,
        path: '/football'
      },
      {
        title: 'Partners',
        icon: <PeopleIcon/>,
        path: '/about'
      },
      {
        title: 'Parents',
        icon: <HomeIcon/>,
        path: '/about'
      }
    ]
  },
  {
    title: 'Blogs',
    icon: <LibraryBooksIcon/>,
    path: '/blogs',
  },
  {
    title: 'About',
    icon: <InfoIcon/>,
    path: '/about'
  },
  {
    title: null
  },
  {
    title: 'Contact Us',
    icon: <ContactPhoneIcon/>,
    path:'/contactus'
  }

];

const AppBarResponsive = ({logo}) => {
    const history = useHistory();
    
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

    const popDrawerMenu = (isPopType,index) =>{
      if(isPopType){
        const clone = [...subMenuBoolean];
        clone[index] = !clone[index];
        setSubMenuBoolen(clone);
      }else{ //run some function from here
        history.push(MenuItemOptions[index].path);
        setDrawer(false);
      }
    }
    
    const handleDropMenuOpen = (index)=>(e) =>{
      if(MenuItemOptions[index].submenu ===undefined){
        history.push(MenuItemOptions[index].path);
      }
      else{

      }

      setSubMenuIndex(index);
      setAnchorEl(e.currentTarget);
    }

    const handleDropMenuClose = () =>{
      setAnchorEl(null);
    }

    const handleDropMenuItemClose = (index) =>{
      history.push(MenuItemOptions[subMenuIndex].submenu[index].path);
      handleDropMenuClose();
    }

    const handleDrawerMenuClick = (index,subindex) =>{
      history.push(MenuItemOptions[index].submenu[subindex].path);
      setDrawer(false);
    }

    return(
      <div>
        <CAppBar position='fixed'>
          <Toolbar>
              {drawerActivate && <IconButton onClick={()=>setDrawer(true)}><MenuIcon style={{color:'black'}}/></IconButton>}
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
        </CAppBar>
        
        {
          MenuItemOptions[subMenuIndex].submenu && 
          <Menu style={{marginTop:'40px'}} id='menu' onClose={handleDropMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
          {
            MenuItemOptions[subMenuIndex].submenu.map((item,index)=>{
              return (
                <div key={index} id={index}>
                  <MenuItem onClick={()=>handleDropMenuItemClose(index)}>
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
                        <CListItem button onClick={()=>popDrawerMenu(item.submenu,index)}>
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
                                          <CListItem button onClick={()=>handleDrawerMenuClick(index,subindex)}>
                                          <ListItemIcon>{subitem.icon}</ListItemIcon>
                                          <CListItemText primary={
                                            <Typography style={{fontSize:'15px'}}>{subitem.title.toUpperCase()}</Typography>
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

export default withRouter(AppBarResponsive);
// export default AppBarResponsive;

const CAppBar = styled(AppBar)`
  &&&{
    background: ${APPBAR_BG};
  }
`;

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
    margin:20px;
    color:black;
  }
  &:hover{
    color: red;
  }
`;