import ProductDesc from "./pages/ProductDesc/ProductDesc";
import Home from "./pages/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import ProductLists from "./pages/ProductLists/ProductLists";
import Cart from "./pages/Cart/Cart";
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";

const App = () => {
  const user = true;
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:categories" component={ProductLists} />
        <Route path="/product/:id" component={ProductDesc} />
        <Route path="/cart" component={Cart} />

        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <SignIn />}
        </Route>

        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
