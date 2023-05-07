import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';


const initialState={
  ProductName:"",
  image:"",
  ProductPrice:0,
  ProductQuantity:1,
}

const NewProduct = () => {
  const url=process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState(initialState)
  const handleChange=(e)=>{
   setFormData({...formData, [e.target.id]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      await axios.post(url,formData);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <ProductForm/>
    </div>
  );
}

export default NewProduct