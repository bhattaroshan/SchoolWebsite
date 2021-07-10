import ShareIcon from '@material-ui/icons/Share';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

import './styles.scss';
import { Avatar } from '@material-ui/core';

function Cards({image,title,content,id}) {

  return (
    <div>
      <div class="blogcard">
          <img src={image} alt='' class="img-container"/>
          <span class="share-btn"><i class="fa"><ShareIcon style={{fontSize:'30px'}}/></i></span>
          <div class="post-text">
			<div class="post-meta">
				<span class="post-category">Primary Teacher</span>
				<i class="fa fa-circle-o"><RadioButtonUncheckedIcon style={{fontSize:'6px'}}/></i>
				<span class="post-date"><i class="fa fa-calendar"><CalendarTodayIcon style={{fontSize:'15px'}}/>
          </i>March 2<sup>nd</sup>
        </span>
			</div>
			<h3 class="post-title">
            {title && title.slice(0,30)}
            {title && title.length>35 && <span> ....</span>} 
      </h3>
			<p class="post-desc">
        {content  && content.slice(0,65)} .....
      </p>
		</div>
    <div class="author-container">
      <Avatar>R</Avatar>
      <p>by <span class="author-name">Roshan Bhatta</span></p>
		</div>
      </div>
    </div>
  );
}

export default Cards;
