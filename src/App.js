// Hooks
import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// CSS import
import './App.css';

// Redux import
import { login, logout, selectUser } from './features/userSlice';

// Firebase import
import { auth } from './firebase/Firebase';

// ui import
import LoginScreen from './ui/login-screen';
import ProfileScreen from './ui/profile-screen';

// Component's import
const HomeScreen = lazy(() => import('../src/ui/home-screen/index'))

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {

    // firebase auth to redux setup
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        dispatch(logout)
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="App">

      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route exact path='/' element={<HomeScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
            </Routes>
          </Suspense>
        </Router>
      )
      }
    </div>
  );
}

export default App;
