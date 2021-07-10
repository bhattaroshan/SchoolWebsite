import {useState, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import styled from 'styled-components';
import {domToReact} from 'html-react-parser';

import parse from 'html-react-parser';

import CircularProgress from '@material-ui/core/CircularProgress';

import CoverPhoto from '../CoverPhoto';
import axios from 'axios';

import {MAJOR_FONT, MAJOR_FONT_WEIGHT, SUBSIDING_FONT} from '../../constants';
import WindowDimension from '../WindowDimension';


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
   const screen = WindowDimension();

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  })

 

   return <div style={{position:'relative', left:'50%', transform: 'translate(-50%,0)'}}>
        <CoverPhoto image={image} height={screen.width>1080?400:(screen.width>650?300:200)}/>
      </div>
}

const Blogs = ({width}) =>{
  const screen = WindowDimension();
  const [content,setContent] = useState("");
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    // const url = 'https://prasar-backend.herokuapp.com/record'+window.location.pathname;
    // axios.get(url)
    //      .then(res=>{
    //        setContent(res.data[0]);
    //        console.log(res.data);
    //        setLoaded(true);
    //      })
    const url = 'https://prasar-backend.herokuapp.com/record';
    axios.get(url)
         .then(res=>{
           res.data.forEach((data)=>{
            // console.log(data);
            if(data._id === window.location.pathname.slice(1))
              // console.log(data)
              setContent(data);
              setLoaded(true);
              return;
           })
          //  setContent(res.data[0]);
          //  console.log(res.data);
          //  setLoaded(true);
         })
      
  },[])

  return (
    <Cdiv width={screen.width}>
    {
      loaded?
       <CPaper actualwidth={screen.width} width={width} elevation={5}>
       <div style={{background:'rgb(220,220,220)', borderRadius:'5px', marginBottom:'20px', marginTop:'-28px'}}>
        <CTitle style={{paddingTop:'15px'}} acutalwidth={screen.width} width={width}>{content.title!==undefined && content.title}</CTitle>
          <CAuthor>
            <Avatar>R</Avatar>
            <div>
            <Typography 
                    style={{fontFamily:`${SUBSIDING_FONT}`, color:'rgb(100,100,100)', marginLeft:'20px', fontSize:'18px'}}>
                    Roshan Bhatta
            </Typography>
            <Typography style={{fontFamily:`${SUBSIDING_FONT}`, marginLeft:'20px', fontSize:'12px'}}>
              22 September, 2021
            </Typography>

            </div>

          </CAuthor>
       </div>
         
               <CBody width={screen.width}>
                 <p style={{marginBottom:'50px', fontFamily:`${SUBSIDING_FONT}`}}>
                  {content.blog!==undefined && parse(content.blog)}
                 </p>
               </CBody>
       </CPaper>
       :<div style={{margin:'200px'}}>
         <div style={{display:'flex', justifyContent:'center', marginTop:'80px'}}>
              <CircularProgress/>
           </div>
       </div>
    }
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
    width:${props=>(props.actualwidth*props.width)/100}px;
    min-height: 400px;
    /* background:rgb(168,193,188); */
    background:rgb(240,240,240);
    overflow:hidden;
    box-shadow:5px 3px 5px rgba(0,0,0,0.2);
  }
`;

const CTitle = styled(Typography)`
  &&&{
    margin-top:30px;
    font-family: ${MAJOR_FONT};
    font-weight: 700;
    position:relative;
    text-align: center;
    font-size:35px;
    left:50%;
    transform: translate(-50%,0);
  }
`;

const CAuthor = styled.div`
  &&&{
    padding-top: 10px;
    padding-bottom: 15px;
    display:flex;
    /* justify-content: center; */
    margin-left:30px;
    align-items: center;
    /* background:red; */
  }
`;

const CBody = styled.div` 
  &&&{
    margin-left: ${props=>props.width<650?'20px':(props.width<1080?'50px':'120px')};
    margin-right: ${props=>props.width<650?'20px':(props.width<1080?'50px':'120px')};
    font-size:${props=>props.width<650?'16px':(props.width<1080?'18px':'22px')};
    text-align: justify;
    font-family: ${MAJOR_FONT};
    font-weight: ${MAJOR_FONT_WEIGHT};
    line-height: ${props=>props.width<650?'35px':(props.width<1080?'40px':'50px')};
  }
`;