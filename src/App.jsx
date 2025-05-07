import React, { Suspense, lazy } from 'react';
import './App.css';

// Lazy load the Signin component
const Signin = lazy(() => import('./components/pages/signin/Signin'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Signin />
    </Suspense>
  );
}

export default App;
