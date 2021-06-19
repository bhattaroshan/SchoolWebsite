import React from 'react';
import { Card, makeStyles } from '@material-ui/core';

function CarouselSlide(props) {
    const { backgroundColor, title } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <h1>{title}</h1>
        </Card>
    );
}

const ScrollingView = () =>{
  return (
    <div>
      <CarouselSlide
                content={{ backgroundColor: '#ff7c7c', title: 'Slide 1' }}
            />
    </div>
  );
}

export default ScrollingView;