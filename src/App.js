import './App.css';

import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [count, setCount] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can implement your authentication logic here
    // For this example, it just checks if username and password are not empty
    if (username === 'Ragunath' && password === 'Ragunath@2003') {
      setLoggedIn(true);
      // alert('Logged in successfully!');
    } else {
      // alert(`Please enter valid username and password.${count}`);
      setCount(count+1)
      setUsername('');
    setPassword('');
      
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  if (loggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else if (count>=3){
    return<div>
        <h1>sorry!</h1>
        <button>password reset</button>
      </div>
  }
  else {
    return (
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <div>{count!==0?`attempt no.${count}`:""} </div>
        
      </div>
    );
  }
}

export default App;
