import React from "react";
import { ActionTypes } from "../constent/ActionTypes"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products 
    }
}
export const selctedProduct = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products 
    }
}