import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  mainFeatured: {
    height: 300,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: "url(https://source.unsplash.com/17_tB-oI0ao/6016x4016)",
    backgroundImage: "url(https://image.freepik.com/free-photo/school-age-children-medical-masks-portrait-school-children_109285-5762.jpg)",
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

export default function MainFeatured() {
  const classes = useStyles();

  return (
    <Grid container className={classes.mainFeatured}>
      <Grid item md={6} className={classes.mainFeaturedContent}>
        <Typography component="h1" variant="h5" color="inherit" gutterBottom>
          School Blogs
        </Typography>
        <Typography variant="body1" color="inherit" paragraph>
          Read about our school, our achievements and our teaching pedagogy
        </Typography>
      </Grid>
    </Grid>
  );
}