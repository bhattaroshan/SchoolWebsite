
import { createRef, useEffect, useRef, useState} from 'react';

import WindowDimension from '../WindowDimension';
import './style.scss';

const Cover = (props) =>{

    const screen = WindowDimension();
    const maxHeight = 600;
    const minHeight = 400;
    const height = maxHeight*(screen.width/1920)<minHeight?minHeight:maxHeight*(screen.width/1920);
    const [timeCounter,setTimeCounter] = useState(0);
    const myRef = props.data.map((obj,index)=>createRef());
    const myTitleRef = props.data.map((obj,index)=>createRef());
    const [itemCounter,setItemCounter] = useState(0);
    const [prevItemCounter,setPrevItemCounter] = useState(0);

    const getCurrentFrame = () =>{
        return itemCounter;
    }

    const getNextFrame = () =>{
        if(itemCounter+1<props.data.length)
            return itemCounter+1;
        return 0;
    }

    const getPreviousFrame = () =>{
        if(itemCounter-1>0)
            return itemCounter-1;
        return props.data.length-1;
    }

    useEffect(()=>{
        myRef[0].current.style.opacity=1;
        myTitleRef[0].current.style.opacity=1;
        myTitleRef[0].current.style.transform='translateY(0)';
    },[])

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(myRef[itemCounter].current){

                myRef[getCurrentFrame()].current.style.opacity=0;
                myRef[getNextFrame()].current.style.opacity=1;

                if(myTitleRef[itemCounter].current){
                    myTitleRef[getCurrentFrame()].current.style.opacity=0;
                    myTitleRef[getCurrentFrame()].current.style.transform='translateY(100px)';

                    myTitleRef[getNextFrame()].current.style.opacity=1;
                    myTitleRef[getNextFrame()].current.style.transform='translateY(0)';
                }
            }
            if(itemCounter<props.data.length-1){
                setItemCounter(prev=>prev+1);
            }else{
                setItemCounter(0);
            }

        },5000);
        return ()=>clearInterval(timer);
    })

    return (
        <div className='carousel-container' style={{height:`${height}px`}}>
            {
                props.data.map((obj,index)=>{
                    return <img key={index} id={index} src={obj.image} style={{height:`${height}px`}} ref={myRef[index]} key={index} id={index}/>
                })
            }
            {
                props.data.map((obj,index)=>{
                    return <p className='carousel-photo-title' ref={myTitleRef[index]} key={index} id={index}>{obj.title}</p>
                           
                })
            }
        </div>
    );
}

export default Cover;