import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector} from "react-redux";
import { selctedProduct } from "../action/actionTypes";

const Products = () => {
    const productId=useParams();
    const product=useSelector((state) => state.product)
    const {id, title,price,image,category,description}=product;
    const dispatch=useDispatch();
    const productDetails= async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId.id}`).catch((err) => {
            console.log(err)
        })
        dispatch(selctedProduct(response.data))
    }
    useEffect(()=>{
        productDetails();        
     },[])
     console.log(product)
          return (
                  <>
                   <div className="productDeatil_Sec" key={id}>
                       <div className="left_sec">
                        <div className="img_sec">
                            <img src={image}/>
                        </div>
                       </div>
                       <div className="right_sec">
                           <div className="content">
                               <div className="brand_sec">
                                   <div className="title">
                                    <h1>{title}</h1>
                                   </div>
                               </div>
                               <ul className="prductList">
                                   <li>{category}</li>
                                   <li>{description}</li>
                                   <li>{price}</li>
                               </ul>
                           </div>
                       </div>
                   </div>
                  </>
    )
}
export default Products