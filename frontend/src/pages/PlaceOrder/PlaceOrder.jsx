import React, { useContext } from 'react'
import '../../styles/PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {

  const {getTotalCartAmount}= useContext(StoreContext);
  
  return (
    <div>
      <form className='place-order' action="">
        <div className="place-order-left">
          <p className="title">Delivery Informations</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
          </div>
          <input type="email" placeholder='Email address'/>
          <input type="text" placeholder='Street'/>
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State'/>
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
            <div className="cart-total">
              <h2>Cart Totals </h2>
              <div>
                <div className='cart-total-details'>
                  <p>Subtotal</p>
                  <p>€{getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <p>Delivery Fee</p>
                  <p>€{getTotalCartAmount() === 0 ? 0 : 2}</p>
                </div>
                <hr />
                <div className='cart-total-details'>
                  <p>Total</p>
                  <p>€{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
                </div>
              </div>
              <button onClick={() => navigate('/order')}> PROCEED TO CHECKOUT </button>
            </div>
        </div>
      </form>
      
    </div>
  )
}

export default PlaceOrder
