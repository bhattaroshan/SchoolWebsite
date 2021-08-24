import Carousel from 'react-material-ui-carousel'
import CoverPhoto from '../CoverPhoto';

import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpg';
import photo5 from '../../assets/photo5.jpg';
import photo6 from '../../assets/photo6.jpg';
import photo7 from '../../assets/photo7.jpg';
import photo8 from '../../assets/photo8.jpg';

import WindowDimension from '../WindowDimension';

const CustomCarousel = () =>{
  const screen = WindowDimension();

  const maxHeight = 600;
  const minHeight = 400;

  return (
    <Carousel autoPlay={true} animation={'fade'} interval={1000}
              indicatorIconButtonProps={{
                style:{
                  position:'relative',
                  padding: '5px',
                  bottom:'70px'
                }
              }}
              >
      <CoverPhoto image={photo1} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
      <CoverPhoto image={photo2} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
      <CoverPhoto image={photo3} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
      <CoverPhoto image={photo5} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
      <CoverPhoto image={photo6} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
      <CoverPhoto image={photo7} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
      <CoverPhoto image={photo8} height={maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920)}/>
    </Carousel>
  );
}

export default CustomCarousel;