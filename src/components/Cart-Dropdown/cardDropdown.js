import React from 'react'
import {connect} from "react-redux/es/alternate-renderers";
import {selectCartItems} from '../../redux/cart/cart-Selectors'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../Cart-Item/CartItem'
import './Cart.scss'


const CartDropdown = ({cartItems}) => {
    return (
        <div className={'cart-dropdown'} >
            <div className={'cart-items'} >
                {
                    cartItems.map(item => {
                       return <CartItem item={item}/>
                    })
                }
            </div>
            <CustomButton> GO TO CHECKOUT </CustomButton>
        </div>
    )
};



const mapStateToProps = (state) => (
    {
        cartItems: selectCartItems(state)
    }
);

export default connect(mapStateToProps)(CartDropdown);