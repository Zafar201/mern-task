import Navbar1 from "./components/Navbar1";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import SigninScreen from "./screens/SiginScreen";
import RegisterScreen from "./screens/RegisterScreen";



function App() {
  return (
    <>
      <Router>
        <Navbar1 />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/signin">
            <SigninScreen />
          </Route>
          <Route path="/register">
            <RegisterScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
