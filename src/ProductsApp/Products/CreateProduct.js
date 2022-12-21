import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createProduct, getCategories, updateProduct } from "../../utils/ApiUtils";
import { useFromHook } from "../../utils/CustomHooks";
import { error, success } from "../../utils/NotificationUtils";

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const { formInputs, onInputChange, setFromInputs } = useFromHook();
  const navigate = useNavigate();
  const location = useLocation();
  const productData = location.state;

  const onProductCreate = async () => {
    const apiResponse = await createProduct({
      ...formInputs
    });
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  };

  const fetchCategories = async () => {
    const apiResponse = await getCategories();
    setCategories(apiResponse.data.categories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const onProductUpdate = async () => {
    const apiResponse = await updateProduct(productData._id, formInputs);
    if (apiResponse.status === 200) {
      success(apiResponse.data.message);
      navigate("/products");
    } else {
      error(apiResponse.data.message);
    }
  }

  useEffect(() => {
    if(productData) {
      const currData = {...formInputs}
      currData.name = productData.name
      currData.description = productData.description
      currData.price = productData.price
      currData.quantity = productData.quantity
      currData.category = productData.category._id
      setFromInputs(currData)
    }
  }, [productData])

  return (
    <div>
      <div className="fs-3 mt-4 mb-2">
        {productData ? "Update Product" : "Create Product"}
      </div>
      <div>
        <div className="d-flex m-auto flex-column w-50 my-3">
          <input
            className="form-control my-2"
            type="text"
            name="name"
            placeholder="name"
            value={formInputs.name}
            onChange={(e) => onInputChange(e)}
          />
          <input
            className="form-control my-2"
            name="description"
            placeholder="description"
            value={formInputs.description}
            onChange={(e) => onInputChange(e)}
          />
          <input
            className="form-control my-2"
            name="price"
            placeholder="price"
            value={formInputs.price}
            onChange={(e) => onInputChange(e)}
          />
          <input
            className="form-control my-2"
            name="quantity"
            placeholder="quantity"
            value={formInputs.quantity}
            onChange={(e) => onInputChange(e)}
          />
          <select
            name="category"
            className="form-control my-2"
            onChange={(e) => onInputChange(e)}
            value={formInputs.category}
          >
            <option value="">None</option>
            {categories.length > 0 &&
              categories.map((category) => (
                <option value={category._id}>{category.description}</option>
              ))}
          </select>
        </div>
        {productData ? (
          <button
            className="btn btn-outline-warning mt-2"
            onClick={() => onProductUpdate()}
          >
            Update
          </button>
        ) : (
          <button
            className="btn btn-primary mt-2"
            onClick={() => onProductCreate()}
          >
            Create
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
