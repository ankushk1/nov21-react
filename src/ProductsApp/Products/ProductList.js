import React, { useState } from "react";
import { useEffect } from "react";
import { getProducts } from "../../utils/ApiUtils";
import '../../App.css'
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

  return (
    <div>
      <div className="fs-2">
        ProductList
        <button className="create-btn btn btn-primary mt-2" onClick={() => navigate('/create-product')}>Create</button>
        <div className=" container d-flex justify-content-around mt-4 flex-wrap ">
          {products.length > 0 &&
            products.map((product) => (
              <div class="card my-2" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">{product.description}</p>
                  <p class="card-text fs-4 text-success">{product.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
