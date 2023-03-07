import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom'


// Contexts import
// signin state manager for login and signin setup
import SignInStateManager from './setup-app/context/login-screen/signin-button-state-context';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SignInStateManager>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </SignInStateManager>
  </React.StrictMode>
);

