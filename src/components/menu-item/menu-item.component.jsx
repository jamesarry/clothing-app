import React from 'react';
import './menu-item.styles.scss';

  
export const MenuItem = ({title, imageUrl, size}) => (
   /**Apply css style to the html element. It allows us to dynamically make style in our component.style={{
          backgroundImage: `url(${imageUrl})`
        }}
    */
  <div className={`${size} menu-item`}>
    <div 
     className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
     />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>

);

export default MenuItem;