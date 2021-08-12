import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import WindowDimension from "../WindowDimension";

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

  const screen = WindowDimension();
  const t = screen.width;
  const classes = useStyles({image,height,t});
  return (
    <Grid container className={classes.mainFeatured}>
      <Grid item lg={12} md={12} sm={12} xs={12} className={classes.mainFeaturedContent}
        style={{textAlign:'center', justifyContent:'center', top:'20%'}}
      > 
        <Typography component="h1" variant="h5" color="inherit" gutterBottom
          style={{fontSize:'40px', fontWeight:'bold', fontFamily:'Open Sans'}} 
        >
          {title}
        </Typography>
        <Typography variant="body1" color="inherit" paragraph>
          {content}
        </Typography>
      </Grid>
    </Grid>
  );
}
