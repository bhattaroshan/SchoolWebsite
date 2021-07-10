
import Blog from '../../components/Blog';
import Author from '../../components/Author';
import WindowDimension from '../../components/WindowDimension';


const ArticlePage = () =>{
  // const screen = WindowDimension();
  const blogWidth = 90;
  return (
    <>
      <Blog width={blogWidth}/>
      <Author width={blogWidth}
              image={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Robert_Greene_B%26W.jpg/1200px-Robert_Greene_B%26W.jpg'} 
              title="About the author" 
              text="Harke is an author of 5 New York's best-selling novel. He started is career as a writer two decades ago. His first book 'The Da Vinci Code' is famous among his fans."/>
    </>
  );
}

export default ArticlePage;