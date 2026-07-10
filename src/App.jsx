import React, { useState } from 'react';
import Portfolio from './Portfolio';
import LockScreen from './components/LockScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div>
      {!isUnlocked && <LockScreen onUnlock={() => setIsUnlocked(true)} />}
      {isUnlocked && <Portfolio />}
      <ToastContainer />
    </div>
  );
}

export default App;