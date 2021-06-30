
import {useState} from 'react';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styled, {css, keyframes} from 'styled-components';
import parse from 'html-react-parser';
import { MAJOR_FONT, MAJOR_FONT_WEIGHT, SUBSIDING_FONT } from '../../constants';

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
                          expand={checked}/>
        })
      }
    </div>

  );
}

const FaqTemp = ({question,answer,func,index,expand}) =>{
  const [startAnimation,setStartAnimation] = useState(0);

  const handleOpen = (func,index) =>{
    if(startAnimation===0) setStartAnimation(1);
    func(index);
  }

  return (

      <MGrid container direction='column'  style={{paddingRight:'15px'}}>

        <Grid item onClick={()=>handleOpen(func,index)}>
          <Grid container justify='space-between' wrap='nowrap'>
              <CTypography>{question}</CTypography>
                <CustomExpandLessIcon flip={expand[index]?1:0} startanimation={startAnimation?1:0}/>
          </Grid>
        </Grid>

        <Grid item>
            <Collapse in={expand[index]}>
                <CATypography>{parse(answer)}</CATypography>
            </Collapse>
          </Grid>

      </MGrid>

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
  99.5%{
    transform: rotate(359deg);
  }
  100%{
    transform: rotate(0deg);
  }
`;

const CustomExpandLessIcon = styled(ExpandLessIcon)`
  &&&{
    animation-name: ${props=>{
      if(props.startanimation===0) return '';
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
    margin-left:20px;
  }
`;

const MGrid = styled(Grid)`
  &&&{
    background:rgb(168,193,188);
    margin-top:10px;
    padding-top:10px;
    padding-left:10px;
    border-radius: 10px;
    box-shadow: 1px 5px 5px rgba(125,125,125,0.5);
    cursor:pointer;
  }
 
`;

const CTypography = styled.div`
  &&&{
    -webkit-touch-callout: none; /* iOS Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    font-size:20px;
    margin-left: 50px;
    font-weight: 700;
    color:black;
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
    margin-left: 40px;
    font-family: ${SUBSIDING_FONT};
    font-weight:500;
    margin-right:20px;
    text-align:justify;
    padding-bottom:15px;
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