export interface CardType {
    title : string,
    description : string,
    image : string,
}

export interface ProductType {
    name : string,
    price : string,
    slug : string,
    image : string,
    quantity : number,
}

export interface Carttype {
    cartItems : ProductType[]
}

export interface StateType {
    Cart : Carttype
}

export type CartActionType = "Add_To_Cart" | "ReducefromCar";

export interface CartAction {
    type : CartActionType,
    payload : ProductType
}