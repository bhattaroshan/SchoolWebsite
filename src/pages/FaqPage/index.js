import {useEffect,useState} from 'react';

import Typography from '@material-ui/core/Typography';

import Faq from '../../components/Faq';
import ScrollTab from '../../components/ScrollTab';
import BlogCover from '../../components/BlogCover';
import ContactUs from '../../components/ContactUs';
import {MAJOR_FONT} from '../../constants';

import FaqBanner from '../../assets/FaqBanner.jpeg';

const FaqPage = (props) =>{
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
      <BlogCover 
        image={FaqBanner} 
        height={500*(windowWidth/1920)<200?200:500*(windowWidth/1920)}/>

      <ScrollTab tabs={props.faqs}>
        {
          props.faqs.map((cont,index)=>{
            return (
              <Faq key={index} id={index} faqs={cont.content} length={cont.content.length}/>
            );
          })
        }  
      </ScrollTab>
      <div style={{display:'flex', justifyContent:'center', marginTop:'100px', marginBottom:'100px'}}>
        <Typography style={{fontFamily:`${MAJOR_FONT}`,fontSize:'50px'}}>Didn't find answers for your queries?</Typography>
      </div>
      <ContactUs/>
    </div>
  );
}


export default FaqPage;