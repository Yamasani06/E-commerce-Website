import React, { useContext} from 'react';
import './WishlistItems.css';
import { ShopContext } from '../Context/ShopContext';

import remove_icon from '../Assets/cart_cross_icon.png';

const WishlistItems = () => {
     const {all_product,wishlistItems,removeFromWishlist,selectedSizes} = useContext(ShopContext);
        

  return (
    <div className='wishlistitems'>
        <div className="wishlistitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Size</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((e) => {
                if (wishlistItems.includes(e.id)) { 
                    return (
                        <div key={e.id}>
                            <div className="wishlistitems-format wishlistitems-format-main">
                                <img src={e.image} alt='' className='wishlisticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <p>{selectedSizes[e.id] || "Not Selected"}</p>
                                <img 
                                    className='wishlistitems-remove-icon' 
                                    src={remove_icon} 
                                    onClick={() => removeFromWishlist(e.id)} 
                                    alt='' 
                                />
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
    </div>
  )
}

export default WishlistItems;
