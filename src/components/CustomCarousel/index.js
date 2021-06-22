import Carousel from 'react-material-ui-carousel'
import BlogCover from '../BlogCover';

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo8 from '../../assets/photo8.jpg';

const CustomCarousel = () =>{
  return (
    <Carousel autoPlay={true} navButtonsAlwaysVisible>
      <BlogCover image={photo1} height={600}/>
      <BlogCover image={photo2} height={600}/>
      <BlogCover image={photo3} height={600}/>
      <BlogCover image={photo5} height={600}/>
      <BlogCover image={photo6} height={600}/>
      <BlogCover image={photo7} height={600}/>
      <BlogCover image={photo8} height={600}/>
    </Carousel>
  );
}

export default CustomCarousel;