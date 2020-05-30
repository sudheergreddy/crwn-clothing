import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from "../cart-item/cart-item.component";

function CartDropdown({cartItems}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(item => {
                    return <CartItem key={item.id} item={item} />
                })}
            </div>
            <span className="total"></span>
            <CustomButton>Go To CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);