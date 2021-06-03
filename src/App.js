import styled from 'styled-components';

import BlogThumbnail from './components/BlogThumbnail.js';
import NavBar from './components/NavBar';
import BlogCover from './components/BlogCover/index2';

import outsideClassroom from './assets/outsideClassroom.jpg';
import fun from './assets/fun.jpg';
import balance from './assets/balance.jpg';
import steam from './assets/steam.jpg';
import award from './assets/award.jpg';
import quiz from './assets/quiz.jpg';

import './style.css';
import Cards from './components/Cards';
import { CardMedia } from '@material-ui/core';

function App() {
  const appBarHeight = 120;

  return (
    <div>
      {/* <Cards image={outsideClassroom}/> */}
      <NavBar height={appBarHeight}/>
      <CustomBody startHeight={appBarHeight}>
      <BlogCover image={quiz}/>
      <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr)', width:'70%'}}>
        <BlogThumbnail image={outsideClassroom} title="Learning Outside Classroom"/>
        <BlogThumbnail image={outsideClassroom} title="Learning Outside Classroom"/>
        <BlogThumbnail image={fun} title="Students participating in the club activities"/>
        <BlogThumbnail image={balance} title="Training physically is as important as mentally"/>
        <BlogThumbnail image={steam} title="STEAM education in 21st century"/>
        <BlogThumbnail image={award} title="Out teachers got innovation in teaching award"/>
        <BlogThumbnail image={quiz} title="Grade 7 students organized national-level quiz contest"/>
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