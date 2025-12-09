import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../utils/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.name || !form.email || !form.password) {
      setError('All fields required');
      return;
    }
    try {
      await API.post('/register', form);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        <form onSubmit={submit}>
          <input
            name="name"
            value={form.name}
            onChange={change}
            className="w-full p-3 mb-3 border rounded-lg"
            placeholder="Full name"
          />
          <input
            name="email"
            value={form.email}
            onChange={change}
            className="w-full p-3 mb-3 border rounded-lg"
            placeholder="Email"
            type="email"
          />
          <input
            name="password"
            value={form.password}
            onChange={change}
            className="w-full p-3 mb-3 border rounded-lg"
            placeholder="Password"
            type="password"
          />

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <button className="w-full bg-green-600 text-white p-3 rounded-lg mb-3">
            Register
          </button>

          <div className="text-center">
            <Link to="/login" className="text-sm text-blue-600">
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
