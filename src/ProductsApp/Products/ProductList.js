import React, { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../utils/ApiUtils";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    const apiResponse = await getProducts();
    setProducts(apiResponse.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const onRedirectDetails = (product) => {
    navigate("/product-details", {
      state: product
    });
  };

  const onSignOut = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div>
      <div className="fs-2">
        ProductList
        <button
          className="create-btn btn btn-primary mt-2"
          onClick={() => navigate("/create-product")}
        >
          Create
        </button>
        <button
          className=" signout-btn btn btn-outline-danger mt-2"
          onClick={() => onSignOut()}
        >
          Sign Out
        </button>
        <div className=" container d-flex justify-content-around mt-4 flex-wrap ">
          {products.length > 0 &&
            products.map((product) => (
              <div className="card my-2" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fs-4 text-success">{product.price}</p>
                  <button
                    className="btn btn-info mb-2 mt-3"
                    onClick={() => onRedirectDetails(product)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
