import {useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import BlogCards from '../../components/BlogCards';

import axios from 'axios';

import defBlogPic from '../../assets/blog.png';

const BlogPage = (props) =>{

  const [thumnaildata,setThumnailData] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(()=>{
    const handleLoad = () =>{
      const tempData = [];
      console.log('I came here');
      axios.get('https://prasar-backend.herokuapp.com/record')
          .then(res=>{
              res.data.forEach(element => {
                tempData.push(element);
              });
          })
        
      // setThumnailData(tempData);
      setLoaded(true);
      console.log(thumnaildata);
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
                    {/* <BlogCards id={thumnaildata._id}
                               image={defBlogPic}
                               title={thumnaildata.title}
                               content={thumnaildata.blog}
                    /> */}
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