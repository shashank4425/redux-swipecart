import React from "react";
import Header from "./container/header"
import ProductListing from "./container/productListing";
import ProductDetails from "./container/ProductDetails";
import erorPage from "./container/error"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
function App() {
  return (
    <>
     <Router>
      <Header/>
      <Switch>
         <Route  exact path="/" component={ProductListing}></Route>
         <Route  exact path="/product/:id" component={ProductDetails}></Route>
        <Route component={erorPage}></Route>
       </Switch>
     </Router>
    </>
  );
}
export default App;
