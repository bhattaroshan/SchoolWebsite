import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Faq from '../../components/Faq';
import ScrollTab from '../../components/ScrollTab';
import CoverPhoto from '../../components/CoverPhoto';
import ContactUs from '../../components/ContactUs';
import {MAJOR_FONT} from '../../constants';

import FaqBanner from '../../assets/FaqBanner.jpeg';
import WindowDimension from '../../components/WindowDimension';

const FaqPage = (props) =>{

  const screen = WindowDimension();

  return (
    <div>
      <CoverPhoto 
        image={FaqBanner} 
        height={500*(screen.width/1920)<200?200:500*(screen.width/1920)}/>
          <ScrollTab tabs={props.faqs}>
            {
              props.faqs.map((cont,index)=>{
                return (
                  <span key={index} id={index}>
                    <Faq faqs={cont.content} length={cont.content.length}/>
                  </span>
                );
              })
            }  
          </ScrollTab>
       
          <div style={{display:'flex', justifyContent:'center', marginTop:'100px', marginBottom:'100px'}}>
            <CTypography width={screen.width}>Didn't find answers for your queries?</CTypography>
          </div>

      <ContactUs/>
    </div>
  );
}


export default FaqPage;

const CTypography = styled(Typography)`
  &&&{
    margin-top:40px;
    margin-bottom:40px;
    font-size: ${props=>props.width>1280?60:(props.width>900?45:35)}px;
    color: black;
    font-family: ${MAJOR_FONT};
    font-weight: 900;
    text-align: center;
    /* text-shadow: 3px 3px 3px rgb(100,100,100); */
  }
`;
