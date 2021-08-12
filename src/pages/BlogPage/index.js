import {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import BlogCards from '../../components/BlogCards';

import axios from 'axios';
import CoverPhoto from '../../components/CoverPhoto';
import BlogBanner from '../../assets/BlogBanner.jpg';

import ContactUs from '../../components/ContactUs';
import WindowDimension from '../../components/WindowDimension';

const BlogPage = (props) =>{

  const screen = WindowDimension();

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
     <CoverPhoto 
        image={BlogBanner} 
        height={500*(screen.width/1920)<200?200:500*(screen.width/1920)}>
     </CoverPhoto>

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