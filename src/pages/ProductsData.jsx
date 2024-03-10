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
    <div className="flex flex-col items-center">
      {productData && isAuthenticated && (
        <div className="mt-10 w-full">
          {productData.map((product, index) => (
            <div
              key={index}
              className="flex items-center bg-white rounded-lg shadow-md mb-4 w-full"
            >
              <img
                src={product.images[0].url}
                alt=""
                className="w-1/3 h-44 object-cover rounded-l-lg"
              />
              <div className="flex flex-col p-4 w-full">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
