
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

import './style.css';

const BlogCover = ({image}) =>{
  return (
    <Cover>
        <CardImage image={image}/>
        {/* <p style={{position:'absolute', fontSize:'30px', color:'white', top:'40%', left:'40%', fontFamily:'Lato'}}> About Us</p> */}
        {/* <p style={{position:'absolute', fontSize:'100px', color:'blue', top:'65%', left:'45%', fontFamily: 'Lato'}}> About Us</p> */}
      {/* <CoverCard>
        <CardImage image={image}>
        </CardImage>
        <div>
          <CardTitle> Interschool football competition</CardTitle>
          <p style={{marginLeft:'10px', marginTop:'10px', fontFamily:'Lato'}}> 
            Our school  competed with 20 schools nation-wide. They had total of 10 games. Out of all the games..... .......
          </p>
          <CustomButton variant='outlined' color='secondary'>Read More...</CustomButton>
        </div>
      </CoverCard> */}
    </Cover>
  );
}

export default BlogCover;

const CustomButton = styled(Button)`
&&&{
  position: relative;
  top: 47%;
  left: 63%;
  border-radius: 10px;
}
`;

const Cover = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:400px;
  background: #f2edd7;
  box-shadow: 5px 0px 10px #f2edd7;
  color:  white;
  text-align: center;
`;

const CoverCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
  width:70%;
  height:70%;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.8);
  background: white;
  border-radius: 20px;
`;

const CardImage = styled.img`
  display:absolute;
  background-image: url('https://www.wallpaperup.com/uploads/wallpapers/2014/11/12/514442/4070023610e1d8f27d6e0860bf76a5d1.jpg');
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  /* border-top-left-radius: 20px; */
  /* border-bottom-left-radius: 20px; */
`;

const CardTitle = styled.p`
  font-size: 30px;
  font-weight: 900;
  margin-left: 10px;
  font-family: 'Lato', sans-serif;
`;