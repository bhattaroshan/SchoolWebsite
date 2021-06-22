
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const Faq = () =>{
  const [clicked,setClicked] = useState(false);
  const handleClick = () =>{
    setClicked((prevclicked)=>!prevclicked);
  }

  const handleClick2 = () =>{
    if(clicked === false)
      setClicked((prevclicked)=>!prevclicked);
  }
  return (
    <div>
      <CTypography onClick={()=>handleClick()}>What is this?</CTypography>
      <CATypography show={clicked} onClick={()=>handleClick2()}>This is going to be my answer</CATypography>
    </div>
  );
}

export default Faq;


const CTypography = styled(Typography)`
  &&&{
    -webkit-touch-callout: none; /* iOS Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    cursor: pointer;
    font-size: 20px;
    color: rgb(0,0,200);
  }
`;


const CATypography = styled(Typography)`
  &&&{
    position:relative;
    -webkit-touch-callout: none; /* iOS Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    transition: all 0.2s ease;
    top:${props=>props.show?0:-30}px;
    opacity: ${props=>props.show?1:0};
    cursor:${props=>props.show?'arrow':'pointer'};
  }
`;