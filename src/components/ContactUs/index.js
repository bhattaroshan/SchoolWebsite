import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Link from '@material-ui/core/Link';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

import Grid from '@material-ui/core/Grid';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const ContactUs = () => {

  return (
    <div>
      <Grid container justify='center'>
        <Grid item xs={12} sm={6} lg={12}>
          <Grid container justify='space-around' style={{textAlign:'center'}}>
            <div style={{padding:'30px'}}>
                <CPhoneInTalkOutlinedIcon/>
                <CTypography>Phone</CTypography>
                <CSubTypography>Connect directly with School at the provided number </CSubTypography>
                <CSubTypography>+01-44003267</CSubTypography>
              </div>
              <div style={{padding:'30px'}}>
                <CMailOutlineIcon/>
                <CTypography>Email</CTypography>
                <CSubTypography>We are eager to hear from you about your queries </CSubTypography>
                <CSubTypography>info@dhaulagiri.com</CSubTypography>
              </div>
              <div style={{padding:'30px'}}>
                <CLocationOnOutlinedIcon/>
                <CTypography>Location</CTypography>
                <CSubTypography>Dhaulagiri Secondary School</CSubTypography>
                <CSubTypography>Hemja, Pokhara</CSubTypography>
              </div>
          </Grid>
        </Grid>
      </Grid>
        <div style={{marginTop:'100px',marginBottom:'100px', textAlign:'center'}}>
          <Typography style={{fontSize:'30px', fontWeight:'bold', color:'black'}}>SEND US A MESSAGE</Typography>
          <Link color='inherit' href='https://google.com'><FacebookIcon style={{color:'black', marginTop:'50px', marginLeft:'40px', marginRight:'40px', fontSize:'50px'}}/></Link>
          <Link color='inherit' href='https://google.com'><TwitterIcon style={{color:'black', marginTop:'50px',marginLeft:'40px', marginRight:'40px', fontSize: '50px'}}/></Link>
        </div>
    </div>
  );
}

export default ContactUs;


const CTypography = styled(Typography)`
  &&&{
    font-size:25px;
    color:black;
  }
`;

const CSubTypography = styled(Typography)`
  &&&{
    color:black;
  }
`;

const CPhoneInTalkOutlinedIcon = styled(PhoneInTalkOutlinedIcon)`
  &&&{
    margin:30px;
    font-size: 40px;
    color:black;
  }
`;

const CMailOutlineIcon = styled(MailOutlineIcon)`
  &&&{
    margin:30px;
    font-size: 40px;
    color:black;
  }
`;

const CLocationOnOutlinedIcon = styled(LocationOnOutlinedIcon)`
  &&&{
    margin:30px;
    font-size: 40px;
    color:black;
  }
`;