import React from 'react'
import './Search.css'
import Nav from '../Navbaar/Navbaar';
import Contsr from './contentSR'
import useFetch from  './useFetch'
import { Link } from 'react-router-dom';
import I1 from './imgSer1.jpg';
import I2 from './imgSer2.jpg';
import { useLocation} from 'react-router-dom'; 

// import Hil from './hil.jpg'


function SearchSR() {
    const location = useLocation();

    React.useEffect(() => {
    //   alert('Location changed');
      document.querySelector(".App").classList.add('doo');
        // alert('The current URL is '+location.pathname);
  
    }, [location]);
    const {data: Equipe ,isPending} = useFetch('http://34.77.153.247:8000/api/Teams/');
    const {data: Labo } = useFetch('http://34.77.153.247:8000/api/Labs/');
const {data: account } = useFetch('http://34.77.153.247:8000/api/Users/');
    return (
        // 
        <div>
            <Nav />
        <div id="cont" className="container">
                <div id="rows"className="row">
                            <div className="search-box">
                                <input className="search-txt" placeholder="Type to search" type="text" />
                                <a className="search-btn"> <i className="fa fa-search"></i></a>
                            
                            </div>
                </div>
            <div className="row">
            <div className="col text-center">
                    <Link to="/search/articles" ><button id="btns" className="btns">Articles</button></Link>
                    <Link to="/search/Structur+de+recherche" ><button id="btns" className="btns ">Structures de recherche</button></Link>
                </div>
            </div>
             <div class="row">
                <div className="col-2">
                    <div className="imag1">
                        <img src={I1} alt="" className="poc1 animate__animated animate__fadeInUp animate__delay-2s"/>
                    </div>
                </div>
                {isPending && <div id="hel" className="spinner-grow text-warning "></div>}
                {/* {Labo && Equipe && <Contsr Equipe={Equipe} Labo={Labo}/>} */}
                {Labo && account && Equipe && <Contsr account={account} Equipe={Equipe} Labo={Labo}/>}
             
                <div className="col-2">
                <div className="imag1">
                        <img src={I2} alt="" className="poc2 animate__animated animate__fadeInDown animate__delay-2s"/>
                    </div>
                </div>
            </div>

        </div>
        </div>
        // <div class="container">
        //     <div className="row">
                
        //     </div>
        //     <div class="row text-center scroll">
        //         <div className="row ">
        //                 <div class="col "></div>
        //                 <div class="col-10  articl">
        //                         <h3>the first one</h3>
        //                         <p>Lorem ipsum dolor sit amet consectetur adipisicing                             elit. Delectus possimus sint quidem deleniti eaque
        //                         explicabo obcaecati facilis, cum, officia veritatis
        //                         vel laboriosam hic, laudantium amet beatae asperiores?
        //                         </p>
        //                     </div>
        //                  <div class="col "></div>

        //         </div>
        //             <div className="row">
        //                 <div class="col "></div>
        //                 <div class="col-10 articl">
        //                         <h3>the second one</h3>
        //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing                             elit. Delectus possimus sint quidem deleniti eaque
        //                         explicabo obcaecati facilis, cum, officia veritatis
        //                         vel laboriosam hic, laudantium amet beatae asperiores?
        //                     </p>
        //                 </div>
        //                 <div class="col "></div>

        //             </div>
        //             <div className="row ">
        //                  <div class="col "></div>
        //                 <div class="col-10 articl">
        //                     <h3>the third one</h3>
        //                     <p>Lorem ipsum dolor sit amet consectetur adipisicing                             elit. Delectus possimus sint quidem deleniti eaque
        //                     explicabo obcaecati facilis, cum, officia veritatis
        //                     vel laboriosam hic, laudantium amet beatae asperiores?
        //                     </p>
        //                 </div>
        //                 <div class="col "></div>
        //             </div>
        //     </div>
                    
                  
                   
                  
        // </div>
    )
}

export default SearchSR


       
       
     