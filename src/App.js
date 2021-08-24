import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import quiz from './assets/quiz.jpg';
import logo from './assets/logo.jpg';

import CustomCarousel from './components/CustomCarousel';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';

import AppBar from './components/AppBar';


import {createGlobalStyle} from 'styled-components';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AriticlePage from './pages/ArticlePage';
import Faculty from './pages/Faculty';

import Footer from './views/FooterView';
import ScrollToTop from './components/ScrollToTop';

// import createBrowserHistory from 'history/createBrowserHistory';
import axios from  'axios';

import FaqPage from './pages/FaqPage';
import StoryPage from './pages/StoryPage';

import mask1 from './assets/mask1.png';
import mask2 from './assets/mask2.png';
import mask3 from './assets/mask3.png';
import mask4 from './assets/mask4.png';
import mask5 from './assets/mask5.png';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import BookIcon from '@material-ui/icons/Book';

import {MAJOR_FONT, SUBSIDING_FONT} from './constants';
import { Avatar } from '@material-ui/core';
import FaqSchedule from './views/FaqSchedule';
import MissionPage from './pages/MissionPage';

// import aos from 'aos';
// import 'aos/dist/aos.css';

const appBarHeight = 120;


const api = axios.create({
  baseURL: 'https://prasar-backend.herokuapp.com/record'
});

function NavTest({appBarHeight}){
  return <>
      <AppBar logo={logo} />
        <CarouselDiv startHeight={appBarHeight-20}>
          {/* <CustomCarousel /> */}
        </CarouselDiv>
  </>;
}

const faqs2 = [

  {
    tab:'Education',
    icon: <BookIcon/>,
    content:[
      {
        question: 'What is unique about your school?',
        answer:
            <>
              <p>
                Our curriculum brings <b>science</b>, <b>maths</b>,<b>arts</b>,<b>humanities</b> and  
                <b> langugage arts</b> to students. We believe that all disciplines are interrelated and that is what
                our students have to deal in their professional life. <br/> Our curriculum engages students' head and 
                hand in such a way that they start to develop a love for learning and enough confident to learn anything 
                on their own.
              </p>
            </>
      },
      {
        question:'What is the teachers to students ratio?',
      answer: <>
              <FaqSchedule/>
               </>
              
      },
      {
        question:'What is the average class size?',
        answer: 'We have maximum of 20 students upto grade 5. And we have 28 students at max above grade 5.'
      },
      {
        question: 'Can I enroll my child in the middle of the session?',
        answer: '<b><i style="color:red">It depends.</i></b> If you child read below <b>grade 5</b> than take certain tests to see if your child can attend that grade. If he or she passes the test with <b>60%</b> marks we can enroll your child even in the middle of the session.'
      },
      {
        question:'Will my one child get scholarship if I enroll my three children?',
        answer:'No, you will have to pay fees of all children irrespective of how many children you enroll for the class.<ul><li style="marginLeft:40px;">1. <span style="fontSize:30px">&#x2713 </span>Take your child to the classroom</li><li style="marginLeft:40px;">2. Take your child again to the classroom</li></ul>'
      },
      {
        question:'How much does a school charge as an admission fee?',
        answer:'It depends upon the grade. Please call our school to know the details. Our contact number can be obtained from the Contact Us page.'
      },
      {
        question:'Is school enrolling students even during pandemic?',
        answer:'Yes. We conduct virtual classes to students.'
      },

    ]
  },

  {
    tab: 'Admission',
    icon: <GroupAddIcon/>,
    content:[
      {
        question: 'Do you have extra-curricular activities in your school?',
        answer: 'We conduct 15 different extra-curricular activities every week. All of these activities happens twice a week. To know more about the details of the activites please see our extra-curricular page.'
      },
    ]
  },

  {
    tab: 'Activities',
    icon: <SportsBaseballIcon/>,
    content:[
      {
        question: 'Do you have transportation facility in your school?',
        answer: 'Yes, our bus travels in almost all part of pokhara. Please navigate to bus route option to see all available route options in google map.'
      },
      {
        question: 'Do you also take students out for swimming?',
        answer: 'Our school has three swimming pools. It is compulsory for every children to participate in the activity unless they have any physical condition.'
      }
    ]
  },
  {
    tab: 'Transportation',
    icon: <AirportShuttleIcon/>,
    content:[
      {
        question: 'Do you have transportation facility in your school?',
        answer: 'Yes, our bus travels in almost all part of pokhara. Please navigate to bus route option to see all available route options in google map.'
      },
      {
        question: 'Do you also take students out for swimming?',
        answer: 'Our school has three swimming pools. It is compulsory for every children to participate in the activity unless they have any physical condition.'
      }
    ]
  },
  {
    tab: 'Food',
    icon: <LocalDiningIcon/>,
    content:[
      {
        question: 'Do you have transportation facility in your school?',
        answer: 'Yes, our bus travels in almost all part of pokhara. Please navigate to bus route option to see all available route options in google map.'
      },
      {
        question: 'Do you also take students out for swimming?',
        answer: 'Our school has three swimming pools. It is compulsory for every children to participate in the activity unless they have any physical condition.'
      }
    ]
  },
  {
    tab: 'Facilities',
    icon: <WbIncandescentIcon/>,
    content:[
      {
        question: 'Do you have transportation facility in your school?',
        answer: 'Yes, our bus travels in almost all part of pokhara. Please navigate to bus route option to see all available route options in google map.'
      },
      {
        question: 'Do you also take students out for swimming?',
        answer: 'Our school has three swimming pools. It is compulsory for every children to participate in the activity unless they have any physical condition.'
      }
    ]
  },
];

function App() {
  const post = {
    title: 'About the principal',
    date: 'Dr. DayaRam Ghimire',
    description: 'Graduated from Yale University, Dr. Ghimire has 25 years of experience in teaching in both national and international schools. Being the pioneer in the field, Ghimire was awarded for bringing best in students by Internation Teachers Association in 1996.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Claude_Dauphin%2C_CEO_Trafigura.jpg'
  }
  const post2 = {
    title: 'About the Co-ordinator',
    date: 'Dr. Bishehwor Rana',
    description: 'Graduated from Yale University, Dr. Ghimire has 25 years of experience in teaching in both national and international schools. Being the pioneer in the field, Ghimire was awarded for bringing best in students by Internation Teachers Association in 1996.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Claude_Dauphin%2C_CEO_Trafigura.jpg'
  }
  const testimonials = [
    {
      name: 'Roshan Bhatta',
      image: mask5,
      designation: 'Teacher',
      content: 'I have been teaching since last 25 years. I have taught in 5 schools in 5 years. And later when I shifted to this school, I am still hear since last 20 years. This is the best school I have ever been to in terms of my growth and also in terms of education for your child.' 
    },
    {
      name: 'Sumita Shrestha',
      image: mask4,
      designation: 'Grade 9 Student',
      content: 'Hello what is going on here are you ready to rock. I studied in this school since grade 1. Whatever I am today is all because of this school. This school has taught me to become more confident in my life.' 
    },
    {
      name: 'Dhan Bd. Rana',
      image: mask1,
      designation: 'Grade 7 Student',
      content: 'मेरो नाम धन बहादुर राणा हो । म यो बिद्यालयमा सानै देखी पढ्एको हो । यस बिद्यालयले मलाई जिवन्मा सफल हुन सिकएको छ । ' 
    },
    {
      name: 'Rahul Raj Shah',
      image: mask2,
      designation: 'Web Developer',
      content: 'I am going to tell you something that is not going to be part of this page' 
    },
    {
      name: 'Shyam Chettri',
      image: mask3,
      designation: 'Marketing Manger',
      // eslint-disable-next-line no-multi-str
      content: 'I studied in this school since grade 1. Whatever I am today is all because of this school. \
                    This school has taught me to become more confident in my life. And today I run my own company \
                    which caters educational needs of hundreds of schools all over Nepal.'
    }
  ];

  const [blog,setBlog] = useState([]);
  const tblog = []

  // useEffect(()=>{
  //   aos.init({duration:2000});
  // },[])

  useEffect(() => {
    api.get('/').then(res=>{
      // console.log(res.data);
      res.data.forEach(element => {
        tblog.push({
          id:element._id,
          image:quiz,
          title: element.title,
          content: element.blog 
        })
      });
      setBlog(...blog,tblog);
    })
  },[])
  
  return (
    <Router>
        <GlobalStyle/>
        <ScrollToTop/>
        <NavTest appBarHeight={appBarHeight}/>
        <Switch>
          <Route exact path='/' >
            <CustomCarousel/>
            <HomePage testimonials={testimonials}/>
          </Route>
          <Route path='/about'>
            <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
              <About post={post}/>
            </div>
            <div style={{display:'flex', justifyContent:'center', marginTop:'100px'}}>
              <About post={post2}/>
            </div>
          </Route>
          <Route exact path='/contactus'>
            <ContactUs/>
            {/* <ScrollingView/> */}
          </Route>
           <Route exact path='/blogs'>
            <BlogPage BlogThumbnailDetails={blog}/>
          </Route>
          {/* <Route exact path='/blogs'>
            <BlogPage BlogThumbnailDetails={blog}/>
          </Route>  */}
          <Route exact path='/mission' >
            <MissionPage/>
          </Route>
          <Route exact path='/faculty'>
            <Faculty/>
          </Route>
          <Route exact path='/ourstory'>
            <StoryPage />
          </Route>
          <Route exact path='/faq'>
            <FaqPage faqs={faqs2}/>
          </Route>
          <Route path='/:id'>
            <AriticlePage/>
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
    background: rgb(255,255,255);
    overflow-x:hidden;
  }
`;