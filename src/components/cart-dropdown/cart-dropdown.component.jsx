import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {selecCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown = ({cartItems}) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.map(
				(cartItem) => (
					<CartItem item={cartItem} key={cartItem.id}/>
				)
			)}
		</div>
		<CustomButton>GO TO CHEKOUT</CustomButton>
	</div>
)

const mapStateToProps = (state) => ({
	cartItems: selecCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
