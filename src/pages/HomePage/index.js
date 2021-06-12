

import TestimonialView from '../../views/TestimonialView';

const HomePage = (props) =>{
  return (
    <div>
      <TestimonialView testimonials = {props.testimonials} />
    </div>
  );
}

export default HomePage;