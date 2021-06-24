
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

const Faq = (props)=>{
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      {
        props.faqs.map((elem)=>{
          return <FaqTemp question={elem.question} answer={elem.answer}/>
        })
      }
    </div>
  );
}

const FaqTemp = ({question,answer}) =>{
  const [checked, setChecked] = useState(false);

  const handleOpen = () =>{
    setChecked((prev)=>!prev);
  }

  return (

      <MGrid container lg={6} md={8} sm={10} xs={10}  direction='column' onClick={()=>handleOpen()}>
        <Grid item>
          <Grid container justify='space-between' wrap='nowrap'>
            <CTypography>{question}</CTypography>
            {!checked && <ExpandMoreIcon/>}
            {checked && <ExpandLessIcon/>}
          </Grid>
      </Grid>
      <Grid item>
          <Collapse in={checked}>
            <CATypography>{answer}</CATypography>
          </Collapse>
      </Grid>
      </MGrid>

      // </div>

    // </div>
  );
}

const MGrid = styled(Grid)`
  &&&{
    background:rgb(220,220,250);
    margin:10px;
    padding:10px;
    border-radius: 10px;
    box-shadow: 1px 5px 5px rgba(125,125,125,0.5);
    cursor:pointer;
  }
`;

const CTypography = styled(Typography)`
  &&&{
    font-size:20px;
    margin-left: 40px;
    font-weight: bold;
    color:rgb(0,100,200);
  }
`;

const CATypography = styled(Typography)`
  &&&{
    margin-top:20px;
    font-size:18px;
    margin-left: 40px;
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