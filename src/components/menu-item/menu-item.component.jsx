import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

  
export const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
   /**Apply css style to the html element. It allows us to.
    * size is to increase the height. dynamically make style in our component.style={{
          backgroundImage: `url(${imageUrl})`
        }}
        //Navigates us to our hat page when hat is clicked
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
    */
  <div className={`${size} menu-item` } 
  onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
/**
 * it is a higher order functions that takes component as its arguement and returns a new modified component.
 */
export default withRouter(MenuItem);