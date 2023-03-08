// Hooks
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS import
import './stylesheet/style.css';

// json local data
import { plansData } from './plans';

// Context import


function PlansScreen() {

  const [products, setProducts] = useState([]);



  const navigate = useNavigate();

  useEffect(() => {
    setProducts(plansData);
  }, [])


  return (
    <div className='plan_screen'>
      {products.map((product) => {

        return (
          <div className="plan_screen_plan">
            <div className="plan_screen_info">
              <h5>{product.plan}</h5>
              <h6>{product.quality}</h6>
            </div>
            <button
              onClick={() => {
                // alert("'Sorry', Currently Stripe payment setup has some issue, We working on it to fix the issue.")
                alert("Your Subscription added, Explore your Shows and Movies")
                navigate('/')
              }
              }
            >
              Subscribe</button>
          </div>
        )

      })
      }
    </div>
  )
}

export default PlansScreen