import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


function CartDropdown(){
    return(
        <div className="cart-dropdown">
            <div className="carts-items"></div>
            <span className="total"></span>
            <CustomButton>Go To CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;