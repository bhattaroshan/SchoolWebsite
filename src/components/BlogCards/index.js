import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';

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

export default function Cards({image,title,content}) {
  const classes = useStyles();

  return (
    <CustomCard className={classes.root} >
      <CardMedia
        className={classes.media}
        image={image}
        title="My friends"
      />
      <CardContent>
        <Typography variant='body1' style={{fontWeight:'bold'}}>{title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:'10px'}}>
          {content.slice(0,85)} .....
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton style={{marginLeft:'auto'}}> */}
          <Button variant='outlined' style={{color:'rgb(200,200,200)', marginLeft:'auto'}}>Read More...</Button>
        {/* </IconButton> */}
      </CardActions>
    </CustomCard>
  );
}

const CustomCard = styled(Card)`
&&&{
  transition: 0.3s;
  padding: 10px;
  width: 400px;
  height: 350px;
  background: rgb(100,100,100);
}
&:hover{
  box-shadow:2px 2px 5px rgba(0,0,0,0.2);
  cursor: pointer;
  transform: translateY(-5px);
}
`;