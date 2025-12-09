import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../utils/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // if already logged in, show logout button (handled below)
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Both fields are required');
      return;
    }
    try {
      const res = await API.post('/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setEmail('');
    setPassword('');
    setError('Logged out');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 mb-3 border rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <input
            className="w-full p-3 mb-3 border rounded-lg"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg mb-3">
            Login
          </button>

          <div className="flex justify-between items-center">
            <Link to="/register" className="text-sm text-blue-600">
              Create account
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-gray-600 underline"
            >
              Logout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
