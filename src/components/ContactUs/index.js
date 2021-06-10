import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const blogPost = `
<span id='para'>२७ जेठ, काठमाडौं । गण्डकी प्रदेशको प्रदेशसभा बैठकमा मुख्यमन्त्री पृथ्वी सुब्बा गुरुङले सांसदहरुले उठाएको प्रश्नको जवाफ दिँदैछन् । बिहीबार प्रदेशसभामा उनले आफूलाई विश्वासको मत दिन आग्रह गरेका थिए । त्यसपछि विभिन्न दलका सांसदले मुख्यमन्त्री माथि प्रश्न उठाएका थिए । सांसदहरुले धारणा राखेपछि आधा घण्टा स्थगित भएको बैठक सुरु भएको छ र मुख्यमन्त्री गुरुङले जवाफ दिँदैछन्</span>

`;

const ContactUs = () => {
  return (
    <p>Contact us</p>
  );
}

export default ContactUs;

const CPaper = styled(Paper)`
  &&&{
    min-height: 400px;
  }
`;

const CTitle = styled(Typography)`
  &&&{
    font-size:50px;
  }
`;

const CBody = styled(Typography)` 
  &&&{
    margin:100px;
    font-size:50px;
    font-family: 'Roboto';
    font-weight: 400;
    text-align: justify;
  }
`;
