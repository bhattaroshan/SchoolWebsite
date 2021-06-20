import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';

import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';


import {FOOTER_BG, FOOTER_FACEBOOK_LINK, 
        FOOTER_ONE_LINER, FOOTER_TITLE_TEXT, 
        FOOTER_TITLE_TEXT_LINK, FOOTER_TWITTER_LINK, 
        FOOTER_YOUTUBE_LINK, FOOTER_TITLE_TEXT_COLOR,
        FOOTER_ONE_LINER_COLOR} from '../../constants';

export default function Footer() {

  return (
      <div>
            {/* <BottomNavigation>
            <Typography>Contact Us</Typography>
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          </BottomNavigation> */}

        <CFooter> 
            <Typography style={{color:`${FOOTER_TITLE_TEXT_COLOR}`, fontSize:'20px'}}> © 
              <Link color='inherit' href={FOOTER_TITLE_TEXT_LINK}> {FOOTER_TITLE_TEXT}</Link> 
              {' '}{new Date().getFullYear()}
            </Typography>
            <Typography style={{color:`${FOOTER_ONE_LINER_COLOR}`}}>
              {FOOTER_ONE_LINER}
            </Typography>
            <div>
            <Link color='inherit' href={FOOTER_FACEBOOK_LINK}>
                <FacebookIcon style={{fontSize:'40px', margin:'10px'}}/>
            </Link>
            <Link color='inherit' href={FOOTER_YOUTUBE_LINK}>
              <YouTubeIcon style={{fontSize:'40px', margin:'10px'}}/>
              </Link>
            <Link color='inherit' href={FOOTER_TWITTER_LINK}>
                <TwitterIcon style={{fontSize:'40px', margin:'10px'}}/>
              </Link>
            </div>
        </CFooter>
      </div>
  );
}

const CFooter = styled.div`
  &&&{
    /* height:500px; */
    margin-top:100px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    min-height: 150px;
    background: ${FOOTER_BG};
  }

`;
