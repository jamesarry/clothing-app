import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import './App.css';



class App extends React.Component {  
    constructor(props){ 
      super(props);
       
      this.state = {
        currentUser: null
      }
    }
    
    unsubscribeFromAuth = null

    //Assess google authentication sign in and listening to the changes
    componentDidMount(){
       this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
         this.setState({ currentUser: user });

        console.log(user);
      })
    }
     //Close the subscription
      componentWillUnmount(){
        this.unsubscribeFromAuth();
      }

    render(){ 
    return (
        <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
              <Route exact path='/' component={HomePage}/>
              <Route path='/shop' component={ShopPage}/>
              <Route path='/signin' component={SignInAndSignUpPage}/>
            </Switch>            
        </div>
    );
    
 }
}

export default App;
