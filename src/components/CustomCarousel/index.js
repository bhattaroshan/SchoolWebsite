import Carousel from 'react-material-ui-carousel'
import BlogCover from '../BlogCover';

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo4 from '../../assets/photo4.jpg';

const CustomCarousel = () =>{
  return (
    <Carousel autoPlay={true} navButtonsAlwaysVisible>
      <BlogCover image={photo1}/>
      <BlogCover image={photo2}/>
      <BlogCover image={photo3}/>
      <BlogCover image={photo4}/>
    </Carousel>
  );
}

export default CustomCarousel;