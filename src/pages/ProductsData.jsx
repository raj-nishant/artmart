import React, { useState, useEffect } from "react";
import { useAuth } from "../services/AuthContext";

const Product = () => {
  const [productData, setProductData] = useState(null);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtData = JSON.parse(localStorage.getItem("jwt"));
        const response = await fetch(
          "https://artist-shop-back-end.onrender.com/api/illustrations",
          {
            headers: {
              Authorization: `Bearer ${jwtData.jwt}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProductData(data);
        console.log(productData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {productData && isAuthenticated && (
        <div className="mt-10">
          {productData.map((product, index) => (
            <div key={index}>
              <h2>{product.name}</h2>
              <p>Price: ${product.price}</p>
              <img src={product.images[0].url} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
