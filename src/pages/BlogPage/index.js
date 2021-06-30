import {useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import BlogCards from '../../components/BlogCards';

import axios from 'axios';
import BlogCover from '../../components/BlogCover';
import BlogBanner from '../../assets/BlogBanner.jpg';

import ContactUs from '../../components/ContactUs';

const BlogPage = (props) =>{

  //axios is not complete here need to complete to get blog thumbnail from here later
  // const [thumnaildata,setThumnailData] = useState([]);
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
     <BlogCover 
        image={BlogBanner} 
        height={500*(windowWidth/1920)<200?200:500*(windowWidth/1920)}>
     </BlogCover>

      <Grid container justify='center'>
        <Grid item md={12} sm={10} lg={10} xs={11}>
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
      <ContactUs/>
    </div>
  );
}

export default BlogPage;