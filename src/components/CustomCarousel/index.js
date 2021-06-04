import Carousel from 'react-material-ui-carousel'
import BlogCover from '../BlogCover';

const CustomCarousel = () =>{
  return (
    <Carousel autoPlay={true} navButtonsAlwaysVisible>
      <BlogCover image='https://image.freepik.com/free-photo/school-age-children-medical-masks-portrait-school-children_109285-5762.jpg'/>
      <BlogCover image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.okaloosaschools.com%2Ffiles%2Finline-images%2Fese-banner.750_2.jpg&f=1&nofb=1'/>
      <BlogCover image='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwoodridgebaptist.com%2Fwp-content%2Fuploads%2F2015%2F11%2Fchildren-banner.jpg&f=1&nofb=1'/>
    </Carousel>
  );
}

export default CustomCarousel;