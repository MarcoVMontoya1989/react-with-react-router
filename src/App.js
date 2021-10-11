import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomeComponent from "./Components/Welcome/Welcome.component";
import ProductsComponent from "./Components/Products/Products.component";

function App() {
  return (
      <Switch>
        <Route path="/welcome">
          <WelcomeComponent/>
        </Route>
        <Route path="/products">
          <ProductsComponent/>
        </Route>
      </Switch>
  );
}

export default App;
