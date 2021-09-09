
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import {TESTIMONIAL_BANNER_GRADIENT_DIRECTION,
        TESTIMONIAL_BANNER_START_COLOR,
        TESTIMONIAL_BANNER_END_COLOR,
        MAJOR_FONT} from '../../constants';
import WindowDimension from '../../components/WindowDimension';

import Grid from '@material-ui/core/Grid';

import im1 from '../../assets/photo8.jpg';
import './style.scss';

const WelcomeView = ({testimonials}) =>{

  const screen = WindowDimension();

  return (
    <div> 
    <CBanner>
      <div className='welcome-school'>
        <Grid container justify='center' alignItems='center'>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <img src={im1}/>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className='welcome-content'>
              <p className='welcome-title'>Welcome to</p>
              <p className='welcome-school-name'>Dhawalagiri School</p>
              <p className='welcome-details'>
              Dhawalagiri is a multicultural community in the foothills of the Himalayas that inspires in each student a passion for learning, the confidence and competence to pursue their dreams, and the commitment to serve as a compassionate global citizen and leader, who is a steward of the environment.
              </p>
            </div>

          </Grid>
        </Grid>
      </div>
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
  /* background: 'white'; */
  /* background: linear-gradient(to ${TESTIMONIAL_BANNER_GRADIENT_DIRECTION}, ${TESTIMONIAL_BANNER_START_COLOR}, ${TESTIMONIAL_BANNER_END_COLOR}); */
  margin-bottom:50px;
  margin-top:50px;
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