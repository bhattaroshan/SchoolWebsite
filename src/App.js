import {useEffect} from 'react';
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

import AppBar from './components/AppBar';


import {createGlobalStyle} from 'styled-components';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';

import ScrollingView from './views/ScrollingView';

import Footer from './views/FooterView';
import ScrollToTop from './components/ScrollToTop';

// import createBrowserHistory from 'history/createBrowserHistory';
import axios from  'axios';

const appBarHeight = 120;

const BlogThumbnailDetails = [
  {
    image: outsideClassroom,
    title: 'students working with water',
    content: 'Students exploring how to read and write using water bucket and pumps. Everyone is excited to be outside the class'
  },
  {
    image: fun,
    title: 'someone is ready for holi',
    content: '+2 students getting ready to rock during the festival'
  },
  {
    image: balance,
    title: 'children playing football',
    content: '+2 students getting ready to rock during the festival'
  },
  {
    image: award,
    title: 'our students got award',
    content: '+2 students getting ready to rock during the festival'
  },
  {
    image: quiz,
    title: 'Students practicing for upcoming test',
    content: '+2 students getting ready to rock during the festival'

  },
  {
    image: blog1,
    title: 'Students practicing for upcoming test',
    content: '+2 students getting ready to rock during the festival'
  },
  {
    image: award,
    title: 'Students practicing for upcoming test',
    content: '+2 students getting ready to rock during the festival'
  },
  {
    image: quiz,
    title: 'Students practicing for upcoming test',
    content: '+2 students getting ready to rock during the festival'
  }
];


const api = axios.create({
  baseURL: 'https://prasar-backend.herokuapp.com/record'
});

function NavTest({appBarHeight}){
  return <>
      <AppBar logo={logo} />
        <CarouselDiv startHeight={appBarHeight-20}>
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
      name: 'Roshan Bhatta',
      image: 'https://www.healthshots.com/wp-content/uploads/2020/11/toxic-person-quiz.jpg',
      designation: 'Teacher',
      content: 'Hello what is going on here are you ready to rock' 
    },
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

  const blog = [];

  useEffect(() => {
    api.get('/').then(res=>{
      // console.log(res.data);
      res.data.forEach(element => {
        blog.push({
          image:quiz,
          title: element.title,
          content: element.blog 
        })
      });
    })
  })

  return (
    <Router>
        <GlobalStyle/>
        <ScrollToTop/>
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
            {/* <ScrollingView/> */}
          </Route>
          <Route exact path='/blogs'>
            {/* <BlogPage BlogThumbnailDetails={BlogThumbnailDetails}/> */}
            <BlogPage BlogThumbnailDetails={blog}/>
          </Route>
          <Route exact path='/football'>
            <div style={{marginTop: '50px', display:'flex', justifyContent:'center'}}>
              <Blog/>
            </div>
          </Route>
        </Switch> 
      <Footer/>
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


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  body{
		${'' /* background: linear-gradient(to bottom, rgb(180,220,180),rgb(255,255,255)); */}
    background: rgb(25,25,25);
  }
`;