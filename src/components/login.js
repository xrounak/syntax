

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, {useState} from 'react';
import { Await } from 'react-router-dom';
import {auth} from './firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const navigate = useNavigate();
    

    const handleSubmit = async(e) => {
      e.preventDefault();

      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("login sucess");
        navigate("/homepage")
      } catch (error) {
        setError(error.message);
      }

    };

  return( <div>
  <h2>Login</h2>
  {error && <p style={{ color: 'red' }}>{error}</p>}
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
    <button type="submit">Login</button>
  </form>

  <p>Don't have an account?</p>
  <button onClick={() => navigate('/register')}>Go to Register</button>
</div>
);
};

export default Login;
