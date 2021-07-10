
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import {TESTIMONIAL_BANNER_GRADIENT_DIRECTION,
        TESTIMONIAL_BANNER_START_COLOR,
        TESTIMONIAL_BANNER_END_COLOR,
        MAJOR_FONT} from '../../constants';
import WindowDimension from '../../components/WindowDimension';

const WelcomeView = ({testimonials}) =>{

  const screen = WindowDimension();

  return (
    <div> 
    <CBanner>
      <CTypography width={screen.width}>WELCOME</CTypography>
      <C2Typography width={screen.width}>TO</C2Typography>
      <C3Typography width={screen.width}>DHAWALAGIRI</C3Typography>
      {/* <Grid container ls={12} style={{justifyContent:'center', overflow:'hidden'}}>
      </Grid>  */}
    </CBanner>
      </div>
  );
}


export default WelcomeView;


const CBanner = styled.div`
  display:flex;
  flex-direction: column;
  margin-top:-58px;
  justify-content: center;
  text-align: center;
  /* background: linear-gradient(to ${TESTIMONIAL_BANNER_GRADIENT_DIRECTION}, ${TESTIMONIAL_BANNER_START_COLOR}, ${TESTIMONIAL_BANNER_END_COLOR}); */
  background: 'white';
  margin-bottom:50px;
`;

const CTypography = styled(Typography)`
  &&&{
    margin-top:40px;
    margin-bottom:40px;
    font-size: ${props=>props.width>1280?100:(props.width>900?80:40)}px;
    color: red;
    font-family: ${MAJOR_FONT};
    font-weight: 900;
    /* text-shadow: 3px 3px 3px rgb(100,100,100); */
  }
`;

const C2Typography = styled(Typography)`
  &&&{
    /* margin-top:40px; */
    /* margin-bottom:40px; */
    font-size: ${props=>props.width>1280?60:(props.width>900?50:40)}px;
    color: black;
    font-family: ${MAJOR_FONT};
    font-weight: 500;
    /* text-shadow: 3px 3px 3px rgb(100,100,100); */
  }
`;

const C3Typography = styled(Typography)`
  &&&{
    /* margin-top:40px; */
    /* margin-bottom:40px; */
    font-size: ${props=>props.width>1280?100:(props.width>900?80:40)}px;
    color: black;
    font-family: ${MAJOR_FONT};
    font-weight: 900;
    /* text-shadow: 3px 3px 3px rgb(100,100,100); */
  }
`;