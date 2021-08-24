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
    {year:'1990'},
    {year:'1994'},
    {year:'1996'},
    {year:'1998'},
    {year:'2000'},
    {year:'2001'},
    {year:'2004'},
    {year:'2006'},
    {year:'2008'},
    {year:'2010'},
    {year:'2011'},
    {year:'2012'},
    {year:'2013'},
    {year:'2014'},
    {year:'2015'},
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
    const [position,setPosition] = useState({x:0,y:0});
    const [moveToOrigin,setMoveToOrigin] = useState(false);

    const [hightlightYear,setHighlightYear] = useState(1);

    const handleYearClick = (index) =>{
        setHighlightYear(index+1);
    }

    const handleStop = ()=>{
        const divLeft = divRef.current.getBoundingClientRect().left;
        const divRight = divRef.current.getBoundingClientRect().right;
        const yearLeft =yearRef.current.getBoundingClientRect().left;
        const yearRight =yearRef.current.getBoundingClientRect().right;
        if(yearLeft>divLeft || yearRight<divRight){
            setMoveToOrigin(true);
        }

        
    }


    const handleDrag = (e,data) =>{
        const divLeft = divRef.current.getBoundingClientRect().left;
        const divRight = divRef.current.getBoundingClientRect().right;
        const yearLeft =yearRef.current.getBoundingClientRect().left;
        const yearRight =yearRef.current.getBoundingClientRect().right;

        const divWidth = divRight-divLeft;
        const yearWidth = yearRight-yearLeft;
        let rem = 0;
        if(divWidth>yearWidth){
            rem = divWidth-yearWidth;
        }

        if(yearLeft>divLeft){
            setPosition({x:0,y:0});
        }else if(yearRight<divRight){
            setPosition({x:divWidth-yearWidth-rem,y:0})
        }
        else{
            setPosition({x:data.x,y:0});
            setMoveToOrigin(false);
        }

    }

    return (
        <div className='story-container'>
            <div className='story-timeline' ref={divRef}>
                <Draggable axis='x' onDrag={handleDrag} onStop={handleStop} position={position}>
                    <Sdiv className='story-timeline-container' ref={yearRef} moveToOrigin={moveToOrigin}>
                            {
                                timelinemap.map((elem,index)=>{
                                    return <Sspan key={index} id={index} highlight={hightlightYear}
                                            onClick={()=>handleYearClick(index)}  
                                           >
                                                {elem.year}
                                        </Sspan>
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

const Sspan = styled.span`
    &:nth-child(${props=>props.highlight}){
        border-bottom: 3px solid black;
    }
`;