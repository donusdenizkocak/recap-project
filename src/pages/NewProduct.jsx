import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';


const initialState={
  ProductName:"",
  Image:"",
  ProductPrice:0,
  ProductQuantity:1,
}

const NewProduct = () => {
  const url=process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState(initialState)


  const handleChange=(e)=>{
   setFormData({...formData, [e.target.id]:e.target.value})
   console.log(setFormData)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      await axios.post(url,formData);
      setFormData(initialState)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <ProductForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} text="New"/>
    </div>
  );
}

export default NewProduct