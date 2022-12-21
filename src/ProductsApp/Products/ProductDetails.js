import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteProduct } from "../../utils/ApiUtils";
import { error, success } from "../../utils/NotificationUtils";

const ProductDetails = () => {
  const location = useLocation();
  const [productDetails, setProductDetails] = useState(() => location.state);
  const navigate = useNavigate();

  const onDeleteProduct = async () => {
    const apiResponse = await deleteProduct(productDetails._id);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  }

  const onRedirectUpdate = () => {
    navigate('/create-product', {
      state: productDetails
    })
  }

  return (
    <div>
      <div className="fs-2 my-3">
        ProductDetails
        <div className="d-flex justify-content-center mt-4">
          <div className="card my-2" style={{ width: "28rem" }}>
            <div className="card-body">
              <h5 className="card-title">{productDetails.name}</h5>
              <p className="card-text">{productDetails.description}</p>
              <p className="card-text fs-4 text-success">
                {productDetails.price}
              </p>
              <p className="card-text fs-4 text-secondary ">
                {productDetails?.category.name}
              </p>
              <button className="btn btn-outline-info my-3">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <button className="btn btn-outline-warning me-3 btn-lg" onClick={onRedirectUpdate}>Update</button>
          <button className="btn btn-outline-danger btn-lg" onClick={onDeleteProduct}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
