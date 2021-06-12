
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Avatar1 from '../../assets/avatar1.jpeg';

import './style.css';

const Testimonial = ({width, image, name, designation, testimonial}) =>{
	return (
		<div>
      <CPaper elevation={5} width={width}>
        <CAvatar src={image}/>
        <CName>
          {name}
        </CName>
        <CDesignation>
          {designation}
        </CDesignation>

        <CTestimonial className='testimonial'>{testimonial}</CTestimonial>

      </CPaper>
		</div>
	);
}

export default Testimonial;


const CPaper = styled(Paper)`
  &&&{
    margin:40px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width: ${props=>props.width}px;
    min-height:300px;
    background: linear-gradient(to  bottom right, rgb(200,200,200), rgb(255,255,255));
  }
`;


const CAvatar = styled(Avatar)`
  &&&{
    margin-top: 10%;
    width:120px;
    height:120px;
  }
`;

const CTestimonial = styled(Typography)`
  &&&{
    margin:20px;
    margin-top:20px;
    margin-bottom:40px;
    text-align: justify;
    font-family: 'Lato';
    font-weight: 300;
    text-indent: 50px;
    line-height: 30px;
  }
`;

const CName = styled(Typography)`
  &&&{
    font-family: 'Lato';
    font-weight: 700;
    font-size:25px;
  }
`;

const CDesignation = styled(Typography)`
  &&&{
    color: rgb(0,0,150);
    font-size:14px;
    margin-bottom: 20px;
    margin-top: 5px;
    font-family: 'Lato';
  }
`;

