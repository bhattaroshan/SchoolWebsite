import styled from 'styled-components';

import BlogThumbnail from './components/BlogThumbnail.js/index.js';
import NavBar from './components/NavBar';
import BlogCover from './components/BlogCover/index2.js';

import outsideClassroom from './assets/outsideClassroom.jpg';
import fun from './assets/fun.jpg';
import balance from './assets/balance.jpg';
import steam from './assets/steam.jpg';
import award from './assets/award.jpg';
import quiz from './assets/quiz.jpg';

import './style.css';
import Cards from './components/Cards';
import { CardMedia } from '@material-ui/core';
import CustomCarousel from './components/CustomCarousel';
import FeaturedPost from './components/About';

import Grid from '@material-ui/core/Grid';
import AppBarResponsive from './components/AppBarResponsive';

function App() {
  const appBarHeight = 120;
  const post = {
    title: 'About the principal',
    date: 'Dr. DayaRam Ghimire',
    description: 'Graduated from Yale University, Dr. Ghimire has 25 years of experience in teaching in both national and international schools. Being the pioneer in the field, Ghimire was awarded for bringing best in students by Internation Teachers Association in 1996.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Claude_Dauphin%2C_CEO_Trafigura.jpg'
  }
  return (
    <div>
      {/* <CustomCarousel/>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'95vh'}}>
        <FeaturedPost post={post}/>
      </div> */}
      {/* <div>

        <Header />
      </div> */}
      {/* <NavBar height={appBarHeight} /> */}
      <AppBarResponsive />
      <CarouselDiv startHeight={appBarHeight}>
        <CustomCarousel />
      </CarouselDiv>
      <CustomBody startHeight={appBarHeight}>
        <Grid container justify='center'>
          <Grid item md={12} sm={12} lg={10}>
            <Grid container justify='space-around'>
              <Cards image={outsideClassroom} />
              <Cards image={quiz} />
              <Cards image={award} />
              <Cards image={balance} />
              <Cards image={fun} />
              <Cards image={quiz} />
              <Cards image={balance} />
              <Cards image={outsideClassroom} />
              <Cards image={quiz} />
              <Cards image={award} />
              <Cards image={balance} />
              <Cards image={fun} />
              <Cards image={quiz} />
              <Cards image={balance} />
            </Grid>
          </Grid>
        </Grid>
      </CustomBody>
    </div>
  );
}

export default App;


const CustomBody = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.startHeight}px;
`;

const CarouselDiv = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${props => props.startHeight}px;
`;