import React, {Component} from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home';
import Cart from './Cart';
// import Parent from './Parent';
// import Child from './firstChild';
import Error from './ErrorPage';
import  './index.css';

class App extends Component{

  render(){
    return (
      <div>
        
        <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/Cart/" component={Cart} />
            <Route exact path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </div>
        </Router>
      </div>
    )
  }
}
 function Header(){
   return(
    <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
    <Link to="/" className="navbar-brand">My Shopping Cart</Link>
      {/* <a class="navbar-brand" href="/">My Shopping Cart</a> */}
    </div>
    <ul className="nav navbar-nav">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Cart'>My Cart</Link></li>
    </ul>
    {/* <form class="navbar-form navbar-left" action="/action_page.php">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search"/>
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form> */}
  </div>
</nav>
   )
 }
export default App;