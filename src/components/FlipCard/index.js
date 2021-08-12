
import Avatar from '@material-ui/core/Avatar';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

import styled from 'styled-components';
import {useState} from 'react';
import './styles.scss';

import Principal from '../../assets/principal.jpg';

const FlipCard = ({name,designation,image}) =>{
    const [flip,setFlip] = useState(false);

    const handleClick = () =>{
       setFlip(prev=>!prev);
    }

    return (
        <div>
            <div className='cardholder'>
                <Cdiv className='card' flip={flip}>
                    <div className='front-face'>
                            <div className='cover'>
                                <div className='arrowkey'>
                                    <KeyboardArrowRightIcon onClick={handleClick} />
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
                            <KeyboardArrowRightIcon onClick={handleClick} />
                        </div>
                        <div className='footer'>
                            <FacebookIcon className='spacing'/>
                            <TwitterIcon className='spacing'/>
                            <YouTubeIcon className='spacing'/>
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