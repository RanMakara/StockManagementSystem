// src/components/Toast.jsx
import { useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

const Toast = ({ message, type = 'orange', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'green' ? 'bg-green-500' : 'bg-orange-400';

  return (
    <div className={`fixed top-5 right-5 px-5 py-3 rounded-xl shadow-lg flex items-center gap-3 min-w-[280px] animate-slideIn z-50 text-white ${bgColor}`}>
      <AlertTriangle className="w-5 h-5" />
      <span className="text-sm font-medium">{message}</span>
      <button onClick={onClose} className="ml-auto text-white text-lg hover:opacity-80">
        ✕
      </button>
    </div>
  );
};

export default Toast;