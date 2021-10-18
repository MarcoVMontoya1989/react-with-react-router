import React from "react";
import {
  Switch,
  Route,
  Redirect
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
          <Route path={"/"} exact>
            <Redirect from='/' to='/welcome' />
          </Route>
          <Route path="/welcome">
            <WelcomeComponent/>
          </Route>
          <Route path="/products">
            <ProductsComponent/>
          </Route>
          <Redirect from='/products-detail/' to='/products' />
          <Route path="/product-detail/:productId">
            <ProductDetailComponent />
          </Route>
        </Switch>
        {/*<Route path="/products/:productId" exact>*/}
        {/*  <ProductDetailComponent />*/}
        {/*</Route>*/}
      </main>
    </div>
  );
}

export default App;
