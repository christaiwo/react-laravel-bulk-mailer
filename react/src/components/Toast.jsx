import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WarningToast = ({ text }) => {
  const notify = () => {
    toast.error(text);
  };

  return (
    <div>
      <ToastContainer />
      {notify()}
    </div>
  );
};
