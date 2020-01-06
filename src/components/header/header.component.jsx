import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-drowpdown.component";

import "./header.component.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {/* if hidden render nothing else reder the cart dropdown component */}
    {hidden ? null : <CartDropdown />} 
  </div>
);

// access the state - the root reducer
// mapStateToProps can be anyhthing but is a standard redux codebase naming convention
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
