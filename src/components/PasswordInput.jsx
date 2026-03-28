// src/components/PasswordInput.jsx
import { useState } from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => setShowPassword(!showPassword);

  return (
    <div>
      <label className="text-sm text-gray-600">Password</label>
      <div className="relative mt-1">
        <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;