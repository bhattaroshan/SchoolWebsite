import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import logo from '../../assets/coffee.png';

const NavBar = ({height}) =>{


  return (
    <CustomAppBar height={height}>
      <CustomToolbar height={height}>
          <CustomLogo src='https://www.nu.edu/wp-content/uploads/2018/12/national-univeristy-full-logo1.jpg?fit=1200%2C630' height={height}/>
          <div style={{flexGrow:1}}/>
          <Button variant='outlined' color='secondary' style={{marginRight:'100px'}}> About Us </Button>
      </CustomToolbar>
    </CustomAppBar>
  );
}

export default NavBar;

const CustomAppBar = styled(AppBar)`
&&&{
  height: ${props=>props.height}px;
  overflow: hidden;
  background: white;
  box-shadow: 5px 0px 15px rgba(0,0,0,0.1);
  /* border-bottom-left-radius: 10px; */
  /* border-bottom-right-radius:10px; */
}
`;

const CustomIconButton = styled(IconButton)`
&&&{
  display:flex;
  flex-direction: column;
  justify-content: center;

}
`;

const CustomToolbar = styled(Toolbar)`
  &&&{
    display:flex;
    margin-left:270px;
    margin-top:${props=>props.height/4}px;
  }
`;

const CustomLogo = styled.img`
  height: ${props=>props.height}px;
`;