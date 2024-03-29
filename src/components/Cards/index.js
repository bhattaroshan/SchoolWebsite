import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    position:'relative',
    maxWidth: 345,
    marginTop: '20px',
    // marginLeft: '20px'
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
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cards({image,title,subheader}) {
  const classes = useStyles();


  return (
    <CustomCard className={classes.root} >
      {/* <CardHeader
        title={title}
        subheader={subheader}
      /> */}
      <CardMedia
        className={classes.media}
        image={image}
        title="My friends"
      />
      <CardContent>
        <Typography variant='body1' style={{fontWeight:'bold'}}>Students exploring environment</Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'10px'}}>
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton style={{marginLeft:'auto'}}> */}
          <Button variant='outlined' color='secondary' style={{marginLeft:'auto'}}>Read More...</Button>
        {/* </IconButton> */}
      </CardActions>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
&&&{
  transition: 0.3s;
}
&:hover{
  box-shadow:2px 2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  transform: translateY(-5px);
}
`;