import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

import {withRouter} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    maxWidth: 345,
    marginTop: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function Cards({image,title,content,id}) {
  const history = useHistory();
  const classes = useStyles();

  const handleBlogClick = () =>{
    history.push(`/${id}`);
  }

  return (
    <CustomCard>
      <CardMedia
        className={classes.media}
        image={image}
        title="My friends"
      />
      <CardContent>
          <Typography variant='body1' style={{fontWeight:'bold'}}>
            {title && title.slice(0,50)}
            {title && title.length>50 && <span> ....</span>}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'10px'}}>
            {content  && content.slice(0,65)} .....
          </Typography>
          <CardActions disableSpacing>
            <Button variant='outlined' 
                    style={{position:'absolute', right:'3%',bottom:'3%'}}
                    onClick={()=>handleBlogClick()}>
                    Read More...
            </Button>
        </CardActions>
      </CardContent>
    </CustomCard>
  );
}

export default withRouter(Cards);

const CustomCard = styled(Card)`
&&&{
  position:relative;
  transition: 0.3s;
  width: 400px;
  height: 350px;
  background: rgb(168,193,188);
  margin-top:20px;
  max-width:345px;
}
&:hover{
  box-shadow:2px 2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  transform: translateY(-5px);
}
`;