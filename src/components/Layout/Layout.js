import React from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
//import App from '../App';
import About from '../About/About';
import Buy from '../Buy/Buy';
import Homepage from '../HomePage/homepage';


function Layout() {    
    return (
      <div>    
       
        <div >
              {/* routes */}
              <Router>
              <Switch>
                <Route exact path="/" component={Homepage} /> 
                <Route exact path="/home" component={withRouter(Homepage)} />
                <Route exact path="/about" component={withRouter(About)} />
                <Route exact path="/buy" component={withRouter(Buy)} />
              </Switch>
              </Router>
        </div>
      </div>
    )
}



export default Layout