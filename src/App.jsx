import Homepage from "./pages/Homepage";
import ProductList from "./pages/ProductList";
import ProductItem from './pages/ProductItem'
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component = {Homepage} />
        <Route exact path = '/productlist' component = {ProductList} />
        <Route exact path = '/productitem' component = {ProductItem} />
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/Cart' component = {Cart} />
      </Switch>
    </Router>
  )
};

export default App;