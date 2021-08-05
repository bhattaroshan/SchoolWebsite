
import styled from 'styled-components';
import WindowDimension from '../../components/WindowDimension';

import pic from '../../assets/principal.jpg';
import { MAJOR_FONT } from '../../constants';

const MissionPage = () =>{

    const windowSize = WindowDimension();

    return (
        <div style={{paddingTop:'50px', paddingBottom:'180px', marginLeft: '100px'}}>
            <BackColor width={windowSize.width} height={windowSize.height}>
                <Picture image={pic}>
                    <CDivision>
                        <CLabel>
                            DayaChand Regmi<br/>Principal, Dhawalagiri
                        </CLabel>
                    </CDivision>
                </Picture>
            </BackColor>
        </div>
    );
}

export default MissionPage;

const BackColor = styled.div`
    position:relative;
    width: ${props=>(35*props.width/100)}px;
    height: ${props=>(50*props.height/100)}px;
    min-width: 350px;
    min-height: 300px;
    background-color: rgb(168,193,188);
    box-shadow: 10px 10px 10px 5px rgba(0,0,0,0.3);
`;

const Picture = styled.div`
    position:absolute;
    top:12%;
    left:10%;
    width: 100%;
    height: 120%;
    background-size:cover;
    background-image: url(${props=>props.image});
    box-shadow: 5px 5px 10px 5px rgba(0,0,0,0.2);
`;

const CDivision = styled.div`
    position:absolute;
    right:-10%;
    bottom:5%;
    width: 80%;
    padding-top:10px;
    padding-bottom:10px;
    /* text-align: center; */
    background-color:rgb(50,50,50);
    opacity: 0.8;
`;

const CLabel = styled.p`
    font-size:20px;
    font-family: ${MAJOR_FONT};
    /* font-weight: bold; */
    color:white;
    line-height: 40px;
    padding-left:30px;
`;