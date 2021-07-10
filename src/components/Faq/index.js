import {useState} from 'react';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import styled, {css, keyframes} from 'styled-components';
import parse from 'html-react-parser';
import {SUBSIDING_FONT } from '../../constants';

const Faq = (props)=>{
  const [checked,setChecked] = useState(Array(props.length).fill(false));

  const handleClick = (index) =>{
    var tc = Array(props.length).fill(false);
    tc[index] = !checked[index];
    setChecked(tc);
  }

  return (
    <div>
      {
        props.faqs.map((elem,index)=>{
          return <FaqTemp key={index} id={index} 
                          question={elem.question} 
                          answer={elem.answer} 
                          func={handleClick} 
                          index={index} 
                          expand={checked}
                          />
        })
      }
    </div>
  );
}

const FaqTemp = ({question,answer,func,index,expand}) =>{
  const [hover,setHover] = useState(false);
  const [startAnimation,setStartAnimation] = useState(0);

  const handleOpen = (func,index) =>{
    if(startAnimation===0) setStartAnimation(1);
    func(index);
  }

  const handleOver = () =>{
    if(!hover){
      setHover(true);
    }
  }

  const handleLeave = () =>{
    if(hover){
      setHover(false);
    }
  }
  return (
    <>
      <MGrid container direction='column'  
              style={{paddingRight:'15px'}} 
              highlighted={expand[index]?1:0} 
              hover = {hover?1:0}
              onClick={()=>handleOpen(func,index)}
              onMouseOver={handleOver} 
              onMouseLeave={handleLeave}
              >

        <Grid item >
          <Grid container  wrap='nowrap'>
              <CustomExpandMoreIcon flip={expand[index]?1:0} startanimation={startAnimation?1:0}/>
            <CTypography highlighted={expand[index]?1:0}>{question}</CTypography>
          </Grid>
        </Grid>

      </MGrid>
      <Grid item>
          <Collapse in={expand[index]}>
              <CATypography>{answer}</CATypography>
          </Collapse>
      </Grid>
    </>
  );
}


const rotate0to180 = keyframes`
  0%{
    transform: rotate(0deg);
  }

  100%{
    transform: rotate(180deg);
  }
`;

const rotate180to0 = keyframes`
  0%{
    transform: rotate(180deg);
  }
  99%{
    transform: rotate(359deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

const CustomExpandMoreIcon = styled(ExpandMoreIcon)`
  &&&{
    color:${props=>props.flip===1?"white":"rgb(0,120,50)"};
    animation-name: ${props=>{
      if(props.startanimation===0) return;
      const flip = props.flip;
      if(flip===1){
        return css`${rotate0to180}`;
      }else{
        return css`${rotate180to0}`;
      }
    }};
   
    animation-duration: 0.3s;
    animation-timing-function: ease-in;
    animation-fill-mode: both;
    margin-top:8px;
    margin-left:10px;
    transition: background 1s ease-in;
  }
`;

const MGrid = styled(Grid)`
  &&&{

    background: ${props=>{
      const highlighted = props.highlighted;
      const hover = props.hover;
      if(hover===1 && highlighted===0){
        return `rgb(188,213,208)`;
      }else{
      if(highlighted===0)
        return "rgb(168,193,188)";
      else
        return "rgb(0,150,80)";
      }
    }};

    margin-top:10px;
    padding-top:10px;
    padding-left:10px;
    border-radius: 4px;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    box-shadow: 1px 5px 5px rgba(125,125,125,0.5);
    cursor:pointer;
    transition: background 0.3s ease-in-out;
  }
`;

const CTypography = styled.div`
  &&&{
    -webkit-touch-callout: none; /* iOS Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    font-size:18px;
    margin-left: 10px;
    font-weight: 700;
    color:${props=>props.highlighted===0?'black':'white'};
    font-family: ${SUBSIDING_FONT};
    padding-bottom:15px;
    padding-top:8px;
  }
`;

const CATypography = styled.div`
  &&&{
    -webkit-touch-callout: none; /* iOS Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    margin-top:20px;
    font-size:18px;
    margin-left: 35px;
    font-family: ${SUBSIDING_FONT};
    font-weight:500;
    margin-right:25px;
    text-align:justify;
    padding-bottom:15px;
    line-height: 35px;
  }
`;

// const Faq = () =>{
//   const [clicked,setClicked] = useState(false);
//   const handleClick = () =>{
//     setClicked((prevclicked)=>!prevclicked);
//   }

//   const handleClick2 = () =>{
//     if(clicked === false)
//       setClicked((prevclicked)=>!prevclicked);
//   }
//   return (
//     <div>
//       <CTypography onClick={()=>handleClick()}>What is this?</CTypography>
//       <CATypography show={clicked} onClick={()=>handleClick2()}>This is going to be my answer</CATypography>
//     </div>
//   );
// }

export default Faq;


// const CTypography = styled(Typography)`
//   &&&{
//     -webkit-touch-callout: none; /* iOS Safari */
//     -khtml-user-select: none; /* Konqueror HTML */
//     -moz-user-select: none; /* Old versions of Firefox */
//     -ms-user-select: none; /* Internet Explorer/Edge */
//     user-select: none; 
//     cursor: pointer;
//     font-size: 20px;
//     color: rgb(0,0,200);
//   }
// `;


// const CATypography = styled(Typography)`
//   &&&{
//     position:relative;
//     -webkit-touch-callout: none; /* iOS Safari */
//     -khtml-user-select: none; /* Konqueror HTML */
//     -moz-user-select: none; /* Old versions of Firefox */
//     -ms-user-select: none; /* Internet Explorer/Edge */
//     user-select: none; 
//     transition: all 0.2s ease;
//     top:${props=>props.show?0:-30}px;
//     opacity: ${props=>props.show?1:0};
//     cursor:${props=>props.show?'arrow':'pointer'};
//   }
// `;