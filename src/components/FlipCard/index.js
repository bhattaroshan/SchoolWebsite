import {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import styled, {css, keyframes} from 'styled-components';
import {useState} from 'react';
import './styles.scss';


import Principal from '../../assets/principal.jpg';
import { IconButton } from '@material-ui/core';

const FlipCard = ({name,designation,image,description,background}) =>{
    const [flip,setFlip] = useState(false);

    return (
        <div>
            <div className='cardholder'>
                <Cdiv className='card' flip={flip} onMouseOver={()=>setFlip(true)} onMouseLeave={()=>setFlip(false)}>
                    <div flip={flip} className='front-face'>
                            <div className='cover'>
                                {/* <CFrontArrowdiv flip={flip} pumpArrow={pumpArrow} 
                                            className='arrowkey'>
                                    <KeyboardArrowRightIcon onClick={()=>setFlip(true)} />
                                </CFrontArrowdiv> */}
                                {background && <img src={background}/>}
                            </div>
                            <div className='content'>
                                <div className='avatar'> 
                                    <div classname='circle'/>
                                    <img src={image}/> 
                                </div>
                                <p className='name'>{name}</p>
                                <p className='designation'>{designation}</p>
                                <div className='separator'/>
                            </div>

                        </div>

                    <div flip={flip} className='back-face'>
                        {/* <div className='arrowkey'>
                            <KeyboardArrowLeftIcon onClick={()=>setFlip(false)} />
                        </div> */}
                        <div className='paragraph'>
                            <p>{description}</p>
                        </div>
                        <div className='social-media'>
                            <a href='https://facebook.com'><FacebookIcon className='media-icon-facebook'/></a>
                            <a href='https://youtube.com'><YouTubeIcon className='media-icon-youtube'/></a>
                            <a href='https://twitter.com'><TwitterIcon className='media-icon-twitter'/></a>
                        </div>
                    </div>
                </Cdiv>
            </div>
        </div>
    );
}

export default FlipCard;

const Cdiv = styled.div`
    transform: ${props=>props.flip?"rotateY(180deg)":""};
`;

const PumpArrow = keyframes`
  0%{
    transform: scale(2);
  }
  33%{
    transform: scale(1);
  }
  66%{
    transform: scale(2);
  }

  100%{
    transform: scale(1);
  }
`;

const CFrontArrowdiv = styled.div`
    /* animation-name: ${props=>{
        if((props.pumpArrow!==false && props.flip===false)){
            return css`${PumpArrow}`;
        }
        else
            return '';

    }};
    animation-duration: 0.4s;
    animation-timing-function: ease-in;
    animation-fill-mode: both;
    cursor: ${props=>props.flip?"default":"pointer"}; */
`; 
