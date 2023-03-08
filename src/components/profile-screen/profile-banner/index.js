// Hooks
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// CSS import
import './stylesheet/style.css';

// Assets import
import netflixAvatarLogo from '../../../assets/images/netflix-avatar-logo/netflix-avatar.png';

// Redux import
import { selectUser } from '../../../features/userSlice';

// Firebase import
import { auth } from '../../../firebase/Firebase';

// Component import
import PlansScreen from '../plans-on-profile';

function ProfileBanner() {

  const user = useSelector(selectUser)

  const navigate = useNavigate()

  return (
    <div className='profile_screen'>

      <div className="profile_screen_body">

        <h1>Edit Profile</h1>

        <div className="profile_screen_info">

          <img src={netflixAvatarLogo} alt="" />

          <div className="profile_screen_details">

            <h2>{user.email}</h2>

            <div className="profile_screen_plans">

              <h3>Plans</h3>

              <PlansScreen />

              <button onClick={() => {
                auth.signOut()
                alert("Logout Successed")
                navigate('/login&signup-home')
              }
              }
                className='profle_screen_signout'>
                Sign Out</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default ProfileBanner