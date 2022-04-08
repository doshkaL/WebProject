import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthPage from './pages/Auth';
import BookingsPage from './pages/Bookings';
import EventsPage from './pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';
import './App.css';
import AuthContext from './context/auth-context';
import Update from './pages/Update';
import How from './pages/How';

class App extends Component {
  userData;
  state = {
    token: '',
    userId:''
    
}
 
  login = (token, userId, tokenExpiration) => {
    this.setState({ token: token, userId: userId });
    this.componentDidMount();
  };

  logout = () => {
    this.setState({ token: null, userId: null });
   
  };
 
// React Life Cycle
componentDidMount() {
  this.userData = JSON.parse(localStorage.getItem('user'));
  if (localStorage.getItem('user')) {
 
      this.setState({
        token: this.userData.token,
        userId: this.userData.userId,
      })
  } else {
      this.setState({
          token: '',
          userId:''
      })
  }
}
componentWillUpdate(nextProps, nextState) {
  localStorage.setItem('user', JSON.stringify(nextState));
}
  
  render() { 
     
 
    return (
      <BrowserRouter>
       <AuthContext.Provider
       {...this.componentDidMount}
            value={{
              token: this.state.token,
              userId: this.state.userId,
              login: this.login,
              logout: this.logout
            }}
          >
      <MainNavigation  />
      <main className="main-content">

    
       
       
        <Routes>
      
         {!this.state.token &&  <Route path="/auth" element={<AuthPage/>} />}
         {!this.state.token &&<Route path="/events" element={<EventsPage/>} /> } 
         {!this.state.token &&<Route path="/How" element={<How/>} /> } 
         {this.state.token &&<Route path="/events" element={<EventsPage/>} /> } 
          
         {this.state.token &&<Route path="/bookings" element={<BookingsPage/>} /> }
         {this.state.token &&<Route path="/update" element={<Update/>} /> } 
        </Routes>  
        </main>
        </AuthContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;