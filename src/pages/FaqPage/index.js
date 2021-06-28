import {useEffect,useState} from 'react';

import Faq from '../../components/Faq';
import ScrollTab from '../../components/ScrollTab';
import BlogCover from '../../components/BlogCover';

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
              <Faq key={index} id={index} faqs={cont.content}/>
            );
          })
        }  
      </ScrollTab>
    </div>
  );
}


export default FaqPage;