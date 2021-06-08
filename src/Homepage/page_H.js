import Hom from '../Home/Home';
import Ser from '../Services/services';
import Tea from '../Team/Team';
import Con from '../Contact/contact';
import Foo from '../Contact/footer';
import '../index.css';
import Nav from '../Navbaar/Navbaar';
import Log, { Cpopup } from '../Log/Log';
import React,{useEffect} from 'react';
import { useLocation} from 'react-router-dom'; 
function Page_H(){
  const location = useLocation();
 
   
  React.useEffect(() => {
  //   alert('Location changed');
  // window.location.reload();
    document.querySelector(".App").classList.remove('doo');
      // alert('The current URL is '+location.pathname);
 
  }, [location]);
    return (
    <div>
      <Nav />
      <Hom />
      <Ser />
      <Tea />
      <Con />
      <Foo />  
      <div className="content hide" onClick={Cpopup}> </div>
        <Log />
    </div>
    )
}

export default Page_H;
 // 


 
