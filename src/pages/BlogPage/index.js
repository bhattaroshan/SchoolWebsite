import Grid from '@material-ui/core/Grid';
import BlogCards from '../../components/BlogCards';

const BlogPage = (props) =>{
  return (
    <div>
      <Grid container justify='center'>
        <Grid item md={12} sm={12} lg={10}>
          <Grid container justify='space-around'>
            {
              props.BlogThumbnailDetails.map((blogThumbnail,index)=>{
                return (
                  <div key={index} id={index}>
                    <BlogCards image={blogThumbnail.image} 
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