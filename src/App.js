import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';


/**Component is the compnent we want the route to render
 * Path is the string that the path equals to the base url
 * exact is true by defualt. it means the path must be exactly in the base for component to render HomePage and the next component
 * Switch renders only the matched path and nothing else
  */
function App() {  
     
    return (
        <div>
            <switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
            </switch>
        </div>
    );
    
 }

export default App;
