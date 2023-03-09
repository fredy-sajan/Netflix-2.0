// Hooks
import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom'


// CSS import
import './App.css';
import SignupScreen from './components/login-signup-screen/signup-form';

// Redux import
import { login, logout, selectUser } from './features/userSlice';

// Firebase import
import { auth } from './firebase/Firebase';

// ui import
import LoginScreen from './ui/login-signup-screen';
import ProfileScreen from './ui/profile-screen';

// Component's import
const HomeScreen = lazy(() => import('../src/ui/home-screen/index'))



function App() {

  // User true/false geting  variable
  const user = useSelector(selectUser);

  // Sending user details to Redux
  const dispatch = useDispatch();

  const navigate = useNavigate()

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
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch])


  // JSX start
  return (
    <div className="App">

      {/* login signup home route setup */}
      <Routes>
        <Route path='/login&signup-home' element={<LoginScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/signup' element={<SignupScreen />} />
      </Routes>

      {!user ? (

        // If user not logged
        navigate('/login&signup-home')

      ) : (

        // home route's
        <Suspense fallback={<div>Loading....</div>}>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
          </Routes>
        </Suspense >
      )
      }

    </div >
  );
}

export default App;
