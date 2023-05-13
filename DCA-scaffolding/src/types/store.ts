import { product } from "./product"

export type Observer = ({render: () => void} & HTMLElement)

export type AppState = {
    user: {
        userName: string,
        email: string,

    }, 
    product: product[];
}

export enum AuthActions{
    "LOGIN" = "LOGIN",
    "LOGOUT" = "LOGOUT",
}
export enum ProductActions{
    "ADD" = "ADD",
    "GET" = "GET",
}

export interface logInAction{
    action: AuthActions.LOGIN
    payload: Pick<AppState, "user">
}

export interface logOutAction{
    action: AuthActions.LOGOUT
    payload: void;
}
export interface AddProductAction{
    action: ProductActions.ADD
    payload: product
}
export interface GetproductAction{
    action: ProductActions.GET
    payload: product[];
};

export type Actions = logInAction | logOutAction | AddProductAction | GetproductAction