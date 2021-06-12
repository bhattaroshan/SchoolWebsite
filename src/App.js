import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import outsideClassroom from './assets/outsideClassroom.jpg';
import fun from './assets/fun.jpg';
import balance from './assets/balance.jpg';
import award from './assets/award.jpg';
import quiz from './assets/quiz.jpg';
import logo from './assets/logo.jpg';
import blog1 from './assets/blog1.jpg';

import Cards from './components/BlogCards';
import CustomCarousel from './components/CustomCarousel';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';

import Grid from '@material-ui/core/Grid';
import AppBar from './components/AppBar';

import Testimonial from './components/Testimonial';
import TestimonialView from './views/TestimonialView';
import { Typography } from '@material-ui/core';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

import './style.css';

// import createBrowserHistory from 'history/createBrowserHistory';

const appBarHeight = 120;

const BlogThumbnailDetails = [
  {
    image: outsideClassroom
  },
  {
    image: fun
  },
  {
    image: balance
  },
  {
    image: award
  },
  {
    image: quiz
  },
  {
    image: blog1
  },
  {
    image: award
  },
  {
    image: quiz
  }
];


function NavTest({appBarHeight}){
  return <>
      <AppBar logo={logo} />
        <CarouselDiv startHeight={appBarHeight}>
          <CustomCarousel />
        </CarouselDiv>
  </>;
}

function App() {
  const post = {
    title: 'About the principal',
    date: 'Dr. DayaRam Ghimire',
    description: 'Graduated from Yale University, Dr. Ghimire has 25 years of experience in teaching in both national and international schools. Being the pioneer in the field, Ghimire was awarded for bringing best in students by Internation Teachers Association in 1996.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Claude_Dauphin%2C_CEO_Trafigura.jpg'
  }

  const testimonials = [
    {
      name: 'Roshan Bhatta',
      image: 'https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg',
      designation: 'Teacher',
      content: 'Hello what is going on here are you ready to rock' 
    },
    {
      name: 'Rahul Raj Shah',
      image: 'https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg',
      designation: 'Web Developer',
      content: 'I am going to tell you something that is not going to be part of this page' 
    },
    {
      name: 'Shyam Chettri',
      image: 'https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg',
      designation: 'Marketing Manger',
      // eslint-disable-next-line no-multi-str
      content: 'I studied in this school since grade 1. Whatever I am today is all because of this school. \
                    This school has taught me to become more confident in my life. And today I run my own company \
                    which caters educational needs of hundreds of schools all over Nepal.'
    }
  ];

  return (
    <Router>
        <NavTest appBarHeight={appBarHeight}/>
        <Switch>
          <Route exact path='/' >
            <HomePage testimonials={testimonials}/>
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
            <BlogPage BlogThumbnailDetails={BlogThumbnailDetails}/>
          </Route>
          <Route exact path='/football'>
            <div style={{marginTop: '50px', display:'flex', justifyContent:'center'}}>
              <Blog/>
            </div>
          </Route>
        </Switch> 
    </Router>
  );
}


export default App;


const CarouselDiv = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${props => props.startHeight}px;
`;