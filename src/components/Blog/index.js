import {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import parse, {domToReact} from 'html-react-parser';

import CircularProgress from '@material-ui/core/CircularProgress';

import blogPic from '../../assets/photo1.jpg';
import defBlogImg from '../../assets/blog.png';

import BlogCover from '../BlogCover';
import axios from 'axios';



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
     What This is again this one 
     another is Lorem Ipsum?Lorem is simply dummy text 
     of the printing and typesetting industry. Lorem Ipsum has been the industry's 
     standard dummy text ever since the 1500s, when an unknown printer took a galley 
     of type and scrambled 
     it to make a type specimen book. It has survived not only 
     five centuries, but also the leap into electronic typesetting, remaining essentially 
     unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
     Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
     including versions of Check out here Lorem Ipsum.Where does it come from?Contrary to popular belief, 
     Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
     from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
     College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum 
     passage, and going through the cites of the word in classical literature, discovered the undoubtable 
     source.Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus 
     Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
     on the 
     theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum 
     dolor sit amet.., comes from a line in section 1.10.32.</span> 

`;

const CustomCover = ({image}) =>{
   const [windowWidth,setWindowWidth] = useState(window.innerWidth); 

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

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
  const [content,setContent] = useState("");
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    const url = 'https://prasar-backend.herokuapp.com/record'+window.location.pathname;
    axios.get(url)
         .then(res=>{
           console.log(res.data[0]);
           setContent(res.data[0]);
           setLoaded(true);
         })
      
  },[])

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
    <Cdiv width={windowWidth}>
      <CPaper width={windowWidth} elevation={5}>
         {
           loaded ?
           <div>
             <CTitle>{content.title}</CTitle>
               <CBody width={windowWidth}>
                 <p style={{marginBottom:'50px'}}>{content.blog}</p>
               </CBody>
           </div>
           :<div style={{display:'flex', justifyContent:'center', marginTop:'80px'}}>
              <CircularProgress/>
           </div>
         }
      </CPaper>
    </Cdiv>
  );
}

export default Blogs;

const Cdiv = styled.div`
  &&&{
    margin-top:100px;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;

const CPaper = styled(Paper)`
  &&&{
    width: ${props=>props.width<650?'90%':(props.width<1080?'80%':'70%')};
    min-height: 400px;
    background:rgb(168,193,188);
    overflow:hidden;
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
    margin-left: ${props=>props.width<650?'20px':(props.width<1080?'50px':'120px')};
    margin-right: ${props=>props.width<650?'20px':(props.width<1080?'50px':'120px')};
    font-size:${props=>props.width<650?'16px':(props.width<1080?'18px':'22px')};
    text-align: justify;
    font-family: 'Roboto';;
    font-weight: 400;
    line-height: 1.6;
  }
`;