
export const InitialState = {
    cart: {
        cartItems: [],
    }
}

export const cartfunction = (state, action) => {
    switch (action.type) {
        case "Add_To_Cart":

            // check the request 
            const RequestedItem = action.payload;
            // find the requested item in cart
            const AlreadyInCart = state.cart.cartItems.find((x)=>x.slug === RequestedItem.slug)
            // if exist , update quantity , otherwise update item object
            const UpdatedCart = AlreadyInCart 
            ? state.cart.cartItems.map((x)=>x.slug === RequestedItem.slug ? 
            {...x, quantity : RequestedItem.quantity} : x )
            : [...state.cart.cartItems, RequestedItem]

            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: UpdatedCart,
                }
            }
        default: {
            return state;
        }
    }
}