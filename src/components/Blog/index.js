import {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import {domToReact} from 'html-react-parser';

import CircularProgress from '@material-ui/core/CircularProgress';

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