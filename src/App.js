import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Home,Cart,Checkout} from './pages'

function App() {
 
  return (
    <Router>
      <Switch>
       <Route path = '/' exact component = {Home} />
       <Route path = '/cart'  component = {Cart} />
       <Route path = '/checkout'  component = {Checkout} />
      </Switch>
    </Router>
  );
}

export default App;
