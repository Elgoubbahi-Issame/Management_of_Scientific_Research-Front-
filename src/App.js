import HP from './Homepage/page_H';
// import Nav from './Navbaar/Navbaar';
import Sear from './search/Search';
import Adm from './profil/AdmPage/Admin';
import Admp from './profil/AdmPage/AdminP';
import Admsr from './profil/AdmPage/AdminSR';
import Adma from './profil/AdmPage/AdminA';
// import './index.css';


import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

function App() {
  return (
    <Router>

    <div className="App">
      
    <Switch>
      <Route exact path="/" component={HP}/>
      <Route exact path="/search" component={Sear}/>
      <Route exact path="/admin" component={Adm}/>
      <Route exact path="/admin/profile" component={Admp}/>
      <Route exact path="/admin/Structur+de+recherche" component={Admsr}/>
      <Route exact path="/admin/Accounts" component={Adma}/>
    </Switch>
   
    </div>
    </Router>
  );
}

export default App;
