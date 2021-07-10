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
import {SUBSIDING_FONT} from '../../constants';
import Collapse from '@material-ui/core/Collapse';

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
        <CDate>11<br/>Jun</CDate>
      <CCardMedia
        className={classes.media}
        image={image}
        title="My friends"
      />
      <CCardContent>
          <Typography variant='body1' 
                      style={{fontWeight:'900', fontSize:'18px', 
                              fontFamily: `${SUBSIDING_FONT}`, 
                              textTransform:'uppercase'}}>
            {title && title.slice(0,50)}
            {title && title.length>50 && <span> ....</span>}
          </Typography>
          <Collapse in={true}>
            <Typography variant="body2" color="textSecondary" component="p" 
                        style={{marginTop:'10px', fontFamily:`${SUBSIDING_FONT}`}}>
              {content  && content.slice(0,65)} .....
            </Typography>
            <CardActions disableSpacing>
              <Button variant='outlined' 
                      style={{position:'absolute', right:'3%',bottom:'3%', fontFamily:`${SUBSIDING_FONT}`}}
                      onClick={()=>handleBlogClick()}>
                      Read More...
              </Button>
          </CardActions>

          </Collapse>
      </CCardContent>
    </CustomCard>
  );
}

export default withRouter(Cards);

const CCardMedia = styled(CardMedia)`
  &&&{
    &:hover{
    }
  }
`;

const CCardContent = styled(CardContent)`
  &&&{
    &:hover{
      
    }
  }
`;

const CDate = styled.div`
  display:flex;
  position:absolute;
  right:0px;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 14px;
  font-family: ${SUBSIDING_FONT};
  text-align: center;
  line-height: 18px;
  color:white;
  font-weight:900;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  background:rgb(0,160,100);
  width:60px;
  height:60px;
  border-radius: 50%;
  overflow: hidden;

`;

const CustomCard = styled(Card)`
&&&{
  position:relative;
  transition: 0.3s;
  width: 400px;
  height: 350px;
  /* background: rgb(168,193,188); */
  background: rgb(250,250,250);
  margin-top:20px;
  max-width:345px;
}
&:hover{
  box-shadow:2px 2px 5px rgba(0,0,0,0.4);
  cursor: pointer;
  transform: translateY(-1px);
}
`;