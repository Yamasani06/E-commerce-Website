import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart,addToWishlist,selectSize} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img  className='productdisplay-main-img' src={product.image} alt=''/>
            </div>

        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(178)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>

            </div>
            <div className="productdisplay-right-description">
            A lightweight, warm and stylish with this cozy sweater, crafted for ultimate comfort. Perfect for layering, it's a must-have for any modern wardrobe.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                {["S", "M", "L", "XL", "XXL"].map(size => (
                    <button className='size-button' key={size} onClick={() => selectSize(product.id, size)}>
                        {size}
                    </button>
                ))}
            </div>

            </div>
            <div className='productdisplay-right-buttons'>
            <button onClick={()=>{addToCart(product.id)}}  className='add-to-cart'>ADD TO CART</button>
            <button className='add-to-wishlist' onClick={()=>{addToWishlist(product.id)}}>ADD TO WISHLIST</button>
            </div>
            <p className='productdisplay-right-category'><span>Category : </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>


        </div>
      
    </div>
  )
}

export default ProductDisplay
