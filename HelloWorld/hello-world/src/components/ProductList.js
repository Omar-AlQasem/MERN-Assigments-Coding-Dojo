import React from 'react'
import { Link } from '@reach/router';
export default props => {
    return (
        <div>
            <h1> All Products:</h1>
            {props.products.map((product, idx)=>{
            return(  
            <p  key={idx}>
                        <Link to={"/api/products/" + product._id}>
                            {product.title},${product.price},{product.desc} 
                        </Link>
                    </p> )
            })}
        </div>
    )
}