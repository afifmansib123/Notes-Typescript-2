import { StateType, CartActionType, CartAction } from "@/type/types";
import React, { Children, createContext, ReactNode, useReducer } from "react";
export const State: StateType = {
    Cart: {
        cartItems: [],
    }
}

// the second statetype is for what return type

export const CartFunctionality = (state: StateType, action: CartAction): StateType => {
    switch (action.type) {
        case "Add_To_Cart":

            const ItemRecieved = action.payload;
            const CheckInCart = state.Cart.cartItems.find((x) => x.slug === ItemRecieved.slug)

            const UpdatedCart = CheckInCart ?
                state.Cart.cartItems.map((x) => x.slug === ItemRecieved.slug ?
                    { ...x, quantity: ItemRecieved.quantity } : x
                ) : (
                    [...state.Cart.cartItems, ItemRecieved]
                )
            return {
                ...state,
                Cart: {
                    ...state.Cart,
                    cartItems: UpdatedCart
                }
            }
        case "ReducefromCar":

            const ItemRecieved1 = action.payload;
            const CheckInCart1 = state.Cart.cartItems.find((x) => x.slug === ItemRecieved1.slug)

            const UpdatedCart1 = CheckInCart1 ?
                state.Cart.cartItems.map((x) => x.slug === ItemRecieved1.slug ?
                    { ...x, quantity: ItemRecieved1.quantity } : x
                ).filter((x) => x.quantity > 0) : (
                    [...state.Cart.cartItems, ItemRecieved1]
                )
            return {
                ...state,
                Cart: {
                    ...state.Cart,
                    cartItems: UpdatedCart1
                }
            }
    }
}

export const Statecontext = createContext<{ state: StateType, dispatch: React.Dispatch<CartAction> }>({ state: State, dispatch: () => { } })

export const Stateprovider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(CartFunctionality, State)
    return <Statecontext.Provider value={{ state, dispatch }}>{children}</Statecontext.Provider>
}