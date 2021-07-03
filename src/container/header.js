import React from "react";
import { Link,NavLink } from "react-router-dom"
import "../css/header.css"
const Header = () =>{
     return (
          <> 
       <div className="header-secondary">
        <div className="container">
         <div className="left-sec">
         <div className="brand-logo">
        <Link to="/">
        <div className="logo">
         <img src="/images/logo.png" alt="logo"/>
         <span><lable className="ex">Explore </lable><i className="more">More<sup className="fa fa-star"></sup></i></span>
        </div>
        </Link>
        </div>
        </div>
        <div className="right-sec">
          <div className="ac-btn">
           <a href="/login-auth" className="log-btn" name="login">Login</a>
          </div>
          <div className="cart_sec">
          <NavLink exact to="/cartitem" className="view_cart"><img src="http://swipecart.herokuapp.com/images/cart_ico.png"/><span className="cartTxt">Cart</span></NavLink>
          </div>
        </div> 
      </div>
     </div>
         </>
     )
}
export default Header;