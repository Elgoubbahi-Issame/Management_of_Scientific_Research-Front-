import Hom from '../Home/Home';
import Ser from '../Services/services';
import Tea from '../Team/Team';
import Con from '../Contact/contact';
import Foo from '../Contact/footer';
import '../index.css';
import Log, { Cpopup } from '../Log/Log';
import Nav from '../Navbaar/Navbaar';



function page_H() {
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

export default page_H
