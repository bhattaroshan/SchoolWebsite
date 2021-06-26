import {useState, useEffect} from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import outsideClassroom from './assets/outsideClassroom.jpg';
import fun from './assets/fun.jpg';
import balance from './assets/balance.jpg';
import award from './assets/award.jpg';
import quiz from './assets/quiz.jpg';
import logo from './assets/logo.jpg';
import blog1 from './assets/blog1.jpg';

import CustomCarousel from './components/CustomCarousel';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';

import AppBar from './components/AppBar';


import {createGlobalStyle} from 'styled-components';

import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';


import Footer from './views/FooterView';
import ScrollToTop from './components/ScrollToTop';

// import createBrowserHistory from 'history/createBrowserHistory';
import axios from  'axios';
import Faq from './components/Faq';

import ScrollTab from './components/ScrollTab';
import FaqPage from './pages/FaqPage';


import mask1 from './assets/mask1.png';
import mask2 from './assets/mask2.png';
import mask3 from './assets/mask3.png';
import mask4 from './assets/mask4.png';
import mask5 from './assets/mask5.png';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const appBarHeight = 120;


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

const faqs2 = [

  {
    tab:'Admission',
    icon: <GroupAddIcon/>,
    content:[
      {
        question: 'Can I enroll my child in the middle of the session?',
        answer: 'It depends. If you child read below grade 5 than we take certain tests to see if your child can attend that grade. If he or she passes the test with 60% marks we can enroll your child even in the middle of the session.'
      },
      {
        question:'Will my one child get scholarship if I enroll my three children?',
        answer:'No, you will have to pay fees of all children irrespective of how many children you enroll for the class.'
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
    tab: 'Activities',
    icon: <SportsBaseballIcon/>,
    content:[
      {
        question: 'Do you have extra-curricular activities in your school?',
        answer: 'We conduct 15 different extra-curricular activities every week. All of these activities happens twice a week. To know more about the details of the activites please see our extra-curricular page.'
      },
    ]
  },

  {
    tab: 'Facilities',
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
  }

];

const faqs = [
  {
    question: 'Where is your school located?',
    answer: 'Our school is located to the right side of the junction that separates Pokhara from Baglunj'
  },
  {
    question: 'Do you have extra-curricular activities in your school?',
    answer: 'We conduct 15 different extra-curricular activities every week. All of these activities happens twice a week. To know more about the details of the activites please see our extra-curricular page.'
  },
  {
    question: 'Can I enroll my child in the middle of the session?',
    answer: 'It depends. If you child read below grade 5 than we take certain tests to see if your child can attend that grade. If he or she passes the test with 60% marks we can enroll your child even in the middle of the session.'
  },
  {
    question: 'Can my child participate in any activities conducted by the school?',
    answer: 'Absolutely. If you child is interested and wants to try any activities organized by the school that is open for children, they can participate.'
  },
  {
    question: 'Can I enroll my child in the middle of the session?',
    answer: 'It depends. If you child read below grade 5 than we take certain tests to see if your child can attend that grade. If he or she passes the test with 60% marks we can enroll your child even in the middle of the session.'
  },
  {
    question: 'Can my child participate in any activities conducted by the school?',
    answer: 'Absolutely. If you child is interested and wants to try any activities organized by the school that is open for children, they can participate.'
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
      content: 'Hello what is going on here are you ready to rock. I studied in this school since grade 1. \
                Whatever I am today is all because of this school. \
                    This school has taught me to become more confident in my life.' 
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
            {/* <BlogPage BlogThumbnailDetails={BlogThumbnailDetails}/> */}
            <BlogPage BlogThumbnailDetails={blog}/>
          </Route>
          <Route exact path='/football'>
            <div style={{marginTop: '50px', display:'flex', justifyContent:'center'}}>
              <Blog/>
            </div>
          </Route>
          <Route exact path='/faq'>
            <FaqPage faqs={faqs2}/>
          </Route>
          <Route path='/:id'>
            <Blog/>
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
  }
`;