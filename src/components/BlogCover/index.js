import React,{useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    height: props=>`${props.height}px`,
    width:props=>`${props.windowWidth}px`,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: props=>`url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturedContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeatured({image,height, title, content}) {
  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
    setWindowWidth(window.innerWidth);
  },[])

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
  const classes = useStyles({image,height,windowWidth});
  return (
    <Grid container className={classes.mainFeatured}>
      <Grid item md={6} className={classes.mainFeaturedContent}>
        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" color="inherit" paragraph>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}
