import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Products = () => {
    const product=useSelector((state) => state.items.products)
    const listItem=product.map(product => {
       const {id, title,price,category,image}=product;
        return(
          <>
            <div className="list_item" key={id}>
            <Link to={`/product/${id}`} target="_blank">
               <div className="img_sec">
                 <img src={image}/>
               </div>
               <div className="content_sec">
                   <ul className="list">
                       <li>{title}</li>
                       <li>{category}</li>
                       <li>{price}</li>
                   </ul>
               </div>
              </Link>
            </div>
          </>
        )
    })
    return (
         <>  {listItem} </>
    )
}
export default Products