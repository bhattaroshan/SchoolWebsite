import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import parse, { domToReact } from 'html-react-parser';

import blogPic from '../../assets/photo1.jpg';
import BlogCover from '../BlogCover';

// const options={
//   replace: domNode=>{
//     if(domNode.attribs && domNode.name === 'p'){
//       return <CBody>{domNode.children}</CBody>
//     }
//   }
// };

const options = {
  replace: ({ attribs, children }) => {
    if (!attribs) return;

    if (attribs.id === 'para') {
      return <CBody>{domToReact(children, options)}</CBody>;
    }
    if (attribs.id === 'img') {
      return <div style={{ margin: '20px' }}><CustomCover image={attribs.class} /></div>;
    }
  }
};

const blogPost = `
२७ जेठ, काठमाडौं । गण्डकी प्रदेशको प्रदेशसभा बैठकमा मुख्यमन्त्री पृथ्वी सुब्बा गुरुङले सांसदहरुले उठाएको प्रश्नको जवाफ दिँदैछन् । बिहीबार प्रदेशसभामा उनले आफूलाई विश्वासको मत दिन आग्रह गरेका थिए । त्यसपछि विभिन्न दलका सांसदले मुख्यमन्त्री माथि प्रश्न उठाएका थिए । सांसदहरुले धारणा राखेपछि आधा घण्टा स्थगित भएको बैठक सुरु भएको छ र मुख्यमन्त्री गुरुङले जवाफ दिँदैछन्

`;
const CustomCover = ({ image }) => {
  return <div style={{ position: 'relative', left: '50%', transform: 'translate(-50%,0)', width: '100%' }}>
    <BlogCover image={image} />
  </div>
}

const ContactUs = () => {
  return (
    <Grid item xs={12} sm={11} md={10} xl={10}>
      <CPaper elevation={3}>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CTitle>Students working outside</CTitle>
        </div>

        {parse(blogPost, options)}
      </CPaper>
    </Grid>
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
    font-size:25px;
    font-family: 'Roboto';
    font-weight: 400;
    text-align: justify;
  }
`;
