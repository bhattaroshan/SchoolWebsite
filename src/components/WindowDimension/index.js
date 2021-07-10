import {useEffect,useState} from 'react';

const WindowDimension = () =>{
  
  const [resolution,setResolution] = useState({width:window.innerWidth,height:window.innerHeight});

  useEffect(()=>{
    
    const handleResize = () =>{
      setResolution({width:window.innerWidth,height:window.innerHeight});
    }

    window.addEventListener('resize',handleResize);

    return ()=>{
      window.removeEventListener('resize',handleResize);
    }
  },[])
  return resolution;
}

export default WindowDimension;