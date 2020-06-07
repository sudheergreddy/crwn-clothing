import React from "react";
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from '../../redux/cart/cart.actions';

function CartDropdown({cartItems, history, dispatch}) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                cartItems.map(item => {
                    return <CartItem key={item.id} item={item} />
                })
                :
                <span className="empty-message">Your Cart is empty</span>
            }
            </div>
            <span className="total"></span>
            <CustomButton onClick={()=>{history.push('/checkout'); dispatch(toggleCartHidden())  }}>Go To CHECKOUT</CustomButton>
        </div>
    )
}

// const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));