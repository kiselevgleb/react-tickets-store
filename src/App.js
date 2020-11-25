import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Main from './components/Main';
import Order from './components/Order';
import Error404 from './components/Error404';

function App(props) {
  const customHistory = createBrowserHistory();

  return (
    <>
      <Router history={customHistory}>
        <Switch>
          <Route path='/order' component={Order} />
          <Route exact path='/' component={Main} />
          <Route path='/' component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;