import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';

function CartIcon({toggleCartHidden}){
    return (<div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBagIcon className="shopping-icon"></ShoppingBagIcon>
        <span className='item-count'>00</span>
    </div>);
}

const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);