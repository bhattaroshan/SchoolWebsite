
import {useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Testimonial from '../../components/Testimonial';
import {TESTIMONIAL_BANNER_GRADIENT_DIRECTION,
        TESTIMONIAL_BANNER_START_COLOR,
        TESTIMONIAL_BANNER_END_COLOR} from '../../constants';

const TestimonialPage = ({testimonials}) =>{

   const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('load',handleResize);
    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('load',handleResize);
      window.removeEventListener('resize',handleResize);
    }
  })

  return (
    <div> 
    <CBanner>
      <CTypography width={windowWidth}>TESTIMONIALS</CTypography>

       

      <Grid container ls={12} style={{justifyContent:'center'}}>
        {
          testimonials.map((testimonial,index)=>{
            return (
                <Testimonial key={index} id={index} style={{position:'absolute'}}
                  width = {windowWidth<650?350:400}
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
  margin-top:100px;
  padding-top:20px;
  text-align: center;
  background: linear-gradient(to ${TESTIMONIAL_BANNER_GRADIENT_DIRECTION}, ${TESTIMONIAL_BANNER_START_COLOR}, ${TESTIMONIAL_BANNER_END_COLOR});

`;

const CTypography = styled(Typography)`
  &&&{
    margin:40px;
    font-size: ${props=>props.width>1280?100:(props.width>900?80:50)}px;
    color: white;
    font-family: 'Lato';
    font-weight: 900;
    text-shadow: 3px 3px 3px rgb(100,100,100);
  }
`;
