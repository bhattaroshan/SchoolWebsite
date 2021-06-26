import {useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import BlogCards from '../../components/BlogCards';

import axios from 'axios';


const BlogPage = (props) =>{

  //axios is not complete here need to complete to get blog thumbnail from here later
  const [thumnaildata,setThumnailData] = useState([]);

  useEffect(()=>{
    const handleLoad = () =>{
      const tempData = [];
      axios.get('https://prasar-backend.herokuapp.com/record')
          .then(res=>{
              res.data.forEach(element => {
                tempData.push(element);
              });
          })
        
      // setThumnailData(tempData);
      // console.log(thumnaildata);
    }

    window.addEventListener('load',handleLoad);
    return ()=>{
      window.removeEventListener('load',handleLoad);
    }
  })

  return (
    <div>
      <Grid container justify='center'>
        <Grid item md={12} sm={12} lg={10}>
          <Grid container justify='space-around'>
            {
              props.BlogThumbnailDetails.map((blogThumbnail,index)=>{
                return (
                  <div key={index} id={index}>
                    <BlogCards id={blogThumbnail.id}
                              image={blogThumbnail.image} 
                              title={blogThumbnail.title} 
                              content={blogThumbnail.content}
                    />
                  </div>
                );
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default BlogPage;