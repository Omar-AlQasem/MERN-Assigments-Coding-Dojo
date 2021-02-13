import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductList from '../components/ProductList';
export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <ProductList/>
        </div>
    )
}
