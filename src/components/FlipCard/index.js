import {useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import styled from 'styled-components';
import {useState} from 'react';
import './styles.scss';

import aos from 'aos';
import 'aos/dist/aos.css';

import Principal from '../../assets/principal.jpg';
import { IconButton } from '@material-ui/core';

const FlipCard = ({name,designation,image,description}) =>{
    const [flip,setFlip] = useState(false);

  useEffect(()=>{
    aos.init({duration:2000});
  },[])

    return (
        <div data-aos="fade-up">
            <div className='cardholder'>
                <Cdiv className='card' flip={flip}>
                    <div className='front-face'>
                            <div className='cover'>
                                <div className='arrowkey'>
                                    <KeyboardArrowRightIcon onClick={()=>setFlip(prev=>!prev)} />
                                </div>
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

                    <div className='back-face'>
                        <div className='arrowkey'>
                            <KeyboardArrowLeftIcon onClick={()=>setFlip(prev=>!prev)} />
                        </div>
                        <div className='paragraph'>
                            <p>{description}</p>
                        </div>
                        <div className='social-media'>
                            <a href='https://facebook.com'><FacebookIcon className='media-icon-facebook'/></a>
                            <a href='https://youtube.com'><YouTubeIcon className='media-icon-youtube'/></a>
                            <a href='https://twitter.com'><TwitterIcon className='media-icon-twitter'/></a>
                        </div>
                        {/* <p>Hello everyone</p> */}

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