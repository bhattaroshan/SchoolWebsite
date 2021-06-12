
import {useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Testimonial from '../../components/Testimonial';

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
    <div style={{display:'flex', justifyContent:'center',alignItems:'center',
                      height:'300px', background:'linear-gradient(to bottom,rgb(150,180,150),rgb(180,200,200))', 
                      marginTop:'100px'}}>
    <CTypography width={windowWidth}>TESTIMONIALS</CTypography>
    </div>
         
      <Grid container ls={12} style={{justifyContent:'center'}}>
        {
          testimonials.map((testimonial,index)=>{
            return (
              <div key={index} id={index}>
                <Testimonial 
                  width = {windowWidth<650?320:400}
                  name = {testimonial.name}
                  image = {testimonial.image}
                  designation = {testimonial.designation}
                  testimonial = {testimonial.testimonial}/>
              </div>
            );
          })
        }

      </Grid> 
    </div>
  );
}


export default TestimonialPage;

const CTypography = styled(Typography)`
  &&&{
    font-size: ${props=>props.width>1280?100:(props.width>900?80:50)}px;
    color: white;
    font-family: 'Lato';
    font-weight: 900;
    text-shadow: 3px 3px 3px rgb(100,100,100);
  }
`;
