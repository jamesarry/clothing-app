import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) =>(
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
     { 
       hidden ? null : <CartDropdown />
    }
  </div>
    
);

/**
 * Use to grab the state from the reducer. state is the root reducer
 *get the currentuser out of the user 
 */
const mapStateToProps = ({user: {currentUser}, cart: {hidden} }) => ({
   currentUser,
   hidden
})
/**
Use connect to connect our store to our component and pass in the mapStateToProps as argument */
export default connect(mapStateToProps)(Header);