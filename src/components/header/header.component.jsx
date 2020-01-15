
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) =>(
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
     </div>
  </div>
);

//Use to grab the state from the reducer. state is the root reducer
const mapStateToProps = state => ({
   currentUser: state.user.currentUser
})
/**
Use connect to connect our store to our component and pass in the mapStateToProps as argument */
export default connect(mapStateToProps)(Header);