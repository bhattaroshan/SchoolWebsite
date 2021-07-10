
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import auth from '../../assets/BlogBanner.jpg';
import { MAJOR_FONT, SUBSIDING_FONT } from '../../constants';

const Author = ({title, text, width, image}) =>{
  return (
    <Grid container justify='center'>
      <CGrid container width={width} alignItems='center'>
        <Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
          <Grid container justify='center'>
            <CAvatar src={image}/>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
          <Typography style={{fontSize:'40px', fontFamily:`${MAJOR_FONT}`, textAlign:'center', marginTop:'20px'}}>{title}</Typography>
          <Typography style={{fontSize:'20px', fontFamily:`${SUBSIDING_FONT}`, margin:'40px'}}>{text}</Typography>
        </Grid>
      </CGrid>
    </Grid>
  );
}

export default Author;

const CGrid = styled(Grid)`
  &&&{
    width:${props=>props.width}%;
    min-height: 200px;
    background: rgb(255,255,240);
    margin-top:30px;
    margin-bottom:30px;
    border-radius: 10px;
    overflow:hidden;
    box-shadow: 5px 3px 5px rgba(0,0,0,0.4);
  }
`;

const CAvatar = styled(Avatar)`
  &&&{
    width: 120px;
    height: 120px;
    box-shadow: 5px 3px 5px rgba(0,0,0,0.4);
    /* top:50%; */
    /* transform: translate(0,-50%); */
    /* margin-left: 100px; */
  }
`;