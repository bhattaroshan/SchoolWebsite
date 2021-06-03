
import React, {useState} from 'react'
import styled from 'styled-components';

function BlogThumbnail({title, image}) {
  const [scaleImage,setScaleImage] = useState(1);

  const handleMouseEnter = () =>{
    setScaleImage(1.01);
  }

  const handleMouseLeave = () =>{
    setScaleImage(1);
  }

  return (
    <div>
      <Container scale={scaleImage} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ImageMask>
          <ImageContainer src={image}/>
        </ImageMask>
        <Name>{title}</Name>
      </Container> 
    </div>
  )
}

export default BlogThumbnail;


const Container = styled.div`
  position:relative;
  margin-top: 100px;
  /* margin: 10px; */
  width:300px;
  height: 350px;
  border-radius: 5px;
  /* border: 1px solid grey; */
  box-shadow:1px 0px 10px 2px rgba(128,128,128,0.4);
  background: white;
  overflow:hidden;
  transform: scale(${props => props.scale});
  transition: transform 0.2s;
  cursor: pointer;
`;

const ImageMask = styled.div`
  display:flex;
  justify-content: center;
  width:100%;
  height:250px;
  background: black;
  overflow:hidden;
`;

const ImageContainer = styled.img`
  max-height:400px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Name = styled.p`
  position:relative;
  width: 90%;
  font-family: 'Lato', sans-serif;
  font-size:20px;
  font-weight: 700;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
  color: brown;
`;
