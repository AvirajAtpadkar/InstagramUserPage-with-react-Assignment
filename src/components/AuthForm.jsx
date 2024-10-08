import React, { useState } from 'react';
import InputField from './InputField';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="auth-form">
      {/* <img src="/instagram-logo.png" alt="Instagram Logo" className="logo" /> */}
      <h1>Instagram</h1>
      <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
      
      <form>
        {/* Common Fields */}
        <InputField type="text" placeholder="Username" />
        <InputField type="password" placeholder="Password" />

        {/* Additional Fields for Sign Up */}
        {isSignUp && (
          <>
            <InputField type="text" placeholder="Full Name" />
            <InputField type="email" placeholder="Email" />
          </>
        )}
        
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      
      <button onClick={toggleAuthMode}>
        {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
      </button>
    </div>
  );
};

export default AuthForm;
