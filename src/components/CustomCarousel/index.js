import {useEffect,useState} from 'react';
import Carousel from 'react-material-ui-carousel'
import BlogCover from '../BlogCover';

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo8 from '../../assets/photo8.jpg';

import Home from '@material-ui/icons/Home';

const CustomCarousel = () =>{
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

  const maxHeight = 600;
  const minHeight = 400;

  return (
    <Carousel autoPlay={true} 
              indicatorIconButtonProps={{
                style:{
                  position:'relative',
                  padding: '5px',
                  bottom:'70px'
                }
              }}
              >
      <BlogCover image={photo1} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
      <BlogCover image={photo2} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
      <BlogCover image={photo3} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
      <BlogCover image={photo5} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
      <BlogCover image={photo6} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
      <BlogCover image={photo7} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
      <BlogCover image={photo8} height={maxHeight*(windowWidth/1920)<minHeight?minHeight:maxHeight*(windowWidth/1920)}/>
    </Carousel>
  );
}

export default CustomCarousel;