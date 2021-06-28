import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipableViews from 'react-swipeable-views';
import { ScatterPlot } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div style={{fontFamily:'inherit', fontWeight:'inherit'}}>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabs:{
  },
  tab:{
    marginTop:'40px',
    marginLeft:'-5%',
  }

}));

export default function ScrollableTabsButtonForce(props) {

  const theme = useTheme();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index =>{
    setValue(index);
  }

  return (
    <div className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
          className={classes.tabs}
        >
        {
          props.tabs.map((t,index)=>{
            return (
              <Tab key={index} id={index} label={t.tab} icon={t.icon} {...a11yProps(index)}
                style={{fontSize:'16px', margin:'10px'}}
              />
            );
          })
        }
        </Tabs>

        <SwipableViews enableMouseEvents 
          axis={theme.direction === 'rtl'?'x-reverse':'x'} 
          index={value}
          onChangeIndex={handleChangeIndex}
          className={classes.tab}
        >
        {
          props.children.map((child,index)=>{
            return (
              <TabPanel key={index} id={index} value={value} index={index}>
                  {child}
              </TabPanel>
            );
          })
        }
        </SwipableViews>

        </div>
  );
}