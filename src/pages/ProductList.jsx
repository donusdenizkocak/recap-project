import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";



const ProductList = () => {
const url=process.env.REACT_APP_API_URL;
    const [product,setProduct] =useState([])
    const [loading,setLoading] =useState(true)
    const [errorState,setErrorState] =useState(false)

    const getProducts = async() =>{
     
        try {
            const {data} = await axios(url)
            setProduct(data)
            setErrorState(false)
            setLoading(false)
           console.log("heyo")
        } catch (error) {
           console.log(error)
           setErrorState(true) 
        }
    }
    console.log(product)

useEffect(()=>{
getProducts();
},[]);


  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
       {loading ? <p className="text-center text-danger w-100">Loading....</p>
       : product.length > 0 ?
        <>
          <article id="product-panel" className="col-md-5">
           {product.map((item,id) => {
            return <ProductCard item={item} key={id}/>
           })}
            
          </article>
          <article className="col-md-5 m-3">
            <CardTotal product={product}/>
          </article>
        </>
        : (!errorState && <p className="text-center text-danger w-100">No products data...</p> )
        }

      {errorState && (<p className="text-center text-danger w-100">Error...</p>)}
      </div>
    </div>
  );
};

export default ProductList;