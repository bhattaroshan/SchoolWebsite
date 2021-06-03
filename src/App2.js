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
      <NavBar height={appBarHeight}/>
      <CustomCarousel/>
      <CustomBody startHeight={appBarHeight}>
      <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr)', width:'70%'}}>
        <Cards image={outsideClassroom} />
        <Cards image={quiz} />
        <Cards image={award}/>
        <Cards image={balance}/>
        <Cards image={fun}/>
        <Cards image={quiz}/>
        <Cards image={balance}/>
        <Cards image={outsideClassroom}/>
        <Cards image={quiz} />
        <Cards image={award}/>
        <Cards image={balance}/>
        <Cards image={fun}/>
        <Cards image={quiz}/>
        <Cards image={balance}/>
      </div>
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
  margin-top: ${props=>props.startHeight}px;
`;