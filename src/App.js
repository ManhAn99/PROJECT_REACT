import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './lib/font-awesome/css/all.min.css'
import Header from './components/Header'
import Add from './components/Add';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import './App.css'
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Switch>
        <Route path = '/' exact component = {WatchList}/>
        <Route path = '/watched' component = {Watched}/>
        <Route path = '/add' component = {Add}/>
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
