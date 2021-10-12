import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import WelcomeComponent from "./Components/Pages/Welcome/Welcome.component";
import ProductsComponent from "./Components/Pages/Products/Products.component";
import MainHeaderComponent from "./Components/Component/MainHeader/MainHeader.component";
import ProductDetailComponent from "./Components/Pages/Products/ProductDetail/ProductDetail.component";

function App() {
  return (
    <div>
      <MainHeaderComponent />

      <main>
        <Switch>
          <Route path="/welcome">
            <WelcomeComponent/>
          </Route>
          <Route path="/products">
            <ProductsComponent/>
          </Route>
          <Route path="/product-detail/:productId">
            <ProductDetailComponent />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
