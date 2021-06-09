import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import outsideClassroom from './assets/outsideClassroom.jpg';
import fun from './assets/fun.jpg';
import balance from './assets/balance.jpg';
// import steam from './assets/steam.jpg';
import award from './assets/award.jpg';
import quiz from './assets/quiz.jpg';
import logo from './assets/logo.jpg';
import blog1 from './assets/blog1.jpg';

import Cards from './components/Cards';
import CustomCarousel from './components/CustomCarousel';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';

import Grid from '@material-ui/core/Grid';
import AppBar from './components/AppBar';

// import createBrowserHistory from 'history/createBrowserHistory';

const appBarHeight = 120;

function NavTest({appBarHeight}){
  return <>
      <AppBar logo={logo} />
        <CarouselDiv startHeight={appBarHeight}>
          <CustomCarousel />
        </CarouselDiv>
  </>;
}

function BlogBody({appBarHeight}){
  return <>
     <CustomBody startHeight={appBarHeight}>
        <Grid container justify='center'>
          <Grid item md={12} sm={12} lg={10}>
            <Grid container justify='space-around'>
              <Cards image={blog1} />
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
  </>;
}

function App() {
  const post = {
    title: 'About the principal',
    date: 'Dr. DayaRam Ghimire',
    description: 'Graduated from Yale University, Dr. Ghimire has 25 years of experience in teaching in both national and international schools. Being the pioneer in the field, Ghimire was awarded for bringing best in students by Internation Teachers Association in 1996.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Claude_Dauphin%2C_CEO_Trafigura.jpg'
  }
  return (
    <Router>
        <NavTest appBarHeight={appBarHeight}/>
        <Switch>
          <Route exact path='/' >
            <BlogBody appBarHeight={appBarHeight}/>
          </Route>
          <Route path='/about'>
            <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
              <About post={post}/>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
              <About post={post}/>
            </div>
          </Route>
          <Route exact path='/contactus'>
            <ContactUs/>
          </Route>
          <Route exact path='/blogs'>
          <div style={{marginTop: '50px', display:'flex', justifyContent:'center'}}>
            <Blog/>
          </div>
          </Route>
        </Switch> 
    </Router>
  );
}

// function App2() {
//   const appBarHeight = 120;
//   const post = {
//     title: 'About the principal',
//     date: 'Dr. DayaRam Ghimire',
//     description: 'Graduated from Yale University, Dr. Ghimire has 25 years of experience in teaching in both national and international schools. Being the pioneer in the field, Ghimire was awarded for bringing best in students by Internation Teachers Association in 1996.',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Claude_Dauphin%2C_CEO_Trafigura.jpg'
//   }
//   return (
//     <div>
//       <AppBar logo='https://www.nu.edu/wp-content/uploads/2018/12/national-univeristy-full-logo1.jpg?fit=1200%2C630' />
//       <CarouselDiv startHeight={appBarHeight}>
//         <CustomCarousel />
//       </CarouselDiv>
//       <CustomBody startHeight={appBarHeight}>
//         <Grid container justify='center'>
//           <Grid item md={12} sm={12} lg={10}>
//             <Grid container justify='space-around'>
//               <Cards image={outsideClassroom} />
//               <Cards image={quiz} />
//               <Cards image={award} />
//               <Cards image={balance} />
//               <Cards image={fun} />
//               <Cards image={quiz} />
//               <Cards image={balance} />
//               <Cards image={outsideClassroom} />
//               <Cards image={quiz} />
//               <Cards image={award} />
//               <Cards image={balance} />
//               <Cards image={fun} />
//               <Cards image={quiz} />
//               <Cards image={balance} />
//             </Grid>
//           </Grid>
//         </Grid>
//       </CustomBody>
//     </div>
//   );
// }

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