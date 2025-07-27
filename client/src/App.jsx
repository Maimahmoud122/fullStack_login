import React, { useState } from 'react';
import SignupForm from './components/signup';
import LoginForm from './components/login';
import Profile from './components/profile';

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      <h1>Auth App</h1>
      {!token ? (
        <>
          <SignupForm />
          <hr />
          <LoginForm onLogin={setToken} />
        </>
      ) : (
        <>
          <Profile token={token} />
          <button onClick={() => setToken(null)}>Logout</button>
        </>
      )}
    </div>
  );
};

export default App;
