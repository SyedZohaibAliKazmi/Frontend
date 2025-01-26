'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage('Login successful!');
        setErrorMessage('');

        // Save token in localStorage or cookies
        localStorage.setItem('token', data.token);

        // Redirect user to a different page after login
        setTimeout(() => {
          router.push('/'); // Change '/dashboard' to your desired page
        }, 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed!');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Something went wrong! Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-400">
      <div
        className="p-8 rounded-xl shadow-lg backdrop-blur-md bg-green-600 bg-opacity-20 border border-gray-500 max-w-md w-full"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
              placeholder="Enter Password"
              required
            />
          </div>

          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-100 mb-4">{successMessage}</p>}

          <button
            type="submit"
            className="w-full px-6 py-2 bg-green-400 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-white mt-4">
          Don't have an account? <a href="/registration">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
