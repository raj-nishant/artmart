import React, { useState, useEffect } from "react";
import { useAuth } from "../services/AuthContext";
import Switch from '@mui/material/Switch';


const Product = () => {
  const [productData, setProductData] = useState(null);
  const { isAuthenticated } = useAuth();
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

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
            <div key={index} className="p-7 border rounded-lg mb-5 shadow-md">
              <div className="flex items-center bg-white rounded-lg p-4">
                <img
                  src={product.images[0].url}
                  alt=""
                  className="w-1/3 h-44 object-cover rounded-l-lg"
                />
                <div className="flex flex-col flex-grow ml-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h2>
                  <input
                    className="h-20 border rounded-md px-4 mb-2"
                    type="text"
                    placeholder="Description"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">${product.price}</p>
                    <div className="flex items-center">
                      <Switch {...label} />
                      <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Submit for Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
};

export default Product;
