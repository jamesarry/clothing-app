import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
       this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
         if(userAuth){
           const userRef = await createUserProfileDocument(userAuth);
           userRef.onSnapshot(snapshot => {
              this.setState({
                 currentUser: {
                   id: snapshot.id,
                   ...snapshot.data()
                 }
              });
           });
          
         }

         this.setState({ currentUser: userAuth });
      });
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
