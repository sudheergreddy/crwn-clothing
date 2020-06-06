import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

function CartIcon({ toggleCartHidden, itemCount }) {
    return (<div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBagIcon className="shopping-icon"></ShoppingBagIcon>
        <span className='item-count'>{
            itemCount
        }</span>
    </div>);
}

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    // itemCount: state.cart.cartItems.reduce(
    //     (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0
    // )
    itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);