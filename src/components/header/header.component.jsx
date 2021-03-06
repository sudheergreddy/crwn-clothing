import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';


function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
                </Link>
                <Link className="option" to="/contact">
                    CONTACT
                </Link>
                {
                    (auth.currentUser) ?
                        <div className="option" onClick={() => {
                            auth.signOut();
                        }}>
                            SIGN OUT
                        </div>
                        :
                        <Link className="option" to="/signin">
                            SING IN
                        </Link>
                }
                <CartIcon className="cart"/>
            </div>
            {hidden && <CartDropdown/>}
        </div>
    );
}

// const mapStateToProps = ({user:{currentUser}, cart:{hidden}}) => ({

// const mapStateToProps = (state) => ({
//     // currentUser: state.user.currentUser,
//     // hidden: state.cart.hidden
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);