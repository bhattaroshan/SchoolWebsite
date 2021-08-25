import {useRef,useState} from 'react';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Draggable from 'react-draggable';
import styled from 'styled-components';

import './style.scss';

import im1 from '../../assets/photo1.jpg';
import im2 from '../../assets/photo2.jpg';
import im3 from '../../assets/photo5.jpg';
import { Translate } from '@material-ui/icons';

const timelinemap = [
    {year:1990,image:im1,title:'My title',content:'My content'},
    {year:1994,image:im2,title:'My title',content:'My content'},
    {year:1996,image:im3,title:'My title',content:'My content'},
    {year:1998,image:im1,title:'My title',content:'My content'},
    {year:2000,image:im2,title:'My title',content:'My content'},
    {year:2001,image:im3,title:'My title',content:'My content'},
    {year:2004,image:im1,title:'My title',content:'My content'},
    {year:2006,image:im2,title:'My title',content:'My content'},
    {year:2008,image:im3,title:'My title',content:'My content'},
    {year:2010,image:im1,title:'My title',content:'My content'},
    {year:2011,image:im2,title:'My title',content:'My content'},
    {year:2012,image:im3,title:'My title',content:'My content'},
    {year:2013,image:im1,title:'My title',content:'My content'},
    {year:2014,image:im2,title:'My title',content:'My content'},
    {year:2015,image:im3,title:'My title',content:'My content'},
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
    const storyRef = useRef();
    const [position,setPosition] = useState({x:0,y:0});
    const [moveToOrigin,setMoveToOrigin] = useState(false);

    const [hightlightYear,setHighlightYear] = useState(1);

    const handleYearClick = (index) =>{
        setHighlightYear(index+1);
        storyRef.current.style.transform=`translate(${-index*100}%,0)`;
        // storyRef.current.style.transform=`translate(${-index*1080}px,0)`;
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
                                    return <Sspan href='#' key={index} id={index} highlight={hightlightYear}
                                            onClick={()=>handleYearClick(index)} 
                                            onTouchStart={()=>handleYearClick(index)} 
                                           >
                                                {elem.year}
                                        </Sspan>
                                })
                            }

                    </Sdiv>
                </Draggable>
            </div>
            <div className='story-content'>
                    <p>{timelinemap[hightlightYear-1].year}</p>
                    <div className='story-content-details' ref={storyRef}>
                            {
                                timelinemap.map((elem,index)=>{
                                    return <> 
                                                <img src={elem.image} />
                                           </>
                                           
                                })
                            }
                    </div>
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