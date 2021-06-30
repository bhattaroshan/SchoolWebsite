

import TestimonialView from '../../views/TestimonialView';
import WelcomeView from '../../views/WelcomeView';
import ContactUs from '../../components/ContactUs';

const HomePage = (props) =>{
  return (
    <div>
      <WelcomeView/>
      <TestimonialView testimonials = {props.testimonials} />
      <ContactUs/>
    </div>
  );
}

export default HomePage;