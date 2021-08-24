import {useRef,useState} from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Draggable from 'react-draggable';
import styled from 'styled-components';

import './style.scss';

import im1 from '../../assets/photo1.jpg';
import im2 from '../../assets/photo2.jpg';
import im3 from '../../assets/photo5.jpg';

const timelinemap = [
    {year:'1'},
    {year:'2'},
    {year:'3'},
    {year:'4'},
    {year:'5'},
    {year:'6'},
    {year:'7'},
    {year:'8'},
    {year:'9'},
    {year:'10'},
    {year:'11'},
    {year:'12'},
    {year:'13'},
    {year:'14'},
    {year:'15'},
    {year:'16'},
    {year:'17'},
    {year:'18'},
    {year:'19'},
    {year:'19'},
    {year:'20'},
    {year:'21'},
    {year:'22'},
    {year:'23'},
]

const story = [
    {
        year: '1979',
        details : [
            {
                image: im1,
                title: 'Image 1',
                content: 'This is details of Image 1'
            },
            {
                image: im2,
                title: 'Image 2',
                content: 'This is details of Image 2'

            },
            {
                image: im3,
                title: 'Image 3',
                content: 'This is details of Image 3'

            },
        ]
    },
    {
        year: 1990,
        details: [
            {
                image: im1,
                title: 'Image 4',
                content: 'This is details of Image 4'
            }
        ]
    }
];

const StoryPage = () =>{
    const divRef = useRef();
    const yearRef = useRef();
    const [dragDisable,setDragDisable] = useState(false);
    const [position,setPosition] = useState({x:0,y:0});
    const [moveToOrigin,setMoveToOrigin] = useState(false);

    const handleYearClick = (index) =>{
        yearRef.current.backgroundColor = 'red';
    }

    const handleStop = ()=>{
        const divLeft = divRef.current.getBoundingClientRect().left;
        const yearLeft =yearRef.current.getBoundingClientRect().left;
        if(yearLeft>divLeft){
            setMoveToOrigin(true);
        }else{
        }
    }

    const handleDrag = (e,data) =>{
        console.log('drag detected');
        const divLeft = divRef.current.getBoundingClientRect().left;
        const yearLeft =yearRef.current.getBoundingClientRect().left;
        // console.log(res);
        if(yearLeft>divLeft){
            setPosition({x:0,y:0});
        }else{
            setPosition({x:data.x,y:0});
            setMoveToOrigin(false);
        }
        console.log('div left = ',divLeft);
        console.log('year left = ',yearLeft);
    }

    return (
        <div className='story-container'>
            <div className='story-timeline' ref={divRef}>
                <Draggable axis='x' onDrag={handleDrag} onStop={handleStop} position={position}>
                    <Sdiv className='story-timeline-container' ref={yearRef} moveToOrigin={moveToOrigin}>
                            {
                                timelinemap.map((elem,index)=>{
                                    return <span key={index} id={index} onClick={()=>handleYearClick(index)}>
                                                {elem.year}
                                        </span>
                                })
                            }

                    </Sdiv>
                </Draggable>
            </div>
            <div className='story-content'>
                <img src={im1}/>
            </div>
        </div>
    );
}

export default StoryPage;

const Sdiv = styled.div`
    transition: ${props=>props.moveToOrigin?'all 0.5s ease':'none'};
`;