import React from 'react';
import Portfolio from './Portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  return (
    <div>
      <Portfolio />
      <ToastContainer />
    </div>
  );
}

export default App;