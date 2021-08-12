import Grid from '@material-ui/core/Grid';
import FlipCard from "../../components/FlipCard";
import CoverPhoto from '../../components/CoverPhoto';
import WindowDimension from "../../components/WindowDimension";

import FacultyPhoto from '../../assets/faculty.jpeg';
import PrincipalPhoto from '../../assets/principal.jpg';
import MathTeacher from '../../assets/mathteacher.jpg';

const facultyDetails = [
    {
        name: 'Roshan Bhatta',
        designation: 'teacher',
        image: PrincipalPhoto
    },
    {
        name: 'Nirmala Bhatta',
        designation: 'RD TEACHER',
        image: MathTeacher
    },
    {
        name: 'Roshan Bhatta',
        designation: 'teacher',
        image: PrincipalPhoto
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
                                    console.log(detail.name);
                                    return (
                                        <FlipCard key={index} id={index} 
                                                  name={detail.name}
                                                  designation={detail.designation}
                                                  image={detail.image}
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