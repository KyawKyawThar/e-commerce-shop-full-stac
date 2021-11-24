import ProductDesc from './pages/ProductDesc/ProductDesc';
import Home from './pages/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductLists from './pages/ProductLists/ProductLists';
import Cart from './pages/Cart/Cart';
import SignIn from './pages/SignIn/SignIn';

import Success from './components/Success/Success';

import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log({ user });

  return (
    <div>
      {/* <NavBar user={user} /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products/:categories' component={ProductLists} />
        <Route path='/product/:id' component={ProductDesc} />
        <Route path='/cart' component={Cart} />

        <Route path='/success' component={Success} />

        {user ? (
          <Route exact path='/login'>
            <Redirect to='/' />
          </Route>
        ) : (
          <SignIn />
        )}
      </Switch>
    </div>
  );
};

export default App;
