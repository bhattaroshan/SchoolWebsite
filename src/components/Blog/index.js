import {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import parse, {domToReact,attributesToProps} from 'html-react-parser';

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
  replace: ({attribs,children})=>{
    if(!attribs) return;

    if(attribs.id==='para'){
      return <span>{domToReact(children,options)}</span>;
    }
    if(attribs.id==='img'){
      return <div style={{margin:'20px'}}><CustomCover image={attribs.class}/></div>;
    }
  }
};

const blogPost = `
     <span id='para'>What This is <span style='color:red;'>again this one </span>
     another is Lorem Ipsum?Lorem is simply <span id='color-red'>dummy text </span> 
     of the printing and typesetting industry. Lorem Ipsum has been the industry's 
     standard dummy text ever since the 1500s, when an unknown printer took a galley 
     of type and scrambled 
     <span id='img' class='https://cdn.pixabay.com/photo/2014/11/13/06/12/boy-529067_960_720.jpg'></span>
     it to make a type specimen book. It has survived not only 
     five centuries, but also the leap into electronic typesetting, remaining essentially 
     unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
     including versions of <a href='https://www.google.com'>Check out here</a> Lorem Ipsum.Where does it come from?Contrary to popular belief, 
     Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
     from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
     College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum 
     passage, and going through the cites of the word in classical literature, discovered the undoubtable 
     source.</span> <span id='para'>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus 
     Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
     on the 
     <span id='img' class='https://cdn.pixabay.com/photo/2016/08/26/22/45/chain-1623322_960_720.jpg'></span>
     theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum 
     dolor sit amet.., comes from a line in section 1.10.32.</span> 
     <span id='para'>Here comes another paragraph change</span>

`;

const CustomCover = ({image}) =>{
   const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('load',handleResize);
    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('load',handleResize);
      window.removeEventListener('resize',handleResize);
    }
  })

   return <div style={{position:'relative', left:'50%', transform: 'translate(-50%,0)'}}>
        <BlogCover image={image} height={windowWidth>1080?400:(windowWidth>650?300:200)}/>
      </div>
}

const Blogs = () =>{

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    const handleResize = () =>{
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('load',handleResize);
    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('load',handleResize);
      window.removeEventListener('resize',handleResize);
    }
  })

  return (
      <CPaper elevation={5}>
      <div style={{display:'flex'}}>
        <CTitle>STUDENTS WORKING OUTSIDE</CTitle>
      </div>
        <CBody width={windowWidth}>{parse(blogPost,options)}</CBody>
      </CPaper>
  );
}

export default Blogs;

const CPaper = styled(Paper)`
  &&&{
    width:90%;
    min-height: 400px;
  }
`;

const CTitle = styled(Typography)`
  &&&{
    margin-top:30px;
    margin-bottom:30px;
    font-family: 'Roboto';
    font-weight: 900;
    position:relative;
    text-align: center;
    font-size:35px;
    left:50%;
    transform: translate(-50%,0);
  }
`;

const CBody = styled.div` 
  &&&{
    /* margin:5px; */
    margin-left: ${props=>props.width<650?'20px':(props.width<1080?'50px':'120px')};
    margin-right: ${props=>props.width<650?'20px':(props.width<1080?'50px':'120px')};
    font-size:${props=>props.width<650?'16px':(props.width<1080?'18px':'22px')};
    text-align: justify;
    font-family: 'Roboto';;
    font-weight: 400;
    line-height: 1.6;
  }
`;