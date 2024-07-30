import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
// import { AuthProvider } from './context/AuthContext';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <ThemeProvider theme={theme}>
    <ToastContainer />
      <App />
    </ThemeProvider>
    {/* </AuthProvider> */}
  </React.StrictMode>
);
