import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { getCartDataRequest } from './actions/actionCreators';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Main from './components/Main';
import Order from './components/Order';
import Error404 from './components/Error404';

function App(props) {
  const customHistory = createBrowserHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartDataRequest('ref'));
  })

  return (
    <>
      <Router history={customHistory}>
        <Switch>
          {/* <Route path='/react-shoe-store/build/catalog/:id' component={ProductInfo} />
          <Route path='/react-shoe-store/build/404' component={Error404} />
          <Route path='/react-shoe-store/build/catalog' component={Catalog} />
          <Route path='/react-shoe-store/build/about' component={About} />
          <Route path='/react-shoe-store/build/contacts' component={Contacts} /> */}
          <Route path='/react-shoe-store/build/order' component={Order} />
          <Route exact path='/react-shoe-store/build/' component={Main} />
          <Route path='/react-shoe-store/build/' component={Error404} />
        </Switch>
      </Router>
    </>
  );
}

export default App;