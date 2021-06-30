import React from 'react';
import PropTypes from 'prop-types';
import {useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import SwipableViews from 'react-swipeable-views';
import Grid from '@material-ui/core/Grid';
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


export default function ScrollableTabsButtonForce(props) {

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index =>{
    setValue(index);
  }

  return ( // <Grid container justify='center'>
    // <Grid item lg={6} md={8} sm={10} xs={11} >
    <Grid container justify='center' >
    <Grid item lg={6} md={8} sm={10} xs={11}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs"
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

    </Grid>
    </Grid>
  );
}