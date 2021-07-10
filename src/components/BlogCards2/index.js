import ShareIcon from '@material-ui/icons/Share';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import './styles.scss';
import { Avatar } from '@material-ui/core';

function Cards({image,title,content,id}) {

  return (
    <div>
      <div className="blogcard">
          <img src={image} alt='' className="img-container"/>
          <span className="share-btn"><i className="fa"><ShareIcon style={{fontSize:'30px'}}/></i></span>
          <div className="post-text">
			<div className="post-meta">
				<span className="post-category">Primary Teacher</span>
				<i className="fa fa-circle-o"><RadioButtonUncheckedIcon style={{fontSize:'6px'}}/></i>
				<span className="post-date"><i className="fa fa-calendar"><CalendarTodayIcon style={{fontSize:'15px'}}/>
          </i>March 2<sup>nd</sup>
        </span>
			</div>
			<h3 className="post-title">
            {title && title.slice(0,30)}
            {title && title.length>35 && <span> ....</span>} 
      </h3>
			<p className="post-desc">
        {content  && content.slice(0,65)} .....
      </p>
		</div>
    <div className="author-container">
      <Avatar>R</Avatar>
      <p>by <span className="author-name">Roshan Bhatta</span></p>
		</div>
      </div>
    </div>
  );
}

export default Cards;
