
import Faq from '../../components/Faq';
import ScrollTab from '../../components/ScrollTab';

const FaqPage = (props) =>{
  return (
    <div>
      <ScrollTab tabs={props.faqs}>
        {
          props.faqs.map((cont,index)=>{
            return (
              <Faq key={index} id={index} faqs={cont.content}/>
            );
          })
        }  
      </ScrollTab>
    </div>
  );
}


export default FaqPage;