import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import parse, {domToReact} from 'html-react-parser';

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
      return <CBody>{domToReact(children,options)}</CBody>;
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
   return <div style={{position:'relative', left:'50%', transform: 'translate(-50%,0)', width:'100%'}}>
        <BlogCover image={image}/>
      </div>
}

const Blogs = () =>{
  return (
    <Grid item xs={12} sm={11} md={10} xl={10}>
      <CPaper elevation={3}>

      <div style={{display:'flex', justifyContent:'center'}}>
        <CTitle>Students working outside</CTitle>
      </div>

      {parse(blogPost,options)}
      </CPaper>
    </Grid>
  );
}

export default Blogs;

const CPaper = styled(Paper)`
  &&&{
    min-height: 400px;
  }
`;

const CTitle = styled(Typography)`
  &&&{
    font-size:50px;
  }
`;

const CBody = styled(Typography)` 
  &&&{
    margin:100px;
    font-size:25px;
    font-family: 'Roboto';
    font-weight: 400;
    text-align: justify;
  }
`;
