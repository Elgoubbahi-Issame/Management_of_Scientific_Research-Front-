import HP from './Homepage/Page_H';
import React from 'react';
// import Nav from './Navbaar/Navbaar';
import Seara from './search/SearchA';
import Searsr from './search/SearchSR';
import Adm from './profil/page_Admin/AdmPage/Admin';
import Admp from './profil/page_Admin/AdmPage/AdminP';
import Admsr from './profil/page_Admin/AdmPage/AdminSR';
import Adma from './profil/page_Admin/AdmPage/AdminA';
import Chfp from './profil/page_ChefLabo/ChfLboPage/ChefLaboP';
import Chfml from './profil/page_ChefLabo/ChfLboPage/ChefLaboML';
import Chfa from './profil/page_ChefLabo/ChfLboPage/ChefLaboA';
import Chfeme from './profil/page_Equipe/ChfEquipePage/ChefEquipeA';
import Chfep from './profil/page_Equipe/ChfEquipePage/ChefEquipeP';
import Profp from './profil/page_Prof/ChfProfPage/ProfP';
// import './index.css';

// import {browserHistory} from 'react-router';



import { BrowserRouter as Router , Switch , Route , useHistory } from 'react-router-dom';

// const history = useHistory() ;

// useEffect(() => {
//    return history.listen((location) => { 
//     location.pathname
//    }) 
// },[history]) 
// history.listen((location, action) => {
//   alert('The current URL is '+location.pathname);
//   alert('The last URL is '+action);
// console.log(`The last navigation action was ${action}`)
// })

// function componentDidMount() {
//   var unlisten = browserHistory.listen( location =>  {
//         console.log('route changes');
//         alert('The current URL is '+location.pathname);
//    });
//   }
function App (){


  
  return (
    <Router>

    <div className="App">
      
    <Switch>
      <Route exact path="/" component={HP}/>
      <Route exact path="/search/articles" component={Seara}/>
      <Route exact path="/search/Structur+de+recherche" component={Searsr}/>
      <Route exact path="/admin" component={Adm}/>
      <Route exact path="/admin/profile" component={Admp}/>
      <Route exact path="/admin/Structur+de+recherche" component={Admsr}/>
      <Route exact path="/admin/Accounts" component={Adma}/>
      <Route exact path="/chefL/profile" component={Chfp}/>
      <Route exact path="/chefL/Mon+labo" component={Chfml}/>
      <Route exact path="/chefL/Accounts" component={Chfa}/>
      <Route exact path="/chefE/profile" component={Chfep}/>
      <Route exact path="/chefE/Mon+Equipe" component={Chfeme}/>
      <Route exact path="/profP/profile" component={Profp}/>
     
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
