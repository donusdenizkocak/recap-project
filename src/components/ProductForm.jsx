
const ProductForm = ({ formData,handleChange,handleSubmit,text}) => {
  
    return (
      <article id="add-product" className="mb-4 mt-4">
        <h1 className="text-center"> {text} Product</h1>
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="product-name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="ProductName"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ProductPrice" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="ProductPrice"
              value={formData.ProductPrice}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ProductQuantity" className="form-label">
              Product Quantity
            </label>
            <input
              type="number"
              className="form-control"
              id="ProductQuantity"
              value={formData.ProductQuantity}
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="Image" className="form-label">
            Product Image
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              https://example.com/
            </span>
            <input
              type="url"
              className="form-control"
              id="Image"
              value={formData.image}
              onChange={handleChange}
              aria-describedby="basic-addon3"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="add-to-cart btn btn-success btn-sm">
              <i className="fa-solid fa-cart-plus me-2"></i>Save To {text} Product
            </button>
          </div>
        </form>
      </article>
    );
  };
  
  export default ProductForm;
  