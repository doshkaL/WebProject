import React, { Component } from 'react';
import AuthContext from '../context/auth-context';
import './Auth.css';


class Update extends Component {
  
  state = {
    isLogin: true
  };



  constructor(props) {
    super(props);
   
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  static contextType = AuthContext;

  
  submitHandlerr = event => {
   
   
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;
   const  x = JSON.parse(localStorage.getItem('user'));
   console.log(x.userId);
    if (this.state.isLogin) {
    let  requestBody = {
        query: `
          mutation updateUser($id:ID!,$email: String!, $password: String!) {
            updateUser(updateid:{_id:$id},userInput: {email: $email, password: $password}) {
              _id
              email
            }
          }
        `,
        variables: {
          id:x.userId,
          email: email,
          password: password
        }
      };
      
      const token = this.context.token;
    fetch('http://localhost:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }
        return res.json();
      })
      .then(resData => { 
        if (!resData){
        alert(" not work try agin " );
      }
      alert(" user info update");
      console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

  render() {
    return (
      <form className="auth-form" onSubmit={this.submitHandlerr}>
        <h2>Upate user data </h2>
        <div className="form-control">
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" ref={this.emailEl} />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={this.passwordEl} />
        </div>
        <div className="form-actions">
          <button type="submit">Update</button>
          
        </div>
      </form>
    );
  }
}

export default Update;