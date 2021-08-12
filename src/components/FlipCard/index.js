
import Avatar from '@material-ui/core/Avatar';

import './styles.scss';

import Principal from '../../assets/principal.jpg';

const FlipCard = () =>{
    return (
        <div>
            <div className='cardholder'>
                <div className='card'>
                    <div className='front-face'>
                            <div className='cover'>

                            </div>
                            <div className='content'>
                                <div className='avatar'> 
                                    <div classname='circle'/>
                                    <img src={Principal}/> 
                                </div>
                                <p className='name'>Roshan Bhatta</p>
                                <p className='designation'>SCIENCE TEACHER</p>
                                <div className='separator'/>
                            </div>

                        </div>

                    <div className='back-face'>
                        I am back face
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;