
import Avatar from '@material-ui/core/Avatar';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import styled from 'styled-components';
import {useState} from 'react';
import './styles.scss';

import Principal from '../../assets/principal.jpg';

const FlipCard = ({name,designation,image}) =>{
    const [flip,setFlip] = useState(false);

    return (
        <div>
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
                        <p>Hey My name is Roshan. I came here as <a href='google.com'>google</a> an English Teacher but later started teaching Mathematics as well.</p>
                        <div className='back-footer'>
                            <a href=''><FacebookIcon className='icon-footer'/></a>
                            <a href=''><TwitterIcon className='icon-footer'/></a>
                            <a href=''><YouTubeIcon className='icon-footer'/></a>
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