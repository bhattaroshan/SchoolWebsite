
import {useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';

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
        // icon: <HomeIcon/>,
        path: '#'
      },
      {
        title: 'Wrestling',
        // icon: <HomeIcon/>,
        path: '#'
      }
    ]
  },
  {
    title: 'Blogs',
    icon: <HomeIcon/>,
    path: '#'
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

    const popSubMenu = (isPopType,index) =>{
      if(isPopType){
        const clone = [...subMenuBoolean];
        clone[index] = !clone[index];
        setSubMenuBoolen(clone);
        // setSubMenuBoolen(...subMenuBoolean[index],!subMenuBoolean[index]);
      }
    }

    return(
      <div>
        <AppBar position='fixed' color='inherit'>
          <Toolbar>
              {drawerActivate && <IconButton onClick={()=>setDrawer(true)}><MenuIcon/></IconButton>}
                <CustomLogo variant="headline" src={logo} height={100} />

                <div style={{flex:1}}/>
                {drawerActivate===false && <div>
                      {
                        MenuItemOptions.map((item,index)=>{
                          return(
                            <>
                              {
                                item.title && 
                                <CustomMenuButton key={index} id={index}>{item.title.toUpperCase()}</CustomMenuButton>
                              }
                            </>
                          );
                        })
                      }
                </div>}
          </Toolbar>
        </AppBar>

        <Drawer open={drawer} onClose={() => {setDrawer(false)}}>
          <List style={{ width: 250}}>
            {
              MenuItemOptions.map((item,index)=>{
                return (
                  <>
                  {
                  item.title ?
                    <>
                        <CListItem button key={index} id={index} onClick={()=>popSubMenu(item.submenu,index)}>
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
                                        <>
                                          <CListItem button>
                                          <ListItemIcon>{subitem.icon}</ListItemIcon>
                                          <CListItemText primary={
                                            <Typography>{subitem.title.toUpperCase()}</Typography>
                                          }/>
                                          </CListItem>
                                        </>
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
                  </>
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