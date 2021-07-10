
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Testimonial from '../../components/Testimonial';
import {TESTIMONIAL_BANNER_GRADIENT_DIRECTION,
        TESTIMONIAL_BANNER_START_COLOR,
        TESTIMONIAL_BANNER_END_COLOR,
        MAJOR_FONT} from '../../constants';
import WindowDimension from '../../components/WindowDimension';

const TestimonialPage = ({testimonials}) =>{

  const screen = WindowDimension();

  return (
    <div> 
    <CBanner>
      <CTypography width={screen.width}>TESTIMONIALS</CTypography>

      <Grid container ls={12} style={{justifyContent:'center', overflow:'hidden'}}>
        {
          testimonials.map((testimonial,index)=>{
            return (
                <Testimonial key={index} id={index} style={{position:'absolute'}}
                  width = {screen.width<650?350:400}
                  name = {testimonial.name}
                  image = {testimonial.image}
                  designation = {testimonial.designation}
                  content = {testimonial.content}/>
            );
          })
        }

      </Grid> 
    </CBanner>
      </div>
  );
}


export default TestimonialPage;


const CBanner = styled.div`
  display:flex;
  flex-direction: column;
  /* margin-top:-58px; */
  justify-content: center;
  text-align: center;
  background: linear-gradient(to ${TESTIMONIAL_BANNER_GRADIENT_DIRECTION}, ${TESTIMONIAL_BANNER_START_COLOR}, ${TESTIMONIAL_BANNER_END_COLOR});
`;

const CTypography = styled(Typography)`
  &&&{
    margin-top:40px;
    margin-bottom:40px;
    font-size: ${props=>props.width>1280?100:(props.width>900?80:40)}px;
    color: white;
    font-family: ${MAJOR_FONT};
    font-weight: 900;
    text-shadow: 3px 3px 3px rgb(100,100,100);
  }
`;
