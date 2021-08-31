
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import {TESTIMONIAL_BANNER_GRADIENT_DIRECTION,
        TESTIMONIAL_BANNER_START_COLOR,
        TESTIMONIAL_BANNER_END_COLOR,
        MAJOR_FONT} from '../../constants';
import WindowDimension from '../../components/WindowDimension';

import im1 from '../../assets/photo8.jpg';
import './style.scss';

const WelcomeView = ({testimonials}) =>{

  const screen = WindowDimension();

  return (
    <div> 
    <CBanner>
      <div className='welcome-school'>
        <img src={im1}/>
        <div className='welcome-content'>
          <p className='welcome-title'>Welcome to</p>
          <p className='welcome-school-name'>Dhawalagiri School</p>
          <p className='welcome-details'>
          Dhawalagiri is a multicultural community in the foothills of the Himalayas that inspires in each student a passion for learning, the confidence and competence to pursue their dreams, and the commitment to serve as a compassionate global citizen and leader, who is a steward of the environment.
          </p>
        </div>
        {/* <img src={im1}/>
        <div className='welcome-content'>
          <p className='welcome-title'>Welcome to </p>
          <p className='welcome-school-name'>Dhawalagiri</p>
          <p className='welcome-detail'>We welcome you with full heart at Dhawalagiri. This is again another test writing. Let me see what happens when I write a way long message here</p>
        </div> */}
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