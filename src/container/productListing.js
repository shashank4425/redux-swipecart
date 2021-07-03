import React from "react";
import axios from "axios"
import { useEffect } from "react";
import Products from "./ProductComponent"
import { useDispatch, useSelector} from "react-redux";
import { setProducts } from "../action/actionTypes";
const ProductListing = () =>{
    const products=useSelector((state) => state.items.products)
     const dispatch = useDispatch();

    const ProductListing= async () => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((err) => {
            console.log(err)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(()=>{
        ProductListing();
        
     },[])
    return (
        <>
         <div className="product_details">
         <Products/>
         </div>          
        </>
    )
}

export default ProductListing;