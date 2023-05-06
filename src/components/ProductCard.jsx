import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProductCard = ({item}) => {
const {ProductName,Image,ProductQuantity,ProductPrice,id} = item;


  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={Image}
            className="w-100 h-100 rounded-start"
            alt={ProductName}
            title={""}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
              {ProductName}
            </h5>
            <div className="product-price">
              <p className="text-warning h2">
                $<span className="damping-price"> {(ProductPrice * 0.9).toFixed(2)}</span>
                <span className="h5 text-dark text-decoration-line-through">
                {parseFloat(ProductPrice).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-minus"></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {ProductQuantity}
                </p>
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button className="btn btn-danger btn-sm w-100 remove-product">
              <i class="fa-solid fa-trash-xmark"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $<span className="product-line-price">{(ProductPrice * 0.9 * ProductQuantity).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;