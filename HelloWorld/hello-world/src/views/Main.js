import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';
import axios from 'axios';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div style={{textAlign: 'center'}}>
           <ProductForm/>
           <hr/>
           {loaded && <ProductList products={products}/>}
        </div>
    )
}
