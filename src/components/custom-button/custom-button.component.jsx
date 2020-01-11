import React  from 'react';
import './custom-button.styles.scss';

//Creating a custom button
const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

export default CustomButton;