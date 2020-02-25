import React, {useState} from "react";
import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';
import BubblePage from './BubblePage';


const Login = (props) => {
  const [cred, setCred] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault();  
    axios
      .post('http://localhost:5000/api/login', cred)
      .then(res =>  {          
        localStorage.setItem('token', res.data.payload);
        props.history.push('/BubblePage');    
   })
  }
  const handleChange = e => {
    e.preventDefault();
    setCred({ ...cred, [e.target.name]: e.target.value });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>     
      
      <form onSubmit={handleSubmit}>
      <label>Username</label>
        <input
          name= 'username'
          type='text'
          value= {cred.username}           
          onChange= {handleChange}           
          />
          <label>Password</label>
        <input 
          name= 'password'
          type='text'
          value= {cred.password}
          onChange= {handleChange}
          />
          <button type= 'Submit'>Submit</button>
      </form>
    </>
  );
};

export default Login;
 