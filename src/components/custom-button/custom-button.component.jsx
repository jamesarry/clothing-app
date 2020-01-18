import React  from 'react';
import './custom-button.styles.scss';

//Creating a custom button. render google-sign-in class or empty string but always render custom-button
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button 
    className={`${inverted ? 'inverted' : ''} ${
    isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}    
    {...otherProps}
    >
     {children}
  </button>
);

export default CustomButton;