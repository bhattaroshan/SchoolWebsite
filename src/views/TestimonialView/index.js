
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import FlipCard from "../../components/FlipCard";

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
      <CTypography width={screen.width}>Testimonials</CTypography>
      <C2Typography width={screen.width}>Here are a few things that our students, teachers and parents say about our school</C2Typography>


      <Grid container justify='center'>
        <Grid item md={12} sm={10} lg={10} xs={11}>
            <Grid container justify='space-around'>
              {
                  testimonials.map((testimonial,index)=>{
                      return (
                          <FlipCard key={index} id={index} 
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                    image={testimonial.image}
                                    description={testimonial.content}
                                    background={testimonial.background}
                                    />
                      );
                  })
              }
              </Grid>
            </Grid>
          </Grid>

      {/* <Grid container>
        <Grid item ls={8} style={{justifyContent:'center'}}>
        {
          testimonials.map((testimonial,index)=>{
            return (
                <Testimonial key={index} id={index} style={{position:'absolute'}}
                  width = {screen.width<650?250:300}
                  name = {testimonial.name}
                  image = {testimonial.image}
                  designation = {testimonial.designation}
                  content = {testimonial.content}/>
            );
          })
        }

      </Grid> 
      </Grid> */}
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
  /* background: linear-gradient(to ${TESTIMONIAL_BANNER_GRADIENT_DIRECTION}, ${TESTIMONIAL_BANNER_START_COLOR}, ${TESTIMONIAL_BANNER_END_COLOR}); */
  background:rgb(240,240,240);
`;

const CTypography = styled(Typography)`
  &&&{
    margin-top:40px;
    margin-bottom:10px;
    font-size: ${props=>props.width>1280?50:(props.width>900?80:20)}px;
    font-family: 'Open Sans';
    font-weight: 700;
  }
`;

const C2Typography = styled(Typography)`
  &&&{
    font-size: ${props=>props.width>1280?20:(props.width>900?18:16)}px;
    font-weight:100;
    margin-bottom:40px;
    margin-left:20px;
    margin-right:20px;
  }
`;