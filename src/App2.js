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

function App() {
  const appBarHeight = 120;

  return (
    <div>
      {/* <Cards image={outsideClassroom}/> */}
      <NavBar height={appBarHeight}/>
      <CustomBody startHeight={appBarHeight}>
      <BlogCover image={quiz}/>
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