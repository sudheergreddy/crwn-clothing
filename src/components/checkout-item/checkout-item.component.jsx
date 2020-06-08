import React from 'react';
import './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearItemFromCart, removeItem, addItem} from '../../redux/cart/cart.actions';

function CheckOutItem({ cartItem, clearItem, removeItem, addItem }) {
    const{name, imageUrl, price, quantity} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={()=>clearItem(cartItem)}>&#10005;</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckOutItem);