import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selecCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
)

export const selecCartItemsCount = createSelector(
	[selecCartItems],
	(cartItems) => cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity,
		0
	)
);
