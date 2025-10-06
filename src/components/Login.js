import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim() || (isSignup && (!phone.trim() || !confirm.trim()))) {
      setError('Please fill in all required fields.');
      return;
    }

    if (isSignup && password !== confirm) {
      setError('Passwords do not match.');
      return;
    }

    if (isSignup) {
      // Sign Up flow
      localStorage.setItem('user', JSON.stringify({ name, email, phone, password }));
      alert('Account created successfully!');
      setIsSignup(false);
      setName(''); setEmail(''); setPhone(''); setPassword(''); setConfirm(''); setError('');
    } else {
      // Login flow
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        onLogin(savedUser.name);
        navigate('/');
      } else {
        setError('Invalid email or password.');
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '85vh',
        background: 'linear-gradient(120deg, #e0f2fe, #fef3c7)',
      }}
    >
      <div
        className="card"
        style={{
          maxWidth: '450px',
          width: '100%',
          textAlign: 'center',
          padding: '30px 25px',
          background: 'white',
          borderRadius: '16px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ fontSize: '48px', marginBottom: '10px' }}>🚌</div>
        <h2 style={{ marginBottom: '8px', color: '#1f2937' }}>
          {isSignup ? 'Create an Account' : 'Welcome Back'}
        </h2>
        <p className="small" style={{ marginBottom: '20px', color: '#6b7280' }}>
          {isSignup
            ? 'Sign up to start booking your bus tickets!'
            : 'Login to continue your journey.'}
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {isSignup && (
            <input
              className="input"
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          )}
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isSignup && (
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          )}

          {error && (
            <div style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>{error}</div>
          )}

          <button
            className="btn btn-primary"
            type="submit"
            style={{ marginTop: '16px', width: '100%' }}
          >
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div style={{ marginTop: '20px', fontSize: '13px', color: '#6b7280' }}>
          {isSignup ? (
            <>
              Already have an account?{' '}
              <span
                style={{ color: '#2563eb', cursor: 'pointer' }}
                onClick={() => {
                  setIsSignup(false);
                  setError('');
                }}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{' '}
              <span
                style={{ color: '#2563eb', cursor: 'pointer' }}
                onClick={() => {
                  setIsSignup(true);
                  setError('');
                }}
              >
                Sign up
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
