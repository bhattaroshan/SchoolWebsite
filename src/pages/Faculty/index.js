
import FlipCard from "../../components/FlipCard";
import CoverPhoto from '../../components/CoverPhoto';
import WindowDimension from "../../components/WindowDimension";

import FacultyPhoto from '../../assets/faculty.jpeg';

const Faculty = () =>{
  const screen = WindowDimension();
    return (
        <div>
             <CoverPhoto 
                image={FacultyPhoto} 
                height={500*(screen.width/1920)<200?200:500*(screen.width/1920)}
                title="FACULTY MEMBERS">
                </CoverPhoto>
            <FlipCard/>
        </div>
    );
}

export default Faculty;