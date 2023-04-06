import React from 'react';
import './reviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const reviewItem = ({product,handleRemoveFromCart}) => {
    const {id,img,price,name,quantity}=product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default reviewItem;