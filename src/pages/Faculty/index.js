import Grid from '@material-ui/core/Grid';
import FlipCard from "../../components/FlipCard";
import CoverPhoto from '../../components/CoverPhoto';
import WindowDimension from "../../components/WindowDimension";

import FacultyPhoto from '../../assets/faculty.jpeg';
import PrincipalPhoto from '../../assets/principal.jpg';
import MathTeacher from '../../assets/mathteacher.jpg';
import ECAInCharge from '../../assets/ECAInCharge.jpg';
import DanceTeacher from '../../assets/DanceTeacher.jpg';
import FinanceTeacher from '../../assets/FinanceTeacher.jpg';
import ComputerTeacher from '../../assets/ComputerTeacher.jpg';

import aos from 'aos';
import 'aos/dist/aos.css';

const facultyDetails = [
    {
        name: 'Roshan Bhatta',
        designation: 'JUNIOR SCIENCE TEACHER',
        image: PrincipalPhoto,
        description: 'Roshan completed his bachelors in 2012. He started his teaching career as a STEAM teacher. He has taught over 40 schools with more than 10 years of experience. At Dhawalagiri, he focuses on making science hands-on to students.'
    },
    {
        name: 'Sunita Giri',
        designation: 'SENIOR MATH TEACHER',
        image: MathTeacher
    },
    {
        name: 'Ram Pd. Sapkota',
        designation: 'FINANCE HEAD',
        image: FinanceTeacher
    },
    {
        name: 'Lok Bahadur Chettri',
        designation: 'KATHHAK DANCE INSTRUCTOR',
        image: DanceTeacher
    },
    {
        name: 'Sumitra Devi Amgain',
        designation: 'ECA IN-CHARGE',
        image: ECAInCharge
    },
    {
        name: 'Rahul Raj Shah',
        designation: 'SENIOR COMPUTER TEACHER',
        image: ComputerTeacher
    }
]

const Faculty = () =>{
  const screen = WindowDimension();
    return (
        <div>
             <CoverPhoto 
                image={FacultyPhoto} 
                height={500*(screen.width/1920)<200?200:500*(screen.width/1920)}
                title="FACULTY MEMBERS">
                </CoverPhoto>
                 <Grid container justify='center'>
                    <Grid item md={12} sm={10} lg={10} xs={11}>
                        <Grid container justify='space-around'>
                            {
                                facultyDetails.map((detail,index)=>{
                                    return (
                                        <FlipCard key={index} id={index} 
                                                  name={detail.name}
                                                  designation={detail.designation}
                                                  image={detail.image}
                                                  description={detail.description}
                                                  />
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>
        </div>
    );
}

export default Faculty;