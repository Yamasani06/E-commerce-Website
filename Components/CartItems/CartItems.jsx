import React, { useContext, } from 'react';
import './CartItems.css';
import { ShopContext } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart,selectedSizes} = useContext(ShopContext);
    

    const handleCheckout = () => {
      alert("Hurray! Your Order is Confirmed"); 
  };

  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Size</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
              return <div>
                    
                        <div className="cartitems-format cartitems-format-main">
                          <img src={e.image} alt='' className='carticon-product-icon'/>
                          <p>{e.name}</p>
                          <p>${e.new_price}</p>
                          <p>{selectedSizes[e.id] || "Not Selected"}</p>
                          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                          <p>${e.new_price*cartItems[e.id]}</p>
                          <img  className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt=''/>
                        </div>
                         <hr/>
                    </div>
            }
            return null;
        })}
        <div className='cartitems-down'>
          <div className='cartitems-total'>
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className='cartitems-total-item'>
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>

            </div>
            <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
            

          </div>
          <div className="cartitems-couponcode">
            <p>If you have a coupon code, Enter it here</p>
            <div className="cartitems-couponbox">
              <input type='text' placeholder='Enter coupon code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>

      
    </div>
  )
}

export default CartItems
