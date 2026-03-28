// src/components/LoginForm.jsx
import { useState } from 'react';
import { User } from 'lucide-react';
import Logo from './Logo';
import PasswordInput from './PasswordInput';
import Toast from './Toast';
import { useToast } from '../hooks/useToast';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { toast, showToast, hideToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    if (trimmedUser === '' && trimmedPass === '') {
      showToast('Please enter username and password');
    } else if (trimmedUser === '') {
      showToast('Please enter your username or email');
    } else if (trimmedPass === '') {
      showToast('Please enter your password');
    } else {
      showToast('Login successful!', 'green');
      // Add your authentication logic here
      console.log('Login success', { username: trimmedUser, rememberMe });
    }
  };

  return (
    <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl p-8">
      <Logo />

      <h1 className="text-center text-2xl font-semibold text-gray-800">
        Stock Management <br />
        <span className="text-blue-500">System</span>
      </h1>
      <p className="text-center text-sm text-gray-500 mt-1 mb-6">SECURE ACCESS PORTAL</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="text-sm text-gray-600">Username</label>
          <div className="relative mt-1">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full pl-10 pr-3 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-blue-500"
            />
            Remember me
          </label>
          <a href="#" className="text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2.5 rounded-xl text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 transition cursor-pointer"
        >
          Sign In
        </button>
      </form>

      <p className="text-center text-xs text-gray-400 mt-6">
        © 2026 StockMS — All rights reserved
      </p>

      {toast.visible && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </div>
  );
};

export default LoginForm;