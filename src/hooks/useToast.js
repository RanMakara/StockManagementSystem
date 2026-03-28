// src/hooks/useToast.js
import { useState } from 'react';

export const useToast = () => {
  const [toast, setToast] = useState({ visible: false, message: '', type: 'orange' });

  const showToast = (message, type = 'orange') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast({ visible: false, message: '', type: 'orange' });
  };

  return { toast, showToast, hideToast };
};